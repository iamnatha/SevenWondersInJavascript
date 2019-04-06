class City {
  init(divinity, business, troop, name) {
    this.cityDivinity = divinity;
    this.cityBusiness = business;
    this.cityTroop = troop;
    this.name = name;

    divinity.init();
    // Initial offer for city creation
    divinity.offeringCorn(10);
    divinity.offeringGold(10);

    this.cityDivinity.worldEvents.on('favor', g => {
      this.cityBusiness.gold += g.gold;
      this.cityBusiness.corn += g.corn;
    });

    this.cityDivinity.worldEvents.on('blessing', g => {
      this.cityBusiness.gold += g.gold;
      this.cityBusiness.corn += g.corn;
    });
  }

  get divinity() {
    return this.cityDivinity;
  }

  get business() {
    return this.cityBusiness;
  }

  get troop() {
    return this.cityTroop;
  }

  collapse() {
    this.troop.killTroop();
    this.divinity.endWorld();
  }
}

module.exports = {City};
