class Business {

    init(corn, gold){
        this.corn = corn;
        this.gold = gold;
    }

    get corn(){
        return this.corn;
    }

    set corn(corn){
        this.corn = corn;
    }

    seFairePiller(ressourcePille){
        this.corn = this.corn - ressourcePille;
        this.gold = this.gold - ressourcePille;
    }

    vendre(corn, prixParRessource, Acheteur){

        if(Math.random() > 0.95){
            // Si les commercant se font attaquer
            seFaireAttaquer(corn);
        } else{
            // Sinon
            // Petite fluctuation de marché
            if(Math.random() > 0.75) {
                this.gold = this.gold + 2 *prixParRessource * corn;
                Acheteur.gold = Acheteur.gold - 2 * prixParRessource * corn;
            } else{
                this.gold = this.gold + prixParRessource * corn;
                Acheteur.gold = Acheteur.gold - prixParRessource * corn;
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