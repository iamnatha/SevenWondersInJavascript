class City {

    init(divinity, buisness, troop){
        this.divinityVille = divinity;
        this.commerceVille = buisness;
        this.troopVille = troop;
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