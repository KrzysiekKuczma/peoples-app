/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockReferenceModule,
  MockReferenceModuleInterface,
} from "../MockReferenceModule";

const _abi = [
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
    name: "initializeReferenceModule",
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
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profileIdPointed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubIdPointed",
        type: "uint256",
      },
    ],
    name: "processComment",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "profileIdPointed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubIdPointed",
        type: "uint256",
      },
    ],
    name: "processMirror",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610253806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806356014afa1461004657806372f247091461006f578063ce3f8dc61461006f575b600080fd5b610059610054366004610103565b610084565b6040516100669190610183565b60405180910390f35b61008261007d3660046101d8565b505050565b005b6060600061009483850185610204565b9050806001146100ea5760405162461bcd60e51b815260206004820152601c60248201527f4d6f636b5265666572656e63654d6f64756c653a20696e76616c696400000000604482015260640160405180910390fd5b5050604080516000815260208101909152949350505050565b6000806000806060858703121561011957600080fd5b8435935060208501359250604085013567ffffffffffffffff8082111561013f57600080fd5b818701915087601f83011261015357600080fd5b81358181111561016257600080fd5b88602082850101111561017457600080fd5b95989497505060200194505050565b600060208083528351808285015260005b818110156101b057858101830151858201604001528201610194565b818111156101c2576000604083870101525b50601f01601f1916929092016040019392505050565b6000806000606084860312156101ed57600080fd5b505081359360208301359350604090920135919050565b60006020828403121561021657600080fd5b503591905056fea26469706673582212202462f3b6ef5dc75a308ffc066a4c25e931cfaab3695e18a407eac6f43f4b978464736f6c634300080a0033";

type MockReferenceModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockReferenceModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockReferenceModule__factory extends ContractFactory {
  constructor(...args: MockReferenceModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockReferenceModule> {
    return super.deploy(overrides || {}) as Promise<MockReferenceModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockReferenceModule {
    return super.attach(address) as MockReferenceModule;
  }
  connect(signer: Signer): MockReferenceModule__factory {
    return super.connect(signer) as MockReferenceModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockReferenceModuleInterface {
    return new utils.Interface(_abi) as MockReferenceModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockReferenceModule {
    return new Contract(address, _abi, signerOrProvider) as MockReferenceModule;
  }
}
