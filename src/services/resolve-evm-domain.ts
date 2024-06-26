export async function resolveEvmDomain(address: string) {
  const { dataClient } = await import('@rss3/js-sdk');

  const res = await dataClient().profiles(address);
  if (res.data) {
    const handles = res.data.map((item) => item.handle ?? '').filter(Boolean);
    return handles;
  } else {
    return [];
  }
}
