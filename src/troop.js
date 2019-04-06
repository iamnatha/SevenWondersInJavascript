const {Soldier} = require('../src/soldier');

class Troop {
  constructor(TroopPrice, life, nbSoldier) {
    this.troopPrice = TroopPrice;
    this.nbSoldier = nbSoldier;
    this.troop = [];

    let n = 1;
    while (n <= nbSoldier) {
      this.troop.push(new Soldier(100, 100));
      n += 1;
    }
  }

  troopAttack(targetTroop) {
    const nbSoldierT1 = this.troop.length;
    const nbSoldierT2 = targetTroop.troop.length;
    this.checkLife();

    if (nbSoldierT1 >= nbSoldierT2) {
      const balanceOfPower = nbSoldierT2 / nbSoldierT1;

      if (balanceOfPower < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');
        targetTroop.troop = [];
        let n = 0;
        const injuredPercentage = this.troop.length * Math.random();

        while (n < injuredPercentage) {
          this.troop[n].damage(25);
          n += 1;
        }
      } else {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.troop = [];
        let n = 0;
        const injuredPercentage = targetTroop.troop.length * Math.random();

        while (n < injuredPercentage) {
          targetTroop.troop[n].damage(25);
          n += 1;
        }
      }
    } else {
      const balanceOfPower = nbSoldierT1 / nbSoldierT2;
      if (balanceOfPower < Math.random()) {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.troop = [];
        let n = 0;
        const injuredPercentage = targetTroop.troop.length * Math.random();

        while (n < injuredPercentage) {
          targetTroop.troop[n].damage(25);
          n += 1;
        }
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');
        targetTroop.troop = [];
        let n = 0;
        const injuredPercentage = this.troop.length * Math.random();

        while (n < injuredPercentage) {
          this.troop[n].damage(25);
          n += 1;
        }
      }
    }
  }

  cityAttack(targetCity) {
    const nbSoldierT1 = this.troop.length;
    const nbSoldierT2 = targetCity.cityTroop.length;
    this.checkLife();

    if (nbSoldierT1 >= nbSoldierT2) {
      const balanceOfPower = nbSoldierT2 / nbSoldierT1;

      if (balanceOfPower < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');

        let n = 0;
        const balanceOfPower = this.troop.length * Math.random();

        targetCity.cityBuisness.beLooted(10);

        while (n < balanceOfPower) {
          this.troop[n].damage(25);
          n += 1;
        }

        this.checkLife();
        console.log(
          balanceOfPower + "% des troupes ont été blessé pendant l'attaque"
        );
      } else {
        this.cityDefense();
      }
    } else {
      const balanceOfPower = nbSoldierT2 / nbSoldierT1;

      if (balanceOfPower < Math.random()) {
        //

        this.cityDefense();
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');

        let n = 0;
        const injuredPercentage = this.troop.length * Math.random();

        targetCity.cityBuisness.beLooted(10);

        while (n < injuredPercentage) {
          this.troop[n].damage(25);
          n += 1;
        }

        this.checkLife();
        console.log(
          injuredPercentage + "% des troupes ont été blessé pendant l'attaque"
        );
      }
    }
  }

  cityDefense() {
    console.log('Victoire de la ville qui se fait attaquer!!!!');
    this.checkLife();
    let n = 0;
    const injuredPercentage = this.troop.length * Math.random();

    while (n < injuredPercentage) {
      this.troop[n].damage(25);
      n += 1;
    }

    console.log(
      (injuredPercentage / this.troop.length) * 100 +
        "% des troupes ont été blessé pendant l'attaque"
    );
  }

  addSoldier(nbrSoldierToAdd, city) {
    if (city.cityBuisness.gold < nbrSoldierToAdd * this.troopPrice) return;
    let n = 0;
    while (n <= nbrSoldierToAdd) {
      this.troop.push(new Soldier(100, 100));
      n += 1;
    }

    city.cityBuisness.gold -= nbrSoldierToAdd * this.troopPrice;
  }

  checkLife() {
    for (let i = this.troop.length - 1; i > 0; i--) {
      if (this.troop[i].life <= 0) {
        this.troop.splice(i, 1);
      }
    }
  }
}

module.exports = {Troop};
