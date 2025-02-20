/**
 * This type contains all data and meta-data of the given contact.
 */

import { ContractType, EvaluationManifest } from '../contract/deploy/CreateContract';

export class ContractMetadata {
  dtor: number;
}

export type ContractSource = {
  src: string | null;
  srcBinary: Buffer | null;
  srcWasmLang: string | null;
  contractType: ContractType;
  srcTx: any;
  metadata?: ContractMetadata;
};

export class SrcCache {
  src: string | null;
  srcBinary: Buffer | null;
  srcWasmLang: string | null;

  constructor(value: ContractDefinition<any>) {
    this.src = value.src;
    this.srcBinary = value.srcBinary;
    this.srcWasmLang = value.srcWasmLang;
  }
}

export class ContractCache<State> {
  txId: string;
  srcTxId: string;
  initState: State;
  minFee: string;
  owner: string;
  contractType: ContractType;
  metadata?: ContractMetadata;
  manifest?: EvaluationManifest;
  contractTx: any;
  srcTx: any;
  testnet: string | null;

  constructor(value: ContractDefinition<State>) {
    this.txId = value.txId;
    this.srcTxId = value.srcTxId;
    this.initState = value.initState;
    this.manifest = value.manifest;
    this.minFee = value.minFee;
    this.owner = value.owner;
    this.contractType = value.contractType;
    this.metadata = value.metadata;
    this.contractTx = value.contractTx;
    this.srcTx = value.srcTx;
    this.testnet = value.testnet;
  }
}

export type ContractDefinition<State> = SrcCache & ContractCache<State>;
