export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(empList) {
      const len = Object.keys(empList).length;
      return len;
    },
  };
}
