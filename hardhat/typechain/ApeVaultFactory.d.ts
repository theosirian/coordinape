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

interface ApeVaultFactoryInterface extends ethers.utils.Interface {
  functions: {
    "apeRegistry()": FunctionFragment;
    "createApeVault(address,address)": FunctionFragment;
    "vaultRegistry(address)": FunctionFragment;
    "yearnRegistry()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "apeRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createApeVault",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "yearnRegistry",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "apeRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createApeVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "yearnRegistry",
    data: BytesLike
  ): Result;

  events: {
    "VaultCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "VaultCreated"): EventFragment;
}

export type VaultCreatedEvent = TypedEvent<[string] & { vault: string }>;

export class ApeVaultFactory extends BaseContract {
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

  interface: ApeVaultFactoryInterface;

  functions: {
    apeRegistry(overrides?: CallOverrides): Promise<[string]>;

    createApeVault(
      _token: string,
      _simpleToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vaultRegistry(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    yearnRegistry(overrides?: CallOverrides): Promise<[string]>;
  };

  apeRegistry(overrides?: CallOverrides): Promise<string>;

  createApeVault(
    _token: string,
    _simpleToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vaultRegistry(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  yearnRegistry(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    apeRegistry(overrides?: CallOverrides): Promise<string>;

    createApeVault(
      _token: string,
      _simpleToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vaultRegistry(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    yearnRegistry(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "VaultCreated(address)"(
      vault?: null
    ): TypedEventFilter<[string], { vault: string }>;

    VaultCreated(vault?: null): TypedEventFilter<[string], { vault: string }>;
  };

  estimateGas: {
    apeRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    createApeVault(
      _token: string,
      _simpleToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vaultRegistry(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    yearnRegistry(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    apeRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createApeVault(
      _token: string,
      _simpleToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vaultRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    yearnRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
