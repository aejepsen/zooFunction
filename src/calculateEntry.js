const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter((patual) => patual.age < 18).length;
  const adults = entrants.filter((patual) => patual.age >= 18 && patual.age < 50).length;
  const seniors = entrants.filter((patual) => patual.age >= 50).length;
  const objeto = {
    child: childs,
    adult: adults,
    senior: seniors,
  };
  return objeto;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const visit = countEntrants(entrants);
  return (visit.adult * prices.adult + visit.child * prices.child + visit.senior * prices.senior);
}
// ref José Carlos - Trybe - Turma 19 - Tribo B auxiliou no refatoramento da função pricipal para atender o lint
module.exports = { calculateEntry, countEntrants };
