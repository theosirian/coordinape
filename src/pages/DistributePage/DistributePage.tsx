import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { BigNumber, utils } from 'ethers';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { z } from 'zod';

import { FormControl, MenuItem, Select } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { createDistribution } from '../../lib/merkle-distributor';
import { Link, Box, Panel, Button, Text } from '../../ui';
import { ApeTextField } from 'components';
import { useApeDistributor, useCurrentOrg } from 'hooks';
//import { useCurrentOrg } from 'hooks/gql';
import { useCircle } from 'recoilState';
import { useVaults } from 'recoilState/vaults';
import * as paths from 'routes/paths';

import AllocationTable from './AllocationsTable';
import ShowMessage from './ShowMessage';
import { useGetAllocations } from './useGetAllocations';

import { IAllocateUser } from 'types';

/**
 * Displays a list of allocations and allows generation of Merkle Root for a given circle and epoch.
 * @param epochId string
 * @returns JSX.Element
 */
function DistributePage() {
  // Route Parameters
  const { epochId } = useParams();
  const [updateAmount, setUpdateAmount] = useState(0);
  const [selectedVaultId, setSelectedVaultId] = useState('');
  const { uploadEpochRoot } = useApeDistributor();

  const schema = z.object({
    amount: z.number(),
    selectedVaultId: z.string(),
  });
  type DistributionForm = z.infer<typeof schema>;
  const { register, handleSubmit, control } = useForm<DistributionForm>({
    resolver: zodResolver(schema),
  });

  const currentOrg = useCurrentOrg();
  const vaults = useVaults(currentOrg?.id);
  let vaultOptions: Array<{ value: number; label: string; id: string }> = [];

  const { isLoading, isError, data } = useGetAllocations(Number(epochId));
  const { myUser: currentUser } = useCircle(
    data?.epochs_by_pk?.circle?.id as number
  );

  const circle = data?.epochs_by_pk?.circle;
  const epoch = data?.epochs_by_pk;
  const users = data?.epochs_by_pk?.circle?.users;

  const totalGive = users?.reduce(
    (total, { received_gifts: g }) =>
      total + g.reduce((userTotal, { tokens }) => userTotal + tokens, 0),
    0
  );

  const onSubmit: SubmitHandler<DistributionForm> = async (value: any) => {
    if (!users) throw new Error('No users found');

    const gifts = users.reduce((userList, user) => {
      userList[user.address] = user.received_gifts.reduce(
        (t, { tokens }) => t + tokens,
        0
      );
      return userList;
    }, {} as Record<string, number>);

    //MOCK PREVIOUS DATA; MULTIPLY GIVES by 2
    const previousGifts = users.reduce((userList, user) => {
      userList[user.address] = user.received_gifts.reduce(
        (t, { tokens }) => t * 2 + tokens,
        0
      );
      return userList;
    }, {} as Record<string, number>);

    const selectedVault = vaults.find(v => v.id === value.selectedVaultId);

    if (selectedVault && circle) {
      // TODO: Determine if 18 is an appropriate value for the default precision
      const totalDistributionAmount = BigNumber.from(
        value.amount * selectedVault?.decimals ?? 18
      );

      // Previous Distribution mock
      const previousDistributionMock = createDistribution(
        previousGifts,
        totalDistributionAmount.mul(2)
      );
      const distribution = createDistribution(
        gifts,
        totalDistributionAmount,
        previousDistributionMock
      );

      try {
        await uploadEpochRoot(
          selectedVault.id,
          utils.hexlify(circle.id),
          selectedVault.tokenAddress,
          distribution.merkleRoot,
          totalDistributionAmount,
          utils.hexlify(0)
        );
      } catch (e) {
        console.error(e);
      }
    }
  };

  if (!currentUser.isCircleAdmin || currentUser.role < 1) {
    return (
      <ShowMessage message="Sorry, you are not a circle admin so you can't userListess this feature." />
    );
  }

  if (!data?.epochs_by_pk) {
    return <ShowMessage message={`Sorry, Epoch ${epochId} was not found.`} />;
  }

  if (isLoading) {
    return <ShowMessage message="Loading..." />;
  }

  if (isError) {
    return (
      <ShowMessage message="Sorry, there was an error retreiving your epoch information." />
    );
  }

  if (!epoch) {
    return <ShowMessage message={`Sorry, epoch ${epochId} was not found.`} />;
  }

  if (!epoch?.ended) {
    return (
      <ShowMessage
        message={`Sorry, ${circle?.name}: Epoch ${epoch?.number} is still active. You can only distribute epochs that have ended.`}
      />
    );
  }

  if (vaults?.length > 0) {
    vaultOptions = vaults.map((vault, index) => ({
      value: index,
      label: vault.type,
      id: vault.id,
    }));
  } else {
    return (
      <ShowMessage message="No vaults have been associated with your address. Please create a vault." />
    );
  }

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        m: '$lg',
        margin: 'auto',
        maxWidth: '90%',
      }}
    >
      <Panel>
        <Box
          css={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            mt: '$lg',
          }}
        >
          <Box css={{ minWidth: '15%' }}>
            <Link
              href={paths.getVaultsPath()}
              css={{
                fontSize: '$4',
                lineHeight: '$shorter',
                alignSelf: 'center',
                color: '$text',
                display: 'flex',
                alignItems: 'center',
                ml: '$lg',
              }}
            >
              <ArrowBackIcon />
              Back to Vaults
            </Link>
          </Box>
          <Box
            css={{
              textTransform: 'capitalize',
              fontSize: '$9',
              lineHeight: '$shorter',
              fontWeight: '$bold',
              color: '$text',
            }}
          >
            {`${circle?.name}: Epoch ${epoch?.number} has completed`}
          </Box>
          <Box css={{ minWidth: '15%' }}></Box>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box css={{ display: 'flex', justifyContent: 'center', pt: '$lg' }}>
            <Box css={{ mb: '$lg', mt: '$xs', mr: '$md', minWidth: '15vw' }}>
              <FormControl fullWidth>
                <Box
                  css={{
                    color: '$text',
                    fontSize: '$4',
                    fontWeight: '$bold',
                    lineHeight: '$shorter',
                    marginBottom: '$md',
                    textAlign: 'center',
                  }}
                >
                  Select Vault
                </Box>
                <Controller
                  name={'selectedVaultId'}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <>
                        <Select
                          value={value}
                          label="Vault"
                          error={!!error}
                          onChange={({ target: { value } }) => {
                            onChange(value);
                            setSelectedVaultId(String(value));
                          }}
                        >
                          {vaultOptions.map(vault => (
                            <MenuItem key={vault.id} value={vault.id}>
                              {vault.label}
                            </MenuItem>
                          ))}
                        </Select>
                        {error && (
                          <Text
                            css={{
                              fontSize: '$3',
                              lineHeight: '$shorter',
                              fontWeight: '$semibold',
                              color: '$red',
                              textAlign: 'center',
                              paddingTop: '$sm',
                            }}
                            className="error"
                          >
                            {error.message}
                          </Text>
                        )}
                      </>
                    );
                  }}
                />
              </FormControl>
            </Box>
            <Box>
              <Controller
                name={'amount'}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <ApeTextField
                    {...register('amount')}
                    type="number"
                    error={!!error}
                    helperText={error ? error.message : null}
                    value={value}
                    onChange={({ target: { value } }) => {
                      onChange(Number(value));
                    }}
                    onBlur={({ target: { value } }) => {
                      setUpdateAmount(Number(value));
                    }}
                    label="Total Distribution Amount"
                  />
                )}
              />
            </Box>
          </Box>
          <Box css={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="red" size="medium">
              Submit Distribution to Vault
            </Button>
          </Box>
        </form>
        <Box
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Box css={{ pt: '$md', color: '$text' }}>
            Please review the distribution details below and if all looks good,
            approve the Merkle root so that contributoros can claim their funds.
          </Box>
        </Box>
        <Box css={{ m: '$lg' }}>
          {totalGive ? (
            <AllocationTable
              users={users as IAllocateUser[]}
              totalAmountInVault={updateAmount}
              tokenName={
                vaults.find(vault => vault.id === selectedVaultId)?.type ??
                'NO VAULT'
              }
              totalGive={totalGive}
            />
          ) : (
            <ShowMessage message="No GIVE was allocated for this epoch" />
          )}
        </Box>
      </Panel>
    </Box>
  );
}

export default DistributePage;
