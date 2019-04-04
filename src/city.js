class City {

    init(divinity, commerce, troop){
        this.divinityVille = divinity;
        this.commerceVille = commerce;
        this.troopVille = troop;

        this.divinityVille.worldEvents.on('favor', (g) => {
          this.commerceVille.gold += g.gold;
          this.commerceVille.corn += g.corn;
        });
    }

    get divinity() {
        return this.divinityVille;
    }

    get commerce() {
        return this.commerceVille;
    }

    get troop() {
        return this.troopVille;
    }

}

module.exports = {City};