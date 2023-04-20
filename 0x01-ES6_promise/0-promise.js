export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    const b = 12;
    if (b === 12) {
      resolve('correct');
    }
  });
}
