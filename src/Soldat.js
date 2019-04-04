class Soldat {
  // LifeTime commence à 100, on décrément et à 0, vie = 0
  init(vie, lifeTime) {
    this.vie = vie;
    this.lifeTime = lifeTime;
    setTimeout(() => {
      this.vie = 0;
    }, lifeTime * 1);
  }

  degat(degatSoldat) {
    this.vie = this.vie - degatSoldat;
  }
}

module.exports = {Soldat};
