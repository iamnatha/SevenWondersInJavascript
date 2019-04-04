const {Business} = require('../src/business');
const {Divinity} = require('../src/divinity');
const {Troop} = require('../src/troop');
const {City} = require('../src/city');

const divinity1 = new Divinity('Divinity1');
const divinity2 = new Divinity('Divinity2');

divinity1.init();
divinity2.init();
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

ville1.init(divinity1, commerce1, troup1);
ville2.init(divinity2, commerce2, troup2);

// While((commerce1.corn > 0 && commerce1.gold)|| (commerce2.corn > 0 && commerce1.gold)){

ville1.troopVille.attaquerVille(ville2);
console.log(
    'Ressource de la ville 2: ' +
    ville2.commerceVille.corn +
    ' corns et ' +
    ville2.commerceVille.gold +
    ' golds'
);
console.log(
    'Il font la paix et maintenant ville 1 et ville 2, font du commerce ensemble.'
);

ville2.commerceVille.vendre(15, 10, ville1.commerceVille);
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

console.log('Vengance de la ville 2: Ville 2 pille la ville 1');
ville2.troopVille.attaquerTroup(ville1.troopVille);

ville1.troopVille.AjouterSoldat(80);
console.log(
    'Ressource de la ville 1: ' +
    ville1.commerceVille.corn +
    ' corns et ' +
    ville1.commerceVille.gold +
    ' golds'
);

// racheter troupes

//

// }
