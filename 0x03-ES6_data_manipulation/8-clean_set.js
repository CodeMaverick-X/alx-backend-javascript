export default function cleanSet(set, startString) {
  const newClean = [];

  for (const val of set) {
    if (val) {
      const str = val.substring(0, startString.length);
      if (startString && str === startString) {
        const sub = val.substring(startString.length);
        newClean.push(sub);
      }
    }
  }
  return newClean.join('-');
}
