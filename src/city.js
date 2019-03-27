class City {
  constructor(name) {
    this.name_ = name || "UNKCITY";
    this.corn_ = 0;
    this.gold_ = 0;
  }

  setDivinity(divinity) {
    this.divinity_ = divinity;
    this.divinity.init();
    this.divinity.worldEvents.on("favor", (gift) => {
      this.receiveGift(gift);
    });
    this.divinity.worldEvents.on("blessing", (gift) => {
      this.receiveGift(gift);
    });
  }

  receiveGift(gift) {
    this.corn_ += "corn" in gift ? gift.corn : 0;
    this.gold_ += "gold" in gift ? gift.gold : 0;
  }

  get corn() {
    return this.corn_;
  }
  
  get gold() {
    return this.gold_;
  }

  get name() {
    return this.name_;
  }

  get divinity() {
    return this.divinity_;
  }
}

module.exports = { City };