const {Soldat} = require('../src/soldat');

class Troop {
  init(prixTroupe, vie, nbSoldat) {
    this.prixTroupe = prixTroupe;
    this.nbSoldat = nbSoldat;
    this.troup = [];

    let n = 1;
    while (n <= nbSoldat) {
      this.troup.push(new Soldat(100, 100));
      n += 1;
    }
  }

  attaquerTroup(troupCible) {
    const nbSoldatT1 = this.troup.length;
    const nbSoldatT2 = troupCible.troup.length;
    this.checkLife();

    if (nbSoldatT1 >= nbSoldatT2) {
      const rapportDeForce = nbSoldatT2 / nbSoldatT1;

      if (rapportDeForce < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');
        troupCible.troup = [];
        let n = 0;
        const poucentageBlesse = this.troup.length * Math.random();

        while (n < poucentageBlesse) {
          this.troup[n].degat(25);
          n += 1;
        }
      } else {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.troup = [];
        let n = 0;
        const poucentageBlesse = troupCible.troup.length * Math.random();

        while (n < poucentageBlesse) {
          troupCible.troup[n].degat(25);
          n += 1;
        }
      }
    } else {
      const rapportDeForce = nbSoldatT1 / nbSoldatT2;
      if (rapportDeForce < Math.random()) {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.troup = [];
        let n = 0;
        const poucentageBlesse = troupCible.troup.length * Math.random();

        while (n < poucentageBlesse) {
          troupCible.troup[n].degat(25);
          n += 1;
        }
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');
        troupCible.troup = [];
        let n = 0;
        const poucentageBlesse = this.troup.length * Math.random();

        while (n < poucentageBlesse) {
          this.troup[n].degat(25);
          n += 1;
        }
      }
    }
  }

  attaquerVille(villeCible) {
    const nbSoldatT1 = this.troup.length;
    const nbSoldatT2 = villeCible.troopVille.length;
    this.checkLife();

    if (nbSoldatT1 >= nbSoldatT2) {
      const rapportDeForce = nbSoldatT2 / nbSoldatT1;

      if (rapportDeForce < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');

        let n = 0;
        const poucentageBlesse = this.troup.length * Math.random();

        villeCible.commerceVille.seFairePiller(10);

        while (n < poucentageBlesse) {
          this.troup[n].degat(25);
          n += 1;
        }

        this.checkLife();
        console.log(
          poucentageBlesse + "% des troupes ont été blessé pendant l'attaque"
        );
      } else {
        this.defendreVille();
      }
    } else {
      const rapportDeForce = nbSoldatT2 / nbSoldatT1;

      if (rapportDeForce < Math.random()) {
        //

        this.defendreVille();
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');

        let n = 0;
        const poucentageBlesse = this.troup.length * Math.random();

        villeCible.commerceVille.seFairePiller(10);

        while (n < poucentageBlesse) {
          this.troup[n].degat(25);
          n += 1;
        }

        this.checkLife();
        console.log(
          poucentageBlesse + "% des troupes ont été blessé pendant l'attaque"
        );
      }
    }
  }

  defendreVille() {
    console.log('Victoire de la ville qui se fait attaquer!!!!');
    this.checkLife();
    let n = 0;
    const poucentageBlesse = this.troup.length * Math.random();

    while (n < poucentageBlesse) {
      this.troup[n].degat(25);
      n += 1;
    }

    console.log(
      (poucentageBlesse / this.troup.length) * 100 +
        "% des troupes ont été blessé pendant l'attaque"
    );
  }

  ajouterSoldat(NbrSoldatAjouter, ville) {
    if (ville.commerceVille.gold < NbrSoldatAjouter * this.prixTroupe) return;
    let n = 0;
    while (n <= NbrSoldatAjouter) {
      this.troup.push(new Soldat(100, 100));
      n += 1;
    }

    ville.commerceVille.gold -= NbrSoldatAjouter * this.prixTroupe;
  }

  checkLife() {
    for (let i = this.troup.length - 1; i > 0; i--) {
      if (this.troup[i].vie <= 0) {
        this.troup.splice(i, 1);
      }
    }
  }
}

module.exports = {Troop};
