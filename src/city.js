class City {
  init(divinity, business, troop, name) {
    this.CityDivinity = divinity;
    this.CityBuisness = business;
    this.CityTroop = troop;
    this.name = name;

    this.CityDivinity.worldEvents.on('favor', g => {
      this.CityBuisness.gold += g.gold;
      this.CityBuisness.corn += g.corn;
    });

    this.CityDivinity.worldEvents.on('blessing', g => {
      this.CityBuisness.gold += g.gold;
      this.CityBuisness.corn += g.corn;
    });
  }



  get divinity() {
    return this.CityDivinity;
  }

  get business() {
    return this.CityBuisness;
  }

  get troop() {
    return this.CityTroop;
  }
}

module.exports = {City};
