export default function updateStudentGradeByCity(arrStudents, city, arrGrades) {
  let arr = arrStudents.filter((obj) => obj.location === city);

  arr = arr.map((obj) => {
    for (const grade of arrGrades) {
      if (obj.id === grade.studentId) {
        obj.grade = grade.grade; // eslint-disable-line no-param-reassign
        break;
      } else {
        obj.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
    }
    return obj;
  });

  return arr;
}
