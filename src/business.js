class Business {
  init(corn, gold) {
    this.corn_ = corn;
    this.gold = gold;
  }

  get corn() {
    return this.corn_;
  }

  set corn(corn) {
    this.corn_ = corn;
  }

  BeLooted(ressourcePille) {
    this.corn = this.corn - ressourcePille;
    this.gold = this.gold - ressourcePille;
  }

  ToSell(corn, ResourcesPrice, Buyer) {
    if (Math.random() > 0.5) {
      // Si les commercant se font attaquer
      this.BeAttacked(corn);
    } else if (Math.random() > 0.75) {
      // Sinon
      // Petite fluctuation de marché
      this.gold = this.gold + 2 * ResourcesPrice * corn;
      Buyer.gold -= 2 * ResourcesPrice * corn;
      Buyer.corn += corn;
      this.corn = this.corn - corn;
      console.log(
        'Le prix du blé a augmenté. Il coûte actuellement: ' +
          2 * ResourcesPrice +
          ' gold'
      );
    } else {
      this.gold = this.gold + ResourcesPrice * corn;
      Buyer.gold -= ResourcesPrice * corn;
      Buyer.corn += corn;
      this.corn = this.corn - corn;
      console.log('Le blé coûte actuellement: ' + ResourcesPrice + ' gold');
    }
  }

  ToBuy(corn, quantity, ResourcesPrice, Seller) {
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

  BeAttacked(BuisnessCorn) {
    this.corn = this.corn - BuisnessCorn;
    console.log(
      'Ressource perdu pendant le voyage du commerce: ' +
        BuisnessCorn +
        ' corn'
    );
    console.log('Il vous reste donc ' + this.corn);
  }
}

module.exports = {Business};
