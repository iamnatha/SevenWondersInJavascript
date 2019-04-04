const {Soldat} = require('../src/Soldat');

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
    checkLife();

    if (nbSoldatT1 >= nbSoldatT2) {
      var rapportDeForce = nbSoldatT2 / nbSoldatT1;

      if (rapportDeForce < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');
        troupCible.troup = [];
        var n = 0;
        var poucentageBlesse = this.troup.length * Math.random();

        while (n < poucentageBlesse) {
          this.troup[n].degat(25);
          n += 1;
        }
      } else {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.troup = [];
        var n = 0;
        var poucentageBlesse = troupCible.troup.length * Math.random();

        while (n < poucentageBlesse) {
          troupCible.troup[n].degat(25);
          n += 1;
        }
      }
    } else {
      var rapportDeForce = nbSoldatT1 / nbSoldatT2;
      if (rapportDeForce < Math.random()) {
        console.log('Victoire de la troupe qui se fait attaquer!!!!');
        this.troup = [];
        var n = 0;
        var poucentageBlesse = troupCible.troup.length * Math.random();

        while (n < poucentageBlesse) {
          troupCible.troup[n].degat(25);
          n += 1;
        }
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');
        troupCible.troup = [];
        var n = 0;
        var poucentageBlesse = this.troup.length * Math.random();

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
    checkLife();

    if (nbSoldatT1 >= nbSoldatT2) {
      var rapportDeForce = nbSoldatT2 / nbSoldatT1;

      if (rapportDeForce < Math.random()) {
        //
        console.log('Victoire de la troupe qui attaque!!!!');

        var n = 0;
        var poucentageBlesse = this.troup.length * Math.random();

        villeCible.commerceVille.seFairePiller(10);

        while (n < poucentageBlesse) {
          this.troup[n].degat(25);
          n += 1;
        }

        checkLife();
        console.log(
          poucentageBlesse + "% des troupes ont été blessé pendant l'attaque"
        );
      } else {
        defendreVille();
      }
    } else {
      var rapportDeForce = nbSoldatT2 / nbSoldatT1;

      if (rapportDeForce < Math.random()) {
        //

        defendreVille();
      } else {
        console.log('Victoire de la troupe qui attaque!!!!');

        var n = 0;
        var poucentageBlesse = this.troup.length * Math.random();

        villeCible.commerceVille.seFairePiller(10);

        while (n < poucentageBlesse) {
          this.troup[n].degat(25);
          n += 1;
        }

        checkLife();
        console.log(
          poucentageBlesse + "% des troupes ont été blessé pendant l'attaque"
        );
      }
    }
  }

  defendreVille() {
    console.log('Victoire de la ville qui se fait attaquer!!!!');
    checkLife();
    let n = 0;
    const poucentageBlesse = this.troup.length * Math.random();

    while (n < poucentageBlesse) {
      this.troup[n].degat(25);
      n += 1;
    }

    console.log(
      poucentageBlesse + "% des troupes ont été blessé pendant l'attaque"
    );
  }

  AjouterSoldat(NbrSoldatAjouter, ville) {
    let n = 0;
    while (n <= NbrSoldatAjouter) {
      this.troup.push(new Soldat(100, 100));
      n += 1;
    }
    ville.commerceVille.gold -= NbrSoldatAjouter * this.prixTroupe;
  }

  checkLife() {
    for (let i = troup.length - 1; i--; ) {
      if (troup[i].vie <= 0) list.splice(i, 1);
    }
  }
}

module.exports = {Troop};
