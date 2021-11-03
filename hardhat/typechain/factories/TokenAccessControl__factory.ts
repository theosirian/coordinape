/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenAccessControl,
  TokenAccessControlInterface,
} from "../TokenAccessControl";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "minters",
        type: "address[]",
      },
    ],
    name: "MintersAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "minters",
        type: "address[]",
      },
    ],
    name: "MintersRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_minters",
        type: "address[]",
      },
    ],
    name: "addMinters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "changePauseStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disableMintingForever",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disablePausingForever",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "foreverUnpaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "minters",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintingDisabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_minters",
        type: "address[]",
      },
    ],
    name: "removeMinters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6111588061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806371e2a6571161007157806371e2a6571461014157806372be7ec31461015d5780637a131ebe146101675780638da5cb5b14610185578063f2fde38b146101a3578063f46eccc4146101bf576100b4565b806306ca0bad146100b957806321afb5ee146100c35780633424b8ce146100e15780635c975abb146100fd5780635fc1964f1461011b578063715018a614610137575b600080fd5b6100c16101ef565b005b6100cb6102d5565b6040516100d89190610dc4565b60405180910390f35b6100fb60048036038101906100f69190610c0b565b6102e6565b005b6101056103cf565b6040516101129190610dc4565b60405180910390f35b61013560048036038101906101309190610bc6565b6103e2565b005b61013f6105b0565b005b61015b60048036038101906101569190610bc6565b610638565b005b610165610805565b005b61016f610909565b60405161017c9190610dc4565b60405180910390f35b61018d61091c565b60405161019a9190610d85565b60405180910390f35b6101bd60048036038101906101b89190610b9d565b610945565b005b6101d960048036038101906101d49190610b9d565b610a3d565b6040516101e69190610dc4565b60405180910390f35b6101f7610a5d565b73ffffffffffffffffffffffffffffffffffffffff1661021561091c565b73ffffffffffffffffffffffffffffffffffffffff161461026b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026290610dff565b60405180910390fd5b60028054906101000a900460ff16156102b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b090610e1f565b60405180910390fd5b60016002806101000a81548160ff021916908315150217905550565b60028054906101000a900460ff1681565b6102ee610a5d565b73ffffffffffffffffffffffffffffffffffffffff1661030c61091c565b73ffffffffffffffffffffffffffffffffffffffff1614610362576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035990610dff565b60405180910390fd5b600260019054906101000a900460ff16156103b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a990610e3f565b60405180910390fd5b80600260006101000a81548160ff02191690831515021790555050565b600260009054906101000a900460ff1681565b6103ea610a5d565b73ffffffffffffffffffffffffffffffffffffffff1661040861091c565b73ffffffffffffffffffffffffffffffffffffffff161461045e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045590610dff565b60405180910390fd5b60028054906101000a900460ff16156104ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a390610e5f565b60405180910390fd5b60005b82829050811015610572576000600160008585858181106104f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201602081019061050e9190610b9d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550808061056a90610f17565b9150506104af565b507fa4bd966469c62332cc5041d465060dbc3e847c7b125422e59ddb3e61a2005ae782826040516105a4929190610da0565b60405180910390a15050565b6105b8610a5d565b73ffffffffffffffffffffffffffffffffffffffff166105d661091c565b73ffffffffffffffffffffffffffffffffffffffff161461062c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062390610dff565b60405180910390fd5b6106366000610a65565b565b610640610a5d565b73ffffffffffffffffffffffffffffffffffffffff1661065e61091c565b73ffffffffffffffffffffffffffffffffffffffff16146106b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ab90610dff565b60405180910390fd5b60028054906101000a900460ff1615610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f990610e5f565b60405180910390fd5b60005b828290508110156107c757600180600085858581811061074e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906107639190610b9d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806107bf90610f17565b915050610705565b507f6050e1d24499bf62f6297dc608356dc088c4e4b4fd753a8606207fdf078578e382826040516107f9929190610da0565b60405180910390a15050565b61080d610a5d565b73ffffffffffffffffffffffffffffffffffffffff1661082b61091c565b73ffffffffffffffffffffffffffffffffffffffff1614610881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087890610dff565b60405180910390fd5b600260019054906101000a900460ff16156108d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c890610e3f565b60405180910390fd5b6001600260016101000a81548160ff0219169083151502179055506000600260006101000a81548160ff021916908315150217905550565b600260019054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61094d610a5d565b73ffffffffffffffffffffffffffffffffffffffff1661096b61091c565b73ffffffffffffffffffffffffffffffffffffffff16146109c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b890610dff565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2890610ddf565b60405180910390fd5b610a3a81610a65565b50565b60016020528060005260406000206000915054906101000a900460ff1681565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081359050610b38816110f4565b92915050565b60008083601f840112610b5057600080fd5b8235905067ffffffffffffffff811115610b6957600080fd5b602083019150836020820283011115610b8157600080fd5b9250929050565b600081359050610b978161110b565b92915050565b600060208284031215610baf57600080fd5b6000610bbd84828501610b29565b91505092915050565b60008060208385031215610bd957600080fd5b600083013567ffffffffffffffff811115610bf357600080fd5b610bff85828601610b3e565b92509250509250929050565b600060208284031215610c1d57600080fd5b6000610c2b84828501610b88565b91505092915050565b6000610c408383610c4c565b60208301905092915050565b610c5581610ecf565b82525050565b610c6481610ecf565b82525050565b6000610c768385610e96565b9350610c8182610e7f565b8060005b85811015610cba57610c978284610eb8565b610ca18882610c34565b9750610cac83610e89565b925050600181019050610c85565b5085925050509392505050565b610cd081610ee1565b82525050565b6000610ce3602683610ea7565b9150610cee82610f8f565b604082019050919050565b6000610d06602083610ea7565b9150610d1182610fde565b602082019050919050565b6000610d29602b83610ea7565b9150610d3482611007565b604082019050919050565b6000610d4c602b83610ea7565b9150610d5782611056565b604082019050919050565b6000610d6f603283610ea7565b9150610d7a826110a5565b604082019050919050565b6000602082019050610d9a6000830184610c5b565b92915050565b60006020820190508181036000830152610dbb818486610c6a565b90509392505050565b6000602082019050610dd96000830184610cc7565b92915050565b60006020820190508181036000830152610df881610cd6565b9050919050565b60006020820190508181036000830152610e1881610cf9565b9050919050565b60006020820190508181036000830152610e3881610d1c565b9050919050565b60006020820190508181036000830152610e5881610d3f565b9050919050565b60006020820190508181036000830152610e7881610d62565b9050919050565b6000819050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610ec76020840184610b29565b905092915050565b6000610eda82610eed565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610f2282610f0d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610f5557610f54610f60565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416363657373436f6e74726f6c3a20436f6e74726163742063616e6e6f74206d60008201527f696e7420616e796d6f7265000000000000000000000000000000000000000000602082015250565b7f416363657373436f6e74726f6c3a20436f6e747261637420697320756e70617560008201527f73656420666f7265766572000000000000000000000000000000000000000000602082015250565b7f416363657373436f6e74726f6c3a20436f6e74726163742063616e6e6f74206d60008201527f696e7420746f6b656e7320616e796d6f72650000000000000000000000000000602082015250565b6110fd81610ecf565b811461110857600080fd5b50565b61111481610ee1565b811461111f57600080fd5b5056fea26469706673582212203530351b8746c99dfb379d46a21393e143e2bb694b83d75f731aacf4546b4b2964736f6c63430008020033";

export class TokenAccessControl__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenAccessControl> {
    return super.deploy(overrides || {}) as Promise<TokenAccessControl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenAccessControl {
    return super.attach(address) as TokenAccessControl;
  }
  connect(signer: Signer): TokenAccessControl__factory {
    return super.connect(signer) as TokenAccessControl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenAccessControlInterface {
    return new utils.Interface(_abi) as TokenAccessControlInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenAccessControl {
    return new Contract(address, _abi, signerOrProvider) as TokenAccessControl;
  }
}
