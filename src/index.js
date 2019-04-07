const {Business, Bankruptcy} = require('../src/business');
const {Divinity} = require('../src/divinity');
const {Troop} = require('../src/troop');
const {City} = require('../src/city');

const divinity1 = new Divinity('Divinity1');
const divinity2 = new Divinity('Divinity2');

const business1 = new Business(1000, 1000);
const business2 = new Business(1000, 1000);

const troop1 = new Troop(20, 100, 50);
const troop2 = new Troop(20, 100, 70);

const city1 = new City('ville 1');
const city2 = new City('ville 2');

city1.init(divinity1, business1, troop1);
city2.init(divinity2, business2, troop2);

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
  try {
    console.log(
        '\n****************************** Chapitre ' +
        chapter +
        ' ******************************\n'
    );
    let [cityA, cityB] = randomCity(city1, city2);
    console.log(cityA.name + ' attaque ' + cityB.name);
    cityA.cityTroop.cityAttack(cityB);
    console.log(
        'Ressource de ' +
        cityB.name +
        ': ' +
        cityB.cityBusiness.corn +
        ' corns et ' +
        cityB.cityBusiness.gold +
        ' golds'
    );
    console.log(
        'Il font la paix et maintenant ville 1 et ville 2, font du commerce ensemble.'
    );

    [cityA, cityB] = randomCity(city1, city2);
    console.log(cityA.name + ' vend du corn a ' + cityB.name);
    cityA.cityBusiness.toSell(15, 10, cityB.cityBusiness);
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

    [cityA, cityB] = randomCity(city1, city2);
    console.log('Vengance de ' + cityA.name + ': ' + cityB.name + ' est pillée');
    cityA.cityTroop.troopAttack(cityB.troop);
    [cityA, cityB] = randomCity(city1, city2);
    console.log(cityA.name + ' recrute des troupes');
    cityA.troop.addSoldier(200, cityB);

    console.log(
        '-----------------------------------------------------------------------------------------------------------------------------------------------'
    );
    chapter += 1;
  } catch (e) {
    if (e instanceof Bankruptcy) {
      clearInterval(main);
      gameOver();
    } else {
      throw e;
    }
  }
}, 450);
