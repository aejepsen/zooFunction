const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, idade) {
  return data.species
    .find((specie) => (specie.name === animal))
    .residents.every((animalName) => animalName.age >= idade);
}
module.exports = getAnimalsOlderThan;
