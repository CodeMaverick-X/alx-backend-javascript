export default function getStudentIdsSum(arrstudents) {
  const sumid = arrstudents.reduce((acc, curr) => acc + curr.id, 0);

  return sumid;
}
