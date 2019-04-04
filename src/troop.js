const {Soldat} = require('../src/Soldat');

class Troop {

    init(prixTroupe, vie, nbSoldat) {
        this.prixTroupe = prixTroupe;
        this.nbSoldat = nbSoldat;
        this.troup = [];

        var n = 1;
        while (n <= nbSoldat) {
            this.troup.push(new Soldat(100, 100));
            n = n + 1;
        }
    }

    set() {

    }

    attaquerTroup(troupCible) {
        var nbSoldatT1 = this.troup.length;
        var nbSoldatT2 = troupCible.troup.length;

        if (nbSoldatT1 >= nbSoldatT2) {

            var rapportDeForce = nbSoldatT2 / nbSoldatT1;

            if (rapportDeForce < Math.random()) { //
                console.log("Victoire de la troupe qui attaque!!!!");
                troupCible.troup = [];
                var n = 0;
                var poucentageBlesse = this.troup.length * Math.random();

                while (n < poucentageBlesse) {
                    this.troup[n].degat(25);
                    n = n + 1;
                }


            } else {

                console.log("Victoire de la troupe qui se fait attaquer!!!!");
                this.troup = [];
                var n = 0;
                var poucentageBlesse = troupCible.troup.length * Math.random();

                while (n < poucentageBlesse) {
                    troupCible.troup[n].degat(25);
                    n = n + 1;
                }

            }

        } else {

            var rapportDeForce = nbSoldatT1 / nbSoldatT2;
            if (rapportDeForce < Math.random()) {
                console.log("Victoire de la troupe qui se fait attaquer!!!!");
                this.troup = [];
                var n = 0;
                var poucentageBlesse = troupCible.troup.length * Math.random();

                while (n < poucentageBlesse) {
                    troupCible.troup[n].degat(25);
                    n = n + 1;
                }

            } else {

                console.log("Victoire de la troupe qui attaque!!!!");
                troupCible.troup = [];
                var n = 0;
                var poucentageBlesse = this.troup.length * Math.random();

                while (n < poucentageBlesse) {
                    this.troup[n].degat(25);
                    n = n + 1;
                }

            }
        }
    }

    attaquerVille(villeCible) {
        var nbSoldatT1 = this.troup.length;
        var nbSoldatT2 = villeCible.troopVille.length;

        if (nbSoldatT1 >= nbSoldatT2) {

            var rapportDeForce = nbSoldatT2 / nbSoldatT1;

            if (rapportDeForce < Math.random()) { //
                console.log("Victoire de la troupe qui attaque!!!!");

                var n = 0;
                var poucentageBlesse = this.troup.length * Math.random();

                villeCible.commerceVille.seFairePiller(10);

                while (n < poucentageBlesse) {
                    this.troup[n].degat(25);
                    n = n + 1;
                }
            } else {

                defendreVille();

            }
        } else {

            var rapportDeForce = nbSoldatT2 / nbSoldatT1;

            if (rapportDeForce < Math.random()) { //

                defendreVille();

            } else {

                console.log("Victoire de la troupe qui attaque!!!!");

                var n = 0;
                var poucentageBlesse = this.troup.length * Math.random();

                villeCible.commerceVille.seFairePiller(10);

                while (n < poucentageBlesse) {
                    this.troup[n].degat(25);
                    n = n + 1;
                }

            }
        }
    }

        defendreVille()
        {
            console.log("Victoire de la ville qui se fait attaquer!!!!");

            var n = 0;
            var poucentageBlesse = this.troup.length * Math.random();

            while (n < poucentageBlesse) {
                this.troup[n].degat(25);
                n = n + 1;
            }

        }

        AjouterSoldat(NbrSoldatAjouter){
            var n=0;
            while (n <= NbrSoldatAjouter) {
                this.troup.push(new Soldat(100, 100));
                n = n + 1;
            }
        }

}

module.exports = {Troop};