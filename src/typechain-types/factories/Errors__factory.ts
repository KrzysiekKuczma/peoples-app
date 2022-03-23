/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Errors, ErrorsInterface } from "../Errors";

const _abi = [
  {
    inputs: [],
    name: "ArrayMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "BlockNumberInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotCollectNFT",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotFollowNFT",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotWhitelistedModule",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotInitImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectModuleNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "FollowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "FollowModuleNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "FollowNotApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "HandleContainsInvalidCharacters",
    type: "error",
  },
  {
    inputs: [],
    name: "HandleLengthInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "HandleTaken",
    type: "error",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error",
  },
  {
    inputs: [],
    name: "MintLimitExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleDataMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "NotGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotGovernanceOrEmergencyAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHub",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerOrApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "NotProfileOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NotProfileOwnerOrDispatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "Paused",
    type: "error",
  },
  {
    inputs: [],
    name: "ProfileCreatorNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicationDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "PublishingPaused",
    type: "error",
  },
  {
    inputs: [],
    name: "ReferenceModuleNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroCurrency",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroSpender",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f5df3c1110e7fae5a80402cc548db96c476108144aaf13b539f1fb8df47d238564736f6c634300080a0033";

type ErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Errors__factory extends ContractFactory {
  constructor(...args: ErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Errors> {
    return super.deploy(overrides || {}) as Promise<Errors>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Errors {
    return super.attach(address) as Errors;
  }
  connect(signer: Signer): Errors__factory {
    return super.connect(signer) as Errors__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErrorsInterface {
    return new utils.Interface(_abi) as ErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Errors {
    return new Contract(address, _abi, signerOrProvider) as Errors;
  }
}
