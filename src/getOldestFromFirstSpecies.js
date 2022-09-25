const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalOlderAge = employees.find((objeto) => (objeto.id === id)).responsibleFor[0];
  const ageOlder = species.find((bichos) => bichos.id === animalOlderAge).residents;
  const reduzir = ageOlder.reduce((obj01, obj02) => ((obj01.age > obj02.age) ? obj01 : obj02));

  return Object.values(reduzir);
}
// ref Gustavo Santos: ajudou interpretação enunciado e escolha das hoh's e sintaxe correta.
module.exports = getOldestFromFirstSpecies;
