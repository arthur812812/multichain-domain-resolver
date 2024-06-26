import { resolveAdaDomain, resolveEvmDomain } from 'services';
import { DefaultServices } from 'types';

export { addServices } from './utils';
export const defaultResolvers: DefaultServices = {
  evm: resolveEvmDomain,
  ada: resolveAdaDomain,
};
