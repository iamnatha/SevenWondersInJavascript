const chai = require('chai');
const {it, describe} = require('mocha');
const {Soldier} = require('../src/soldier');

chai.should();

describe('soldier.js', () => {
  describe('soldier.js', () => {
    it('should set life to 0 when killed', () => {
      const soldier = new Soldier(10, 1000);

      soldier.kill();
      soldier.life.should.be.equal(0);
    });

    it('should remove life when taking damage', () => {
      const soldier = new Soldier(10, 1000);

      soldier.damage(5);
      soldier.life.should.be.equal(5);
      soldier.kill();
    });

    it('should die of aging', async () => {
      const soldier = new Soldier(10, 0.01);

      await new Promise(resolve => setTimeout(resolve, 20));

      soldier.life.should.be.equal(0);
      soldier.kill();
    });
  });
});
