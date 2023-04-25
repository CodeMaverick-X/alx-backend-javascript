export default function getStudentsByLocation(arrStudents, city) {
  const arrFilter = arrStudents.filter((obj) => obj.location === city);

  return arrFilter;
}
