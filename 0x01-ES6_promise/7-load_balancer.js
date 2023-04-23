export default async function loadBalancer(chinaDownload, USDownload) {
  const promise1 = Promise.any([chinaDownload, USDownload]);

  const value = await promise1.then((result) => result);
  return value;
}
