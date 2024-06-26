export type ServiceResolver = (address: string) => Promise<string[]>;
export type ServicesRecord = Record<string, ServiceResolver>;
export type TInitialServices = 'ada' | 'evm';

export type DefaultServices = {
  [key in TInitialServices]: ServiceResolver;
};
