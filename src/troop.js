const {Soldier} = require('../src/soldier');

class Troop {
  constructor(troopPrice, life, nbSoldier) {
    this.troopPrice = troopPrice;
    this.troop = [];

    for (let i = 0; i < nbSoldier; i++) {
      this.troop.push(new Soldier(100, 100));
    }
  }

  troopAttack(targetTroop) {
    const nbSoldierT1 = this.troop.length;
    const nbSoldierT2 = targetTroop.troop.length;
    this.checkLife();

    if (nbSoldierT1 >= nbSoldierT2) {
      const balanceOfPower = (0.5 * nbSoldierT2) / nbSoldierT1;
      if (balanceOfPower < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');
        targetTroop.killTroop();
        Troop.applyInjuries(this);
      } else {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.killTroop();
        Troop.applyInjuries(targetTroop);
      }
    } else {
      const balanceOfPower = (0.5 * nbSoldierT1) / nbSoldierT2;
      if (balanceOfPower < Math.random()) {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.killTroop();
        Troop.applyInjuries(targetTroop);
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');
        this.killTroop();
        Troop.applyInjuries(this);
      }
    }
  }

  static applyInjuries(troop, amount = 20) {
    const injuredPercentage = troop.troop.length * Math.random();
    troop.troop.forEach((soldier, index) => {
      if (index < injuredPercentage) soldier.damage(amount);
    });
    console.log(
      Math.round((injuredPercentage / troop.troop.length) * 100) +
        "% des troupes ont été blessé pendant l'attaque"
    );
    troop.checkLife();
  }

  cityAttack(targetCity) {
    const nbSoldierT1 = this.troop.length;
    const nbSoldierT2 = targetCity.cityTroop.length;
    this.checkLife();

    if (nbSoldierT1 >= nbSoldierT2) {
      const balanceOfPower = (0.5 * nbSoldierT2) / nbSoldierT1;

      if (balanceOfPower < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');

        targetCity.cityBusiness.beLooted(
          Math.ceil(targetCity.business.gold * 0.1) + 10
        );

        Troop.applyInjuries(this, 25);
      } else {
        console.log('Victoire de la ville qui se fait attaquer!!!!');
        Troop.applyInjuries(this, 25);
      }
    } else {
      const balanceOfPower = (0.5 * nbSoldierT2) / nbSoldierT1;

      if (balanceOfPower < Math.random()) {
        console.log('Victoire de la ville qui se fait attaquer!!!!');
        Troop.applyInjuries(this, 25);
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');

        targetCity.cityBusiness.beLooted(
          Math.ceil(targetCity.business.gold * 0.1) + 10
        );
        Troop.applyInjuries(this, 25);
      }
    }
  }

  addSoldier(nbrSoldierToAdd, city) {
    if (city.cityBusiness.gold < nbrSoldierToAdd * this.troopPrice) return;
    let n = 0;
    while (n <= nbrSoldierToAdd) {
      this.troop.push(new Soldier(100, 100));
      n += 1;
    }

    city.cityBusiness.gold -= nbrSoldierToAdd * this.troopPrice;
  }

  checkLife() {
    for (let i = this.troop.length - 1; i >= 0; i--) {
      if (this.troop[i].life <= 0) {
        this.troop[i].kill();
        this.troop.splice(i, 1);
      }
    }
  }

  killTroop() {
    this.troop.forEach(soldier => soldier.kill());
    this.troop = [];
  }
}

module.exports = {Troop};
