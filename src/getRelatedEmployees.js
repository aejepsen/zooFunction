const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const nameFuncs = employees.filter((employee) => employee.managers.includes(managerId));
    return nameFuncs.map((nameFunc) => `${nameFunc.firstName} ${nameFunc.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
