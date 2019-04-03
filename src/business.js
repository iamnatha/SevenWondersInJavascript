var Commerce = {

    init: function(produitAgricoleRessource, produitArtisanalRessource, produitDeLaMerRessource, produitDeDetailRessource, budgetCite){
        this.produitAgricoleRessource = produitAgricoleRessource;
        this.produitArtisanalRessource = produitArtisanalRessource;
        this.produitDeLaMerRessource = produitDeLaMerRessource;
        this.produitDeDetailRessource = produitDeDetailRessource;
        this.budgetCite = budgetCite;
    },

    vendre: function(ressourceAVendre, quantite, prixDeVenteParRessource, commerceAcheteur){

        // On fera appel ici à la fonction seFaireAttaquer avec une condition Math.random
        // Si il se font pas attaquer, alors ils vende, et donc une autre cite achete. -> Faire appel à la fonction acheter
    },

    acheter: function(ressourceAAcheter, quantite, prixDeAchatParRessource, commerceVendeur){

    },

    seFaireAttaquer: function(){
        // Si les commercant se font attaquer, alors il perde des ressources qu'ils ont essayé de vendre
    }

}