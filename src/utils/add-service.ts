import { ServicesRecord } from 'types';

export function addServices<
  U extends ServicesRecord,
  T extends ServicesRecord = {},
>(newServices: U, initialServices: T = {} as T): T & U {
  return {
    ...initialServices,
    ...newServices,
  };
}
