const {Business} = require('../src/business');
const {Divinity} = require('../src/divinity');
const {Troop} = require('../src/troop');
const {City} = require('../src/city');

const divinity1 = new Divinity('Divinity1');
const divinity2 = new Divinity('Divinity2');

const Business1 = new Business(1000, 1000);
const Business2 = new Business(1000, 1000);

const troop1 = new Troop(20, 100, 50);
const troop2 = new Troop(20, 100, 70);

const city1 = new City();
const city2 = new City();

city1.init(divinity1, Business1, troop1, 'ville 1');
city2.init(divinity2, Business2, troop2, 'ville 2');

const checkCity = city => {
  return city.business.gold >= 0 && city.business.corn >= 0;
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
      city1.cityBusiness.corn +
      ' corns et ' +
      city1.cityBusiness.gold +
      ' golds'
  );
  console.log(
    'Ressource de la ville 2: ' +
      city2.cityBusiness.corn +
      ' corns et ' +
      city2.cityBusiness.gold +
      ' golds'
  );
  city1.collapse();
  city2.collapse();
};

let chapter = 1;
const main = setInterval(() => {
  console.log(
    '\n****************************** Chapitre ' +
      chapter +
      ' ******************************\n'
  );
  let [CityA, CityB] = randomCity(city1, city2);
  console.log(CityA.name + ' attaque ' + CityB.name);
  CityA.cityTroop.cityAttack(CityB);
  if (checkCity(city1) && checkCity(city2)) {
    console.log(
      'Ressource de ' +
        CityB.name +
        ': ' +
        CityB.cityBusiness.corn +
        ' corns et ' +
        CityB.cityBusiness.gold +
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
  CityA.cityBusiness.toSell(15, 10, CityB.cityBusiness);
  if (checkCity(city1) && checkCity(city2)) {
    console.log(
      'Ressource de la ville 1: ' +
        city1.cityBusiness.corn +
        ' corns et ' +
        city1.cityBusiness.gold +
        ' golds'
    );
    console.log(
      'Ressource de la ville 2: ' +
        city2.cityBusiness.corn +
        ' corns et ' +
        city2.cityBusiness.gold +
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

  if (!(checkCity(city1) && checkCity(city2))) {
    clearInterval(main);
    gameOver();
    return;
  }

  console.log(
    '-----------------------------------------------------------------------------------------------------------------------------------------------'
  );
  chapter += 1;
}, 450);
