class Business {
  constructor(corn, gold) {
    this.corn_ = corn;
    this.gold_ = gold;
  }

  get corn() {
    return this.corn_;
  }

  set corn(corn) {
    this.corn_ = corn;
    if (corn < 0)
      throw new Bankruptcy(this, 'Lack of corn caused bankruptcy of business');
  }

  get gold() {
    return this.gold_;
  }

  set gold(gold) {
    this.gold_ = gold;
    if (gold < 0)
      throw new Bankruptcy(this, 'Lack of gold caused bankruptcy of business');
  }

  beLooted(lootedResource) {
    this.corn = this.corn - lootedResource;
    this.gold = this.gold - lootedResource;
  }

  toSell(corn, resourcesPrice, buyer) {
    if (Math.random() > 0.5) {
      // Si les commercant se font attaquer
      this.beAttacked(corn);
    } else if (Math.random() > 0.75) {
      // Sinon
      // Petite fluctuation de marché
      this.gold = this.gold + 2 * resourcesPrice * corn;
      buyer.gold -= 2 * resourcesPrice * corn;
      buyer.corn += corn;
      this.corn = this.corn - corn;
      console.log(
        'Le prix du blé a augmenté. Il coûte actuellement: ' +
          2 * resourcesPrice +
          ' gold'
      );
    } else {
      this.gold = this.gold + resourcesPrice * corn;
      buyer.gold -= resourcesPrice * corn;
      buyer.corn += corn;
      this.corn = this.corn - corn;
      console.log('Le blé coûte actuellement: ' + resourcesPrice + ' gold');
    }
  }

  toBuy(corn, quantity, ResourcesPrice, Seller) {
    // Petite fluctuation de marché
    if (Math.random() > 0.75) {
      this.gold = this.gold - 2 * ResourcesPrice * corn;
      Seller.gold += 2 * ResourcesPrice * corn;
      console.log(
        'Le prix du blé a augmenté. Il coûte actuellement: ' +
          2 * ResourcesPrice +
          ' gold'
      );
    } else {
      this.gold = this.gold - ResourcesPrice * corn;
      Seller.gold += ResourcesPrice * corn;
      console.log('Le blé coûte actuellement: ' + ResourcesPrice + ' gold');
    }
  }

  beAttacked(businessCorn) {
    this.corn = this.corn - businessCorn;
    console.log(
      'Ressource perdu pendant le voyage du commerce: ' + businessCorn + ' corn'
    );
    console.log('Il vous reste donc ' + this.corn);
  }
}

class Bankruptcy extends Error {
  constructor(business, ...params) {
    super(...params);

    this.business = business;
  }
}

module.exports = {Business, Bankruptcy};
