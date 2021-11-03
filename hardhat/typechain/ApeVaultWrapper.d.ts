/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ApeVaultWrapperInterface extends ethers.utils.Interface {
  functions: {
    "addFunds(uint256)": FunctionFragment;
    "allVaults()": FunctionFragment;
    "allowanceModule()": FunctionFragment;
    "apeDepositSimpleToken(uint256)": FunctionFragment;
    "apeMigrate()": FunctionFragment;
    "apeRegistry()": FunctionFragment;
    "apeWithdrawUnderlying(uint256)": FunctionFragment;
    "approveCircleAdmin(bytes32,address)": FunctionFragment;
    "bestVault()": FunctionFragment;
    "exitVaultToken(bool)": FunctionFragment;
    "hasAccess(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "profit()": FunctionFragment;
    "registry()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setRegistry(address)": FunctionFragment;
    "simpleToken()": FunctionFragment;
    "syncUnderlying()": FunctionFragment;
    "tap(uint256,uint8)": FunctionFragment;
    "token()": FunctionFragment;
    "totalAssets()": FunctionFragment;
    "totalVaultBalance(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "underlyingValue()": FunctionFragment;
    "updateAllowance(bytes32,address,uint256,uint256,uint256)": FunctionFragment;
    "vault()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addFunds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "allVaults", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowanceModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "apeDepositSimpleToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "apeMigrate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "apeRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "apeWithdrawUnderlying",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveCircleAdmin",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "bestVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exitVaultToken",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "hasAccess", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "profit", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setRegistry", values: [string]): string;
  encodeFunctionData(
    functionFragment: "simpleToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "syncUnderlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tap",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalVaultBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateAllowance",
    values: [BytesLike, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addFunds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allVaults", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowanceModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "apeDepositSimpleToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "apeMigrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "apeRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "apeWithdrawUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveCircleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bestVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exitVaultToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasAccess", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "profit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simpleToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "syncUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalVaultBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {
    "ApeVaultFundWithdrawal(address,address,uint256,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApeVaultFundWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type ApeVaultFundWithdrawalEvent = TypedEvent<
  [string, string, BigNumber, boolean] & {
    apeVault: string;
    vault: string;
    _amount: BigNumber;
    underlying: boolean;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class ApeVaultWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ApeVaultWrapperInterface;

  functions: {
    addFunds(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allVaults(overrides?: CallOverrides): Promise<[string[]]>;

    allowanceModule(overrides?: CallOverrides): Promise<[string]>;

    apeDepositSimpleToken(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    apeMigrate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    apeRegistry(overrides?: CallOverrides): Promise<[string]>;

    apeWithdrawUnderlying(
      _underlyingAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveCircleAdmin(
      _circle: BytesLike,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bestVault(overrides?: CallOverrides): Promise<[string]>;

    exitVaultToken(
      _underlying: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasAccess(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    profit(overrides?: CallOverrides): Promise<[BigNumber]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRegistry(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    simpleToken(overrides?: CallOverrides): Promise<[string]>;

    syncUnderlying(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tap(
      _value: BigNumberish,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalAssets(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    totalVaultBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlyingValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateAllowance(
      _circle: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _interval: BigNumberish,
      _epochAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;
  };

  addFunds(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allVaults(overrides?: CallOverrides): Promise<string[]>;

  allowanceModule(overrides?: CallOverrides): Promise<string>;

  apeDepositSimpleToken(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  apeMigrate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  apeRegistry(overrides?: CallOverrides): Promise<string>;

  apeWithdrawUnderlying(
    _underlyingAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveCircleAdmin(
    _circle: BytesLike,
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bestVault(overrides?: CallOverrides): Promise<string>;

  exitVaultToken(
    _underlying: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasAccess(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  profit(overrides?: CallOverrides): Promise<BigNumber>;

  registry(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRegistry(
    _registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  simpleToken(overrides?: CallOverrides): Promise<string>;

  syncUnderlying(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tap(
    _value: BigNumberish,
    _type: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

  totalVaultBalance(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlyingValue(overrides?: CallOverrides): Promise<BigNumber>;

  updateAllowance(
    _circle: BytesLike,
    _token: string,
    _amount: BigNumberish,
    _interval: BigNumberish,
    _epochAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addFunds(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    allVaults(overrides?: CallOverrides): Promise<string[]>;

    allowanceModule(overrides?: CallOverrides): Promise<string>;

    apeDepositSimpleToken(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    apeMigrate(overrides?: CallOverrides): Promise<void>;

    apeRegistry(overrides?: CallOverrides): Promise<string>;

    apeWithdrawUnderlying(
      _underlyingAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approveCircleAdmin(
      _circle: BytesLike,
      _admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    bestVault(overrides?: CallOverrides): Promise<string>;

    exitVaultToken(
      _underlying: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    hasAccess(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    profit(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setRegistry(_registry: string, overrides?: CallOverrides): Promise<void>;

    simpleToken(overrides?: CallOverrides): Promise<string>;

    syncUnderlying(overrides?: CallOverrides): Promise<void>;

    tap(
      _value: BigNumberish,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalVaultBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingValue(overrides?: CallOverrides): Promise<BigNumber>;

    updateAllowance(
      _circle: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _interval: BigNumberish,
      _epochAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ApeVaultFundWithdrawal(address,address,uint256,bool)"(
      apeVault?: string | null,
      vault?: null,
      _amount?: null,
      underlying?: null
    ): TypedEventFilter<
      [string, string, BigNumber, boolean],
      {
        apeVault: string;
        vault: string;
        _amount: BigNumber;
        underlying: boolean;
      }
    >;

    ApeVaultFundWithdrawal(
      apeVault?: string | null,
      vault?: null,
      _amount?: null,
      underlying?: null
    ): TypedEventFilter<
      [string, string, BigNumber, boolean],
      {
        apeVault: string;
        vault: string;
        _amount: BigNumber;
        underlying: boolean;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addFunds(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allVaults(overrides?: CallOverrides): Promise<BigNumber>;

    allowanceModule(overrides?: CallOverrides): Promise<BigNumber>;

    apeDepositSimpleToken(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    apeMigrate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    apeRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    apeWithdrawUnderlying(
      _underlyingAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveCircleAdmin(
      _circle: BytesLike,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bestVault(overrides?: CallOverrides): Promise<BigNumber>;

    exitVaultToken(
      _underlying: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasAccess(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    profit(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRegistry(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    simpleToken(overrides?: CallOverrides): Promise<BigNumber>;

    syncUnderlying(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tap(
      _value: BigNumberish,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalVaultBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlyingValue(overrides?: CallOverrides): Promise<BigNumber>;

    updateAllowance(
      _circle: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _interval: BigNumberish,
      _epochAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addFunds(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allVaults(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowanceModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    apeDepositSimpleToken(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    apeMigrate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    apeRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    apeWithdrawUnderlying(
      _underlyingAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveCircleAdmin(
      _circle: BytesLike,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bestVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exitVaultToken(
      _underlying: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasAccess(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    profit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRegistry(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    simpleToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    syncUnderlying(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tap(
      _value: BigNumberish,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalVaultBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlyingValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateAllowance(
      _circle: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _interval: BigNumberish,
      _epochAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
