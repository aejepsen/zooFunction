const data = require('../data/zoo_data');

const { hours, species } = data;

function availableAnimals(obj) {
  const zooObject = obj;
  const keys = Object.keys(zooObject);
  species.forEach((specie) => {
    keys.forEach((key) => {
      if (specie.availability.find((item) => item === key)) {
        zooObject[key].exhibition.push(specie.name);
      }
    });
  });
  zooObject.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return zooObject;
}

function createSchedule() {
  const newZooObject = {};
  const keys = Object.keys(hours);
  const values = Object.values(hours);
  keys.forEach((key, index) => {
    newZooObject[key] = {
      officeHour: `Open from ${values[index].open}am until ${values[index].close}pm`,
      exhibition: [],
    };
  });
  return availableAnimals(newZooObject);
}

const days = Object.keys(hours);
const animals = species.map((specie) => specie.name);

function getSchedule(scheduleTarget) {
  const Schedule = createSchedule();
  if (!scheduleTarget) return Schedule;
  if (days.some((day) => scheduleTarget === day)) {
    return { [scheduleTarget]: Schedule[scheduleTarget] };
  }
  if (animals.some((animal) => scheduleTarget === animal)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return Schedule;
}
// ref git@github.com:DeboraSerra/DeboraSerra.github.io.git, Contribui para entender o enunciado, lógica, utilização de HOF's, callback de maneira correta
module.exports = getSchedule;
