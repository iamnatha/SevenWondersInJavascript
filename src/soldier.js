class Soldier {
  // LifeTime commence à 100, on décrément et à 0, life = 0
  init(life, lifeTime) {
    this.life = life;
    this.lifeTime = lifeTime;
    setTimeout(() => {
      this.life = 0;
    }, lifeTime * 1000);
  }

  damage(soldierDamage) {
    this.life = this.life - soldierDamage;
  }
}

module.exports = {Soldier};
