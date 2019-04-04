const {Business} = require('../src/business');
const {Divinity} = require('../src/divinity');
const {Troop} = require('../src/troop');
const {City} = require('../src/city');


var divinity1 = new Divinity("Divinity1");
var divinity2 = new Divinity("Divinity2");

divinity1.init();
divinity2.init();
var commerce1 = new Business();
var commerce2 = new Business();

commerce1.init(1000, 1000);
commerce2.init(1000, 1000);

var troup1 = new Troop();
var troup2 = new Troop();

troup1.init(20, 100, 50);
troup2.init(20, 100, 70);

var ville1 = new City();
var ville2 = new City();

ville1.init(divinity1, commerce1, troup1);
ville2.init(divinity2, commerce2, troup2);



//while((commerce1.corn > 0 && commerce1.gold)|| (commerce2.corn > 0 && commerce1.gold)){

    ville1.troopVille.attaquerVille(ville2);
    console.log("Ressource de la ville 2: " + ville2.commerceVille.corn + " corns et " + ville2.commerceVille.gold + " golds");
    console.log("Il font la paix et maintenant ville 1 et ville 2, font du commerce ensemble.");

    ville2.commerceVille.vendre(15, 10, ville1.commerceVille);
    console.log("Ressource de la ville 1: " + ville1.commerceVille.corn + " corns et " + ville1.commerceVille.gold + " golds");
    console.log("Ressource de la ville 2: " + ville2.commerceVille.corn + " corns et " + ville2.commerceVille.gold + " golds");

    console.log("Vengance de la ville 2: Ville 2 pille la ville 1");
    ville1.troopVille.attaquerTroup(ville1.troopVille);
    ville2.troopVille.attaquerVille(ville1);
    ville2.troop.AjouterSoldat(200);

setTimeout(() => {
    console.log("Ressource de la ville 1: " + ville1.commerceVille.corn + " corns et " + ville1.commerceVille.gold + " golds");
    console.log("Ressource de la ville 2: " + ville2.commerceVille.corn + " corns et " + ville2.commerceVille.gold + " golds");

    ville1.divinity.endWorld();
    ville2.divinity.endWorld();
}, 2000)
// }
