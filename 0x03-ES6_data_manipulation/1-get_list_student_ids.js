export default function getListStudentIds(arrObj) {
  let arrIds;

  if (arrObj instanceof Array) {
    arrIds = arrObj.map((obj) => obj.id);
  } else {
    arrIds = [];
  }
  return arrIds;
}
