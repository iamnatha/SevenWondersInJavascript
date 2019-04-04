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
            } else{
                this.gold = this.gold + prixParRessource * corn;
                Acheteur.gold = Acheteur.gold - prixParRessource * corn;
                Acheteur.corn = Acheteur.corn + corn;
                this.corn = this.corn - corn;
            }

        }

    }

    acheter(corn, quantite, prixRessource, Vendeur){

        // Petite fluctuation de marché
        if(Math.random() > 0.75) {
            this.gold = this.gold - 2 *prixParRessource * corn;
            Vendeur.gold = Vendeur.gold + 2 * prixParRessource * corn;
        } else{
            this.gold = this.gold - prixParRessource * corn;
            Vendeur.gold = Vendeur.gold + prixParRessourcegit  * corn;
        }

    }

    seFaireAttaquer(cornDuCommerce){
        this.corn = this.corn - cornDuCommerce;
        Console.log("Ressource perdu pendant le voyage du commerce: " + cornDuCommerce + " corn");
        Console.log("Il vous reste donc " + this.corn);
    }

}

module.exports = {Business};