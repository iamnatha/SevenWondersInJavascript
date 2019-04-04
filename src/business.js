class Business {

    init(corn, gold){
        this.corn_ = corn;
        this.gold = gold;
    }

    get corn(){
        return this.corn_;
    }

    set corn(corn){
        this.corn_ = corn;
    }

    seFairePiller(ressourcePille){
        this.corn = this.corn - ressourcePille;
        this.gold = this.gold - ressourcePille;
    }

    vendre(corn, prixParRessource, Acheteur){

        if(Math.random() > 0.95){
            // Si les commercant se font attaquer
            this.seFaireAttaquer(corn);
        } else{
            // Sinon
            // Petite fluctuation de marché
            if(Math.random() > 0.75) {
                this.gold = this.gold + 2 *prixParRessource * corn;
                Acheteur.gold = Acheteur.gold - 2 * prixParRessource * corn;
                Acheteur.corn = Acheteur.corn + corn;
                this.corn = this.corn - corn;
                console.log("Le prix du blé a augmenté. Il coûte actuellement: "+ 2 * prixParRessource +" gold")
            } else{
                this.gold = this.gold + prixParRessource * corn;
                Acheteur.gold = Acheteur.gold - prixParRessource * corn;
                Acheteur.corn = Acheteur.corn + corn;
                this.corn = this.corn - corn;
                console.log("Le blé coûte actuellement: "+ prixParRessource +" gold")

            }

        }

    }

    acheter(corn, quantite, prixRessource, Vendeur){

        // Petite fluctuation de marché
        if(Math.random() > 0.75) {
            this.gold = this.gold - 2 *prixParRessource * corn;
            Vendeur.gold = Vendeur.gold + 2 * prixParRessource * corn;
            console.log("Le prix du blé a augmenté. Il coûte actuellement: "+ 2 * prixParRessource +" gold")
        } else{
            this.gold = this.gold - prixParRessource * corn;
            Vendeur.gold = Vendeur.gold + prixParRessourcegit  * corn;
            console.log("Le blé coûte actuellement: "+ prixParRessource +" gold")

        }

    }

    seFaireAttaquer(cornDuCommerce){
        this.corn = this.corn - cornDuCommerce;
        Console.log("Ressource perdu pendant le voyage du commerce: " + cornDuCommerce + " corn");
        Console.log("Il vous reste donc " + this.corn);
    }

}

module.exports = {Business};