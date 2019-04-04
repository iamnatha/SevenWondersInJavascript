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

const commerce1 = new Business();
const commerce2 = new Business();

commerce1.init(1000, 1000);
commerce2.init(1000, 1000);

const troup1 = new Troop();
const troup2 = new Troop();

troup1.init(20, 100, 50);
troup2.init(20, 100, 70);

const ville1 = new City();
const ville2 = new City();

ville1.init(divinity1, commerce1, troup1, 'ville 1');
ville2.init(divinity2, commerce2, troup2, 'ville 2');

const checkVilles = () => {
  return (
    commerce1.corn > 0 &&
    commerce1.gold > 0 &&
    (commerce2.corn > 0 && commerce2.gold > 0)
  );
};

const villeRandom = (villeA, villeB) => {
  if (Math.random() > 0.5) {
    return [villeA, villeB];
  }

  return [villeB, villeA];
};

const finPartie = () => {
  console.log("" +
      "┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼\n" +
      "███▀▀▀██┼███▀▀▀███┼███▀█▄█▀███┼██▀▀▀\n" +
      "██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼█┼┼┼██┼██┼┼┼\n" +
      "██┼┼┼▄▄▄┼██▄▄▄▄▄██┼██┼┼┼▀┼┼┼██┼██▀▀▀\n" +
      "██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██┼┼┼\n" +
      "███▄▄▄██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██▄▄▄\n" +
      "┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼\n" +
      "███▀▀▀███┼▀███┼┼██▀┼██▀▀▀┼██▀▀▀▀██▄┼\n" +
      "██┼┼┼┼┼██┼┼┼██┼┼██┼┼██┼┼┼┼██┼┼┼┼┼██┼\n" +
      "██┼┼┼┼┼██┼┼┼██┼┼██┼┼██▀▀▀┼██▄▄▄▄▄▀▀┼\n" +
      "██┼┼┼┼┼██┼┼┼██┼┼█▀┼┼██┼┼┼┼██┼┼┼┼┼██┼\n" +
      "███▄▄▄███┼┼┼─▀█▀┼┼─┼██▄▄▄┼██┼┼┼┼┼██▄\n" +
      "┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼██┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼██┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼████▄┼┼┼▄▄▄▄▄▄▄┼┼┼▄████┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼┼▀▀█▄█████████▄█▀▀┼┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼┼┼┼█████████████┼┼┼┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼┼┼┼██▀▀▀███▀▀▀██┼┼┼┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼┼┼┼██┼┼┼███┼┼┼██┼┼┼┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼┼┼┼█████▀▄▀█████┼┼┼┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼┼┼┼┼███████████┼┼┼┼┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼▄▄▄██┼┼█▀█▀█┼┼██▄▄▄┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼▀▀██┼┼┼┼┼┼┼┼┼┼┼██▀▀┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼┼┼▀▀┼┼┼┼┼┼┼┼┼┼┼▀▀┼┼┼┼┼┼┼┼┼┼┼\n" +
      "┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼")
  console.log('Fin de la partie apres ' + chapitre + ' chapitres');
  console.log(
    'Ressource de la ville 1: ' +
      ville1.commerceVille.corn +
      ' corns et ' +
      ville1.commerceVille.gold +
      ' golds'
  );
  console.log(
    'Ressource de la ville 2: ' +
      ville2.commerceVille.corn +
      ' corns et ' +
      ville2.commerceVille.gold +
      ' golds'
  );
  ville1.divinity.endWorld();
  ville2.divinity.endWorld();
};

let chapitre = 1;
const main = setInterval(() => {
  console.log('\n********** Chapitre ' + chapitre + ' **********');
  let [villeA, villeB] = villeRandom(ville1, ville2);
  console.log(villeA.name + ' attaque ' + villeB.name);
  villeA.troopVille.attaquerVille(villeB);
  if (checkVilles()) {
    console.log(
      'Ressource de ' +
        villeB.name +
        ': ' +
        villeB.commerceVille.corn +
        ' corns et ' +
        villeB.commerceVille.gold +
        ' golds'
    );
    console.log(
      'Il font la paix et maintenant ville 1 et ville 2, font du commerce ensemble.'
    );
  } else {
    clearInterval(main);
    finPartie();
    return;
  }

  [villeA, villeB] = villeRandom(ville1, ville2);
  console.log(villeA.name + ' vend du corn a ' + villeB.name);
  villeA.commerceVille.vendre(15, 10, villeB.commerceVille);
  if (checkVilles()) {
    console.log(
      'Ressource de la ville 1: ' +
        ville1.commerceVille.corn +
        ' corns et ' +
        ville1.commerceVille.gold +
        ' golds'
    );
    console.log(
      'Ressource de la ville 2: ' +
        ville2.commerceVille.corn +
        ' corns et ' +
        ville2.commerceVille.gold +
        ' golds'
    );
  } else {
    clearInterval(main);
    finPartie();
    return;
  }

  [villeA, villeB] = villeRandom(ville1, ville2);
  console.log(
    'Vengance de ' + villeA.name + ': ' + villeB.name + ' est pillée'
  );
  villeA.troopVille.attaquerVille(villeB);
  [villeA, villeB] = villeRandom(ville1, ville2);
  console.log(villeA.name + ' recrute des troupes');
  villeA.troop.ajouterSoldat(200, villeB);

  if (!checkVilles()) {
    clearInterval(main);
    finPartie();
    return;
  }

  chapitre += 1;
}, 100);
