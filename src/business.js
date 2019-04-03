var Commerce = {

    init: function(corn, gold){
        this.corn = corn;
        this.gold = gold;
    },

    vendre: function(corn, quantite, prixDeVenteParRessource, commerceAcheteur){

        // On fera appel ici à la fonction seFaireAttaquer avec une condition Math.random
        // Si il se font pas attaquer, alors ils vende, et donc une autre cite achete. -> Faire appel à la fonction acheter
    },

    acheter: function(corn, quantite, prixDeAchatParRessource, commerceVendeur){

    },

    seFaireAttaquer: function(){
        // Si les commercant se font attaquer, alors il perde des ressources qu'ils ont essayé de vendre
    }

}