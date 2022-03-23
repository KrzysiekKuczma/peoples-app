/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EmptyCollectModule,
  EmptyCollectModuleInterface,
} from "../EmptyCollectModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FollowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "HUB",
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
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializePublicationCollectModule",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "referrerProfileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processCollect",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161061438038061061483398101604081905261002f916100a0565b806001600160a01b038116610057576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250506100d0565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b60805161051d6100f760003960008181604b0152818160fc0152610205015261051d6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a4c52b8614610046578063c233f9511461008a578063e49c3dda146100bc575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100af610098366004610377565b505060408051600081526020810190915292915050565b60405161008191906103ca565b6100cf6100ca366004610437565b6100d1565b005b6100db84866100e3565b505050505050565b604051633648f48360e21b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d923d20c90602401602060405180830381865afa15801561014b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016f91906104aa565b90506001600160a01b038116156101ec57604051635a30b51560e11b8152600481018490526001600160a01b0383811660248301526000604483015282169063b4616a2a9060640160006040518083038186803b1580156101cf57600080fd5b505afa1580156101e3573d6000803e3d6000fd5b50505050505050565b60405163a9ec656360e01b8152600481018490526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ec656390602401602060405180830381865afa158015610254573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027891906104aa565b90506001600160a01b0381166102a157604051636992d36b60e11b815260040160405180910390fd5b6040516370a0823160e01b81526001600160a01b0384811660048301528216906370a0823190602401602060405180830381865afa1580156102e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030b91906104ce565b61032857604051636992d36b60e11b815260040160405180910390fd5b50505050565b60008083601f84011261034057600080fd5b50813567ffffffffffffffff81111561035857600080fd5b60208301915083602082850101111561037057600080fd5b9250929050565b6000806000806060858703121561038d57600080fd5b8435935060208501359250604085013567ffffffffffffffff8111156103b257600080fd5b6103be8782880161032e565b95989497509550505050565b600060208083528351808285015260005b818110156103f7578581018301518582016040015282016103db565b81811115610409576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b038116811461043457600080fd5b50565b60008060008060008060a0878903121561045057600080fd5b8635955060208701356104628161041f565b94506040870135935060608701359250608087013567ffffffffffffffff81111561048c57600080fd5b61049889828a0161032e565b979a9699509497509295939492505050565b6000602082840312156104bc57600080fd5b81516104c78161041f565b9392505050565b6000602082840312156104e057600080fd5b505191905056fea26469706673582212202ee6562ff84183e1f4513ffe6510837c1213b1a15dd7d0acc207a3bf7df182a664736f6c634300080a0033";

type EmptyCollectModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmptyCollectModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmptyCollectModule__factory extends ContractFactory {
  constructor(...args: EmptyCollectModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EmptyCollectModule> {
    return super.deploy(hub, overrides || {}) as Promise<EmptyCollectModule>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): EmptyCollectModule {
    return super.attach(address) as EmptyCollectModule;
  }
  connect(signer: Signer): EmptyCollectModule__factory {
    return super.connect(signer) as EmptyCollectModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmptyCollectModuleInterface {
    return new utils.Interface(_abi) as EmptyCollectModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EmptyCollectModule {
    return new Contract(address, _abi, signerOrProvider) as EmptyCollectModule;
  }
}
