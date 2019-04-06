class City {
  init(divinity, business, troop, name) {
    this.cityDivinity = divinity;
    this.cityBuisness = business;
    this.cityTroop = troop;
    this.name = name;

    divinity.init();
    // initial offer for city creation
    divinity.offeringCorn(10);
    divinity.offeringGold(10);

    this.cityDivinity.worldEvents.on('favor', g => {
      this.cityBuisness.gold += g.gold;
      this.cityBuisness.corn += g.corn;
    });

    this.cityDivinity.worldEvents.on('blessing', g => {
      this.cityBuisness.gold += g.gold;
      this.cityBuisness.corn += g.corn;
    });
  }

  get divinity() {
    return this.cityDivinity;
  }

  get business() {
    return this.cityBuisness;
  }

  get troop() {
    return this.cityTroop;
  }
}

module.exports = {City};
