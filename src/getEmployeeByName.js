const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  const sourceEmployee = employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
  if (!employeeName) { return {}; }
  return sourceEmployee;
}

module.exports = getEmployeeByName;
