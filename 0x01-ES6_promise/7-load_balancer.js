export default async function loadBalancer(chinaDownload, USDownload) {
  const promise1 = Promise.race([chinaDownload, USDownload]);

  return promise1;
}
