class City {

    init(divinity, buisness, troop){
        this.divinityVille = divinity;
        this.commerceVille = buisness;
        this.troopVille = troop;

        this.divinityVille.worldEvents.on('favor', (g) => {
          this.commerceVille.gold += g.gold;
          this.commerceVille.corn += g.corn;
        });
    }

    get divinity() {
        return this.divinityVille;
    }

    get buisness() {
        return this.commerceVille;
    }

    get troop() {
        return this.troopVille;
    }

}

module.exports = {City};