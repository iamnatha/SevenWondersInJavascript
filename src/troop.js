const {Soldier} = require('../src/soldat');

class Troop {
  init(TroopPrice, life, nbSoldier) {
    this.TroopPrice = TroopPrice;
    this.nbSoldier = nbSoldier;
    this.troop = [];

    let n = 1;
    while (n <= nbSoldier) {
      this.troop.push(new Soldier(100, 100));
      n += 1;
    }
  }

  TroopAttack(TargetTroop) {
    const nbSoldierT1 = this.troop.length;
    const nbSoldierT2 = TargetTroop.troop.length;
    this.checkLife();

    if (nbSoldierT1 >= nbSoldierT2) {
      const BalanceOfPower = nbSoldierT2 / nbSoldierT1;

      if (BalanceOfPower < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');
        TargetTroop.troop = [];
        let n = 0;
        const InjuredPercentage = this.troop.length * Math.random();

        while (n < InjuredPercentage) {
          this.troop[n].Damage(25);
          n += 1;
        }
      } else {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.troop = [];
        let n = 0;
        const InjuredPercentage = TargetTroop.troop.length * Math.random();

        while (n < InjuredPercentage) {
          TargetTroop.troop[n].Damage(25);
          n += 1;
        }
      }
    } else {
      const BalanceOfPower = nbSoldierT1 / nbSoldierT2;
      if (BalanceOfPower < Math.random()) {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.troop = [];
        let n = 0;
        const InjuredPercentage = TargetTroop.troop.length * Math.random();

        while (n < InjuredPercentage) {
          TargetTroop.troop[n].Damage(25);
          n += 1;
        }
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');
        TargetTroop.troop = [];
        let n = 0;
        const InjuredPercentage = this.troop.length * Math.random();

        while (n < InjuredPercentage) {
          this.troop[n].Damage(25);
          n += 1;
        }
      }
    }
  }

  CityAttack(TargetCity) {
    const nbSoldierT1 = this.troop.length;
    const nbSoldierT2 = TargetCity.CityTroop.length;
    this.checkLife();

    if (nbSoldierT1 >= nbSoldierT2) {
      const BalanceOfPower = nbSoldierT2 / nbSoldierT1;

      if (BalanceOfPower < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');

        let n = 0;
        const BalanceOfPower = this.troop.length * Math.random();

        TargetCity.CityBuisness.BeLooted(10);

        while (n < BalanceOfPower) {
          this.troop[n].Damage(25);
          n += 1;
        }

        this.checkLife();
        console.log(
          BalanceOfPower + "% des troupes ont été blessé pendant l'attaque"
        );
      } else {
        this.CityDefense();
      }
    } else {
      const BalanceOfPower = nbSoldierT2 / nbSoldierT1;

      if (BalanceOfPower < Math.random()) {
        //

        this.CityDefense();
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');

        let n = 0;
        const InjuredPercentage = this.troop.length * Math.random();

        TargetCity.CityBuisness.BeLooted(10);

        while (n < InjuredPercentage) {
          this.troop[n].Damage(25);
          n += 1;
        }

        this.checkLife();
        console.log(
          InjuredPercentage + "% des troupes ont été blessé pendant l'attaque"
        );
      }
    }
  }

  CityDefense() {
    console.log('Victoire de la ville qui se fait attaquer!!!!');
    this.checkLife();
    let n = 0;
    const InjuredPercentage = this.troop.length * Math.random();

    while (n < InjuredPercentage) {
      this.troop[n].Damage(25);
      n += 1;
    }

    console.log(
      (InjuredPercentage / this.troop.length) * 100 +
        "% des troupes ont été blessé pendant l'attaque"
    );
  }

  AddSoldier(NbrSoldierToAdd, city) {
    if (city.CityBuisness.gold < NbrSoldierToAdd * this.TroopPrice) return;
    let n = 0;
    while (n <= NbrSoldierToAdd) {
      this.troop.push(new Soldier(100, 100));
      n += 1;
    }

    city.CityBuisness.gold -= NbrSoldierToAdd * this.TroopPrice;
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
