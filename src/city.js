class City {

    init(divinity, commerce, troop){
        this.divinityVille = divinity;
        this.commerceVille = commerce;
        this.troopVille = troop;
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