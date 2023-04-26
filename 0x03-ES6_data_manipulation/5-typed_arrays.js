export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const view = new Int8Array(buffer, 0, length);

  if (position >= 0 && position < length) {
    view[position] = value;
  } else {
    throw Error('Position outside range');
  }

  return new DataView(buffer, 0, length);
}
