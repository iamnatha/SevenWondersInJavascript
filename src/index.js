const {Divinity} = require('../src/divinity');
const {City} = require('../src/city');

const city = new City('City');
const divinity = new Divinity('God');
city.setDivinity(divinity);

// Init gift to test, maybe give initial gold and corn to city instead
city.divinity.offeringGold(10);
city.divinity.offeringCorn(10);

setInterval(() => {
  console.log(`${city.name} has ${city.gold} gold and ${city.corn} corn`);
  console.log(
    `Since its creation ${city.name} has offered ${city.divinity.name} ${
      city.divinity.gold
    } gold and ${city.divinity.corn} corn`
  );
}, 2000);
