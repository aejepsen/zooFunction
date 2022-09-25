const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objeto = {};
    species.forEach((specie) => {
      objeto[specie.name] = specie.residents.length;
    });
    return objeto;
  }
  const bichos = species.find((bicho) => bicho.name === animal.specie);
  if (!animal.sex) {
    return bichos.residents.length;
  }
  return bichos.residents.filter((bicho) => bicho.sex === animal.sex).length;
}

module.exports = countAnimals;
