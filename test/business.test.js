const chai = require('chai');
const {it, describe} = require('mocha');
const {Business, Bankruptcy} = require('../src/business');

chai.should();

describe('business.js', () => {
  describe('Bankruptcy error', () => {
    it('should attach business to the error', () => {
      const business = new Business();
      const error = new Bankruptcy(business, 'test');

      error.business.should.be.equal(business);
      error.message.should.be.equal('test');
    });
  });

  describe('Business class', () => {
    it('should decerease resources when looted', () => {
      const business = new Business(10, 10);

      business.beLooted(10);
      business.gold.should.be.equal(0);
      business.corn.should.be.equal(0);
    });

    it('should remove corn when selling', () => {
      const businessSelling = new Business(100, 100);
      const businessBuying = new Business(100, 100);

      businessSelling.toSell(10, 1, businessBuying);
      businessSelling.corn.should.be.equal(90);
    });

    it('should decerease corn when attaqued', () => {
      const business = new Business(10, 10);

      business.beAttacked(10);
      business.gold.should.be.equal(10);
      business.corn.should.be.equal(0);
    });
  });
});
