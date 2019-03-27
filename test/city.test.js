const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { City } = require("../src/city");
const { Divinity } = require("../src/divinity");

chai.use(chaiAsPromised);
chai.should();

describe("City.js", () => {
  describe("City", () => {
    it("should receive gifts", async () => {
      let city = new City("testcity");
      city.corn.should.be.equal(0);
      city.gold.should.be.equal(0);

      city.receiveGift({ gold: 10, corn: 10 });
      city.corn.should.be.equal(10);
      city.gold.should.be.equal(10);

      city.receiveGift({ gold: 10 });
      city.corn.should.be.equal(10);
      city.gold.should.be.equal(20);

      city.receiveGift({ corn: 10 });
      city.corn.should.be.equal(20);
      city.gold.should.be.equal(20);
    });
  });

  describe("City's divinity", () => {
    let divinity;

    before(() => {
      divinity = new Divinity("test");
    });

    after(() => {
      divinity.endWorld();
    });

    it("should receive gifts from divinity", () => {
      let city = new City("test");
      city.setDivinity(divinity);

      city.divinity.should.be.equal(divinity);

      city.divinity.worldEvents.emit("favor", {gold:1, corn:1});
      city.corn.should.be.equal(1);
      city.gold.should.be.equal(1);
      city.divinity.worldEvents.emit("blessing", {gold:10, corn:10});
      city.corn.should.be.equal(11);
      city.gold.should.be.equal(11);
    });
  });
});
