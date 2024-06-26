A TypeScript library for resolving blockchain domain names across EVM and Cardano, with the ability to add or replace default services.

## Usage
```typescript
// ./scripts/dev-run.ts

import { addServices, defaultResolvers } from '../src';

const rss3Handles = await defaultResolvers.evm(
  '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
);
const adaHandles = await defaultResolvers.ada(
  'addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4',
);

console.log(rss3Handles);
// ['vitalik.eth','0xd8da6bf26964af9d7eed9e03e53415d37aa96045.csb','vitalik.eth', 'vitalik.lens']
console.log(adaHandles);
// All ADA handles for SNEK burn address
// [
//   'bikerox75',
//   'bobonereza',
//   'burnawoo',
//   'burnsnek',
// ... many more here
// ];

const newServices = {
  new: (address: string) => Promise.resolve([]),
  ton: (address: string) => Promise.resolve(['ton_domain_1']),
};

const extendedResolvers = addServices(newServices, defaultResolvers);

// Autocomplete works for 'ada', 'evm', 'ton', 'new' in extendedResolvers object
const mockedTonResolver = await extendedResolvers.ton('ton_address');
console.log('mockedTonResolver', mockedTonResolver);

```

### TODO
- [ ] Add an initializer for default resolvers (to add a BlockFrost key to the ADA resolver).
- [ ] Improve TS type checking.
