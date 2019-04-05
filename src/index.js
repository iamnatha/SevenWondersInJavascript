const {Business} = require('../src/business');
const {Divinity} = require('../src/divinity');
const {Troop} = require('../src/troop');
const {City} = require('../src/city');

const divinity1 = new Divinity('Divinity1');
const divinity2 = new Divinity('Divinity2');

divinity1.init();
divinity1.offeringCorn(10);
divinity1.offeringGold(10);

divinity2.init();
divinity2.offeringCorn(10);
divinity2.offeringGold(10);

const Business1 = new Business();
const Business2 = new Business();

Business1.init(1000, 1000);
Business2.init(1000, 1000);

const troop1 = new Troop();
const troop2 = new Troop();

troop1.init(20, 100, 50);
troop2.init(20, 100, 70);

const city1 = new City();
const city2 = new City();

city1.init(divinity1, Business1, troop1, 'ville 1');
city2.init(divinity2, Business2, troop2, 'ville 2');

const checkCity = () => {
  return (
    Business1.corn > 0 &&
    Business1.gold > 0 &&
    (Business2.corn > 0 && Business2.gold > 0)
  );
};

const randomCity = (villeA, villeB) => {
  if (Math.random() > 0.5) {
    return [villeA, villeB];
  }

  return [villeB, villeA];
};

const gameOver = () => {
  console.log(
    '\n' +
      '┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼\n' +
      '███▀▀▀██┼███▀▀▀███┼███▀█▄█▀███┼██▀▀▀\n' +
      '██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼█┼┼┼██┼██┼┼┼\n' +
      '██┼┼┼▄▄▄┼██▄▄▄▄▄██┼██┼┼┼▀┼┼┼██┼██▀▀▀\n' +
      '██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██┼┼┼\n' +
      '███▄▄▄██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██▄▄▄\n' +
      '┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼\n' +
      '███▀▀▀███┼▀███┼┼██▀┼██▀▀▀┼██▀▀▀▀██▄┼\n' +
      '██┼┼┼┼┼██┼┼┼██┼┼██┼┼██┼┼┼┼██┼┼┼┼┼██┼\n' +
      '██┼┼┼┼┼██┼┼┼██┼┼██┼┼██▀▀▀┼██▄▄▄▄▄▀▀┼\n' +
      '██┼┼┼┼┼██┼┼┼██┼┼█▀┼┼██┼┼┼┼██┼┼┼┼┼██┼\n' +
      '███▄▄▄███┼┼┼─▀█▀┼┼─┼██▄▄▄┼██┼┼┼┼┼██▄\n' +
      '┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼██┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼██┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼████▄┼┼┼▄▄▄▄▄▄▄┼┼┼▄████┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼┼▀▀█▄█████████▄█▀▀┼┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼┼┼┼█████████████┼┼┼┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼┼┼┼██▀▀▀███▀▀▀██┼┼┼┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼┼┼┼██┼┼┼███┼┼┼██┼┼┼┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼┼┼┼█████▀▄▀█████┼┼┼┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼┼┼┼┼███████████┼┼┼┼┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼▄▄▄██┼┼█▀█▀█┼┼██▄▄▄┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼▀▀██┼┼┼┼┼┼┼┼┼┼┼██▀▀┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼┼┼▀▀┼┼┼┼┼┼┼┼┼┼┼▀▀┼┼┼┼┼┼┼┼┼┼┼\n' +
      '┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼\n'
  );
  console.log('Fin de la partie apres ' + chapter + ' chapitres');
  console.log(
    'Ressource de la ville 1: ' +
      city1.cityBuisness.corn +
      ' corns et ' +
      city1.cityBuisness.gold +
      ' golds'
  );
  console.log(
    'Ressource de la ville 2: ' +
      city2.cityBuisness.corn +
      ' corns et ' +
      city2.cityBuisness.gold +
      ' golds'
  );
  city1.divinity.endWorld();
  city2.divinity.endWorld();
};

let chapter = 1;
const main = setInterval(() => {
  console.log('\n********** Chapitre ' + chapter + ' **********');
  let [CityA, CityB] = randomCity(city1, city2);
  console.log(CityA.name + ' attaque ' + CityB.name);
  CityA.cityTroop.cityAttack(CityB);
  if (checkCity()) {
    console.log(
      'Ressource de ' +
        CityB.name +
        ': ' +
        CityB.cityBuisness.corn +
        ' corns et ' +
        CityB.cityBuisness.gold +
        ' golds'
    );
    console.log(
      'Il font la paix et maintenant ville 1 et ville 2, font du commerce ensemble.'
    );
  } else {
    clearInterval(main);
    gameOver();
    return;
  }

  [CityA, CityB] = randomCity(city1, city2);
  console.log(CityA.name + ' vend du corn a ' + CityB.name);
  CityA.cityBuisness.toSell(15, 10, CityB.cityBuisness);
  if (checkCity()) {
    console.log(
      'Ressource de la ville 1: ' +
        city1.cityBuisness.corn +
        ' corns et ' +
        city1.cityBuisness.gold +
        ' golds'
    );
    console.log(
      'Ressource de la ville 2: ' +
        city2.cityBuisness.corn +
        ' corns et ' +
        city2.cityBuisness.gold +
        ' golds'
    );
  } else {
    clearInterval(main);
    gameOver();
    return;
  }

  [CityA, CityB] = randomCity(city1, city2);
  console.log('Vengance de ' + CityA.name + ': ' + CityB.name + ' est pillée');
  CityA.cityTroop.troopAttack(CityB.troop);
  [CityA, CityB] = randomCity(city1, city2);
  console.log(CityA.name + ' recrute des troupes');
  CityA.troop.addSoldier(200, CityB);

  if (!checkCity()) {
    clearInterval(main);
    gameOver();
    return;
  }

  chapter += 1;
}, 100);
