class City {
  constructor(name) {
    this.name_ = name
  }

  init(divinity, business, troop) {
    this.cityDivinity = divinity;
    this.cityBusiness = business;
    this.cityTroop = troop;

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

    this.cityDivinity.worldEvents.on('retribution', gold => {
      this.cityBusiness.gold += gold;
    });
  }

  get name() {
    return this.name_;
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
