class Soldier {
  // LifeTime commence à 100, on décrément et à 0, life = 0
  constructor(life, lifeTime) {
    this.life = life;

    this.aging = setTimeout(() => {
      this.life = 0;
    }, lifeTime * 1000);
  }

  damage(soldierDamage) {
    this.life -= soldierDamage;
  }

  kill() {
    this.life = 0;
    clearTimeout(this.aging);
  }
}

module.exports = {Soldier};
