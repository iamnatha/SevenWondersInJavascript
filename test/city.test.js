const chai = require('chai');
const {it, describe} = require('mocha');
const {City} = require('../src/city');
const {Divinity} = require('../src/divinity');
const {Business} = require('../src/business');

chai.should();

describe('city.js', () => {
  describe('City', () => {
    it('should initialize divinity', () => {
      const city = new City('test');
      const divinity = new Divinity('divinity');
      const business = new Business(0, 0);

      city.init(divinity, business);
      divinity.should.have.property('gaiaInterval_');

      divinity.endWorld();
    });

    it('should send divinity gifted resources to business', async () => {
      const city = new City('test');
      const divinity = new Divinity('divinity', 1);
      const business = new Business(0, 0);

      city.init(divinity, business);

      // Delay to wait for the divinity to receive the first offering of the city
      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 5);
      });

      await new Promise(resolve => {
        divinity.worldEvents.once('favor', () => {
          city.business.corn.should.be.above(1);
          city.business.gold.should.be.above(1);
          resolve();
        });
      });

      await new Promise(resolve => {
        divinity.worldEvents.once('blessing', () => {
          city.business.corn.should.be.above(1000);
          city.business.gold.should.be.above(1000);
          resolve();
        });
      });

      await new Promise(resolve => {
        divinity.worldEvents.once('retribution', () => {
          city.business.gold.should.be.above(0);
          resolve();
        });
      });

      divinity.endWorld();
    });
  });
});
