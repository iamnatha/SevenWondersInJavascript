class Troop {

    init(prixTroupe, vie, nbSoldat){
        this.prixTroupe = prixTroupe;
        this.nbSoldat = nbSoldat;
        this.troup = [];

        var n = 1;
        while(n <= nbSoldat){
            this.troup.push(Object.create(Soldat(100, 100)));
            n = n + 1;
        }
    }

    set(){

    }

    attaquerTroup(troupCible){
        var nbSoldatT1 = this.troup.length;
        var nbSoldatT2 = troupCible.troop.length;

        if(nbSoldatT1 >= nbSoldatT2){

            var rapportDeForce = nbSoldatT2 / nbSoldatT1;

            if(rapportDeForce < Math.random()){ //
                console.log("Victoire de la troupe qui attaque!!!!");
                troupCible.troup = null;
                var n = 0;
                var poucentageBlesse = this.troup.length * Math.random() ;

                while(n < poucentageBlesse){
                    this.troup[n].degat(25);
                    n = n  + 1;
                }


            } else {

                console.log("Victoire de la troupe qui se fait attaquer!!!!");
                this.troup = null;
                var n = 0;
                var poucentageBlesse = troupCible.troup.length * Math.random() ;

                while(n < poucentageBlesse){
                    troupCible.troup[n].degat(25);
                    n = n  + 1;
                }

            }

        } else {

            var rapportDeForce = nbSoldatT1 / nbSoldatT2;
            if(rapportDeForce < Math.random()){
                console.log("Victoire de la troupe qui se fait attaquer!!!!");
                this.troup = null;
                var n = 0;
                var poucentageBlesse = troupCible.troup.length * Math.random() ;

                while(n < poucentageBlesse){
                    troupCible.troup[n].degat(25);
                    n = n  + 1;
                }

            } else {

                console.log("Victoire de la troupe qui attaque!!!!");
                troupCible.troup = null;
                var n = 0;
                var poucentageBlesse = this.troup.length * Math.random() ;

                while(n < poucentageBlesse){
                    this.troup[n].degat(25);
                    n = n  + 1;
                }

            }
        }
    }

    attaquerVille(villeCible){

    }

    defendreVille(){

    }

}

class Soldat{

    // lifeTime commence à 100, on décrément et à 0, vie = 0
    init(vie, lifeTime){
        this.vie = vie;
        this.lifeTime = lifeTime;
    }

    degat(degatSoldat){
        this.vie = this.vie - degatSoldat;
    }



}