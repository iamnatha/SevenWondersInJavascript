const chai = require('chai');
const {it, describe} = require('mocha');
const {Troop} = require('../src/troop');

chai.should();

describe('Troop.js', () => {
  describe('Troop', () => {
    it('should initialize troops', () => {
      const troop = new Troop(1, 100, 10);

      troop.troopPrice.should.be.equal(1);

      troop.killTroop();
    });

    it('should kill all soldiers when troop killed', () => {
      const troop = new Troop(1, 100, 10);

      troop.killTroop();
      troop.troop.length.should.be.equal(0);
    });

    it('should remove soldiers with life < 0', () => {
      const troop = new Troop(1, 100, 10);

      troop.troop[0].damage(100);
      troop.troop[1].damage(200);

      troop.checkLife();
      troop.troop.length.should.be.equal(8);

      troop.killTroop();
    });
  });
});
