import React, { useEffect, useState } from 'react';

import { useLocation, matchPath, useHistory } from 'react-router-dom';

import {
  makeStyles,
  Stepper,
  Step,
  StepButton,
  Button,
  IconButton,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

import {
  useSelectedCircleEpoch,
  useMe,
  useSelectedAllocation,
  useSelectedAllocationController,
} from 'hooks';
import { BalanceIcon } from 'icons';
import { STEP_MY_TEAM, STEP_ALLOCATION, STEPS } from 'routes/allocation';

import AllocationEpoch from './AllocationEpoch';
import AllocationGive from './AllocationGive';
import AllocationTeam from './AllocationTeam';

import { IAllocationStep } from 'types';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepperRoot: {
    width: '100%',
    justifyContent: 'center',
    '& .MuiStepConnector-root': {
      maxWidth: theme.spacing(10),
    },
  },
  body: {
    flex: 1,
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    overflow: 'auto',
    width: '100%',
  },
  stepRoot: {
    maxWidth: '190px',
  },
  title: {
    margin: theme.spacing(8, 0, 0),
    paddingLeft: theme.spacing(1),
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1.3,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'fixed',
    bottom: 0,
    marginBottom: 53,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 24px',
    fontSize: 19.5,
    lineHeight: 1.75,
    fontWeight: 600,
    textTransform: 'none',
    color: theme.colors.white,
    background: theme.colors.red,
    borderRadius: 13,
    '&.MuiButton-root:hover': {
      background: theme.colors.darkRed,
    },
    '& > *': {
      margin: theme.spacing(0, 0.5),
    },
  },
  backButton: {
    marginRight: theme.spacing(1.5),
    padding: '10px 24px',
    fontSize: 19.5,
    lineHeight: 1.75,
    fontWeight: 600,
    textTransform: 'none',
    color: theme.colors.white,
    background: '#B5C1C7',
    borderRadius: 13,
    '&:hover': {
      background: theme.colors.darkRed,
    },
  },
  balanceContainer: {
    position: 'fixed',
    right: 50,
    top: theme.custom.appHeaderHeight + 90,
    zIndex: 1,
    padding: theme.spacing(0.5, 1),
    display: 'flex',
    borderRadius: 8,
    justifyContent: 'flex-start',
    background: 'linear-gradient(0deg, #FAF1F2, #FAF1F2)',
    boxShadow: '2px 3px 6px rgba(81, 99, 105, 0.12)',
  },
  balanceDescription: {
    margin: 0,
    fontSize: 20,
    fontWeight: 300,
    color: theme.colors.primary,
    '&:first-of-type': {
      fontWeight: 500,
      color: theme.colors.red,
    },
  },
  rebalanceButton: {
    color: theme.colors.primary,
    marginLeft: theme.spacing(1),
    padding: '1px',
  },
}));

export const AllocationPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);

  useSelectedAllocationController();
  const {
    localTeammatesDirty,
    localGiftsDirty,
    tokenRemaining,
    nextStep,
    completedSteps,
    rebalanceGifts,
    saveGifts,
    saveTeammates,
  } = useSelectedAllocation();
  const { epochIsActive, timingMessage } = useSelectedCircleEpoch();
  const { selectedMyUser, updateMyUser, selectedCircle } = useMe();

  const fixedNonReceiver = selectedMyUser?.fixed_non_receiver !== 0;
  const [epochBio, setEpochBio] = useState('');
  const [nonReceiver, setNonReceiver] = useState(false);

  useEffect(() => {
    if (selectedMyUser) {
      setEpochBio(selectedMyUser.bio);
      setNonReceiver(selectedMyUser.non_receiver === 1);
    }
  }, [selectedMyUser]);

  const epochDirty =
    selectedMyUser?.bio !== epochBio ||
    (selectedMyUser?.non_receiver === 1) !== nonReceiver;

  useEffect(() => {
    const exactStep = STEPS.find(({ path }) =>
      matchPath(location.pathname, {
        exact: true,
        path,
      })
    );
    setActiveStep((exactStep ?? nextStep ?? STEP_ALLOCATION).key);
  }, [location]);

  const handleSaveEpoch = async () => {
    await updateMyUser({
      bio: epochBio,
      non_receiver: nonReceiver ? 1 : 0,
      epoch_first_visit: 0,
    });
    setActiveStep(STEP_MY_TEAM.key);
    history.push(STEP_MY_TEAM.path);
  };

  const handleSaveTeamList = async () => {
    await saveTeammates();
    setActiveStep(STEP_ALLOCATION.key);
    history.push(STEP_ALLOCATION.path);
  };

  const handleSaveAllocations = async () => {
    if (localTeammatesDirty) {
      await saveTeammates();
    }
    await saveGifts();
  };

  const handleBack = () => {
    const previous = activeStep - 1;
    previous >= 0 && setActiveStep(previous);
    history.push(STEPS[previous].path);
  };

  const getHandleStep = (step: IAllocationStep) => () => {
    history.push(step.path);
    setActiveStep(step.key);
  };

  return (
    <div className={classes.root}>
      {epochIsActive ? (
        <Stepper
          nonLinear
          activeStep={activeStep}
          classes={{ root: classes.stepperRoot }}
        >
          {STEPS.map((step) => (
            <Step key={step.key} classes={{ root: classes.stepRoot }}>
              <StepButton
                onClick={getHandleStep(step)}
                completed={completedSteps.has(step)}
              >
                {step.label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      ) : (
        <h2 className={classes.title}>{timingMessage}</h2>
      )}

      <div className={classes.body}>
        {epochIsActive && selectedMyUser && activeStep === 0 && (
          <>
            <AllocationEpoch
              epochBio={epochBio}
              setEpochBio={setEpochBio}
              nonReceiver={nonReceiver}
              setNonReceiver={setNonReceiver}
              fixedNonReceiver={fixedNonReceiver}
            />
            <div className={classes.buttonContainer}>
              {epochDirty ? (
                <Button
                  className={classes.saveButton}
                  onClick={handleSaveEpoch}
                >
                  Save Epoch Settings
                </Button>
              ) : (
                <Button
                  className={classes.saveButton}
                  onClick={getHandleStep(STEP_MY_TEAM)}
                >
                  Continue With Current Settings
                </Button>
              )}
            </div>
          </>
        )}

        {epochIsActive && selectedMyUser && activeStep === 1 && (
          <>
            <AllocationTeam />
            <div className={classes.buttonContainer}>
              {localTeammatesDirty ? (
                <Button
                  className={classes.saveButton}
                  onClick={handleSaveTeamList}
                >
                  Save Teammate List
                </Button>
              ) : (
                <Button
                  className={classes.saveButton}
                  onClick={getHandleStep(STEP_ALLOCATION)}
                >
                  Continue with this team
                </Button>
              )}
            </div>
          </>
        )}

        {epochIsActive && activeStep === 2 && (
          <>
            <AllocationGive />
            <div className={classes.balanceContainer}>
              <p className={classes.balanceDescription}>
                {tokenRemaining} {selectedCircle?.token_name || 'GIVE'}
              </p>
              <p className={classes.balanceDescription}>
                &nbsp;left to allocate
              </p>
              <IconButton
                size="small"
                className={classes.rebalanceButton}
                onClick={rebalanceGifts}
                disabled={tokenRemaining === 0}
              >
                <BalanceIcon />
              </IconButton>
            </div>
            <div className={classes.buttonContainer}>
              {localGiftsDirty ? (
                <Button
                  className={classes.saveButton}
                  onClick={handleSaveAllocations}
                >
                  Save Allocations
                </Button>
              ) : (
                <div className={classes.saveButton}>
                  <CheckIcon />
                  Saved
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllocationPage;
