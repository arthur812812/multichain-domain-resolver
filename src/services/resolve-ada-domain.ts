export async function resolveAdaDomain(address: string) {
  const policyID = 'f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a';

  // Fetch data about an address.
  const data = (await fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}`,
    {
      headers: {
        // Your Blockfrost API key
        project_id: 'YOUR_KEY',
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => res.json())) as any;

  if (data?.error) {
    // Handle error.
  }

  const handles = data.amount
    .filter(({ unit }: any) => unit.includes(policyID))
    .map(({ unit }: any) => {
      const hexName = unit.replace(policyID, '');
      const utf8Name = Buffer.from(hexName, 'hex').toString('utf8');
      return utf8Name;
    });

  return handles;
}
