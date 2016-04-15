/*eslint-disable */
import Location from '../../src/js/models/Location';

describe('Location', function () {
  const l = {};
  const LETTERS = 'ABCDEFGH';
  const NUMBERS = '12345678';
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      const name = LETTERS[i] + NUMBERS[j];
      l[name] = new Location(name);
    }
  }

  it('should throw a ReferenceError when the name is missing or undefined', function () {
    expect(() => new Location()).to.throw(ReferenceError);
    expect(() => new Location(undefined)).to.throw(ReferenceError);
  });

  it('should throw an Error when the name is not a string in algebraic notation', function () {
    expect(() => new Location('A')).to.throw(Error);
    expect(() => new Location(0)).to.throw(Error);
    expect(() => new Location('A0')).to.throw(Error);
    expect(() => new Location('A9')).to.throw(Error);
    expect(() => new Location('I1')).to.throw(Error);
    expect(() => new Location({})).to.throw(Error);
    expect(() => new Location([])).to.throw(Error);
  });

  it('should never throw an error when the name is valid', function () {
    const LETTERS = 'ABCDEFGH';
    const NUMBERS = '12345678';
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        const name = LETTERS[i] + NUMBERS[j];
        expect(new Location(name)).to.be.ok;
      }
    }
  });

  it('should have its name defined', function () {
    expect(l.A1).to.have.property('name','A1');
    expect(l.B2).to.have.property('name','B2');
  });

  describe('.horizontalDistanceTo', function () {
    const location = l.D4; // D4 so we can check all directions

    it('should throw a ReferenceError when the location is missing or undefined', function () {
      expect(() => location.horizontalDistanceTo()).to.throw(ReferenceError);
    });

    it('should throw a TypeError when the location is not a location', function () {
      expect(() => location.horizontalDistanceTo('A1')).to.throw(TypeError);
    });

    it('should return zero when the locations are on the same rank', function () {
      expect(location.horizontalDistanceTo(l.C4)).to.equal(0);
    });

    it('should return the distance between ranks', function () {
      expect(location.horizontalDistanceTo(l.D3)).to.equal(1);
      expect(location.horizontalDistanceTo(l.D5)).to.equal(1);
      expect(location.horizontalDistanceTo(l.C3)).to.equal(1);
      expect(location.horizontalDistanceTo(l.C5)).to.equal(1);
      expect(location.horizontalDistanceTo(l.D2)).to.equal(2);
      expect(location.horizontalDistanceTo(l.D7)).to.equal(3);
      expect(location.horizontalDistanceTo(l.C1)).to.equal(3);
      expect(location.horizontalDistanceTo(l.C8)).to.equal(4);
    });
  });

  describe('.verticalDistanceTo', function () {
    const location = l.D4; // D4 so we can check all directions

    it('should throw a ReferenceError when the location is missing or undefined', function () {
      expect(() => location.verticalDistanceTo()).to.throw(ReferenceError);
    });

    it('should throw a TypeError when the location is not a location', function () {
      expect(() => location.verticalDistanceTo('A1')).to.throw(TypeError);
    });

    it('should return zero when the locations are on the same rank', function () {
      expect(location.verticalDistanceTo(l.D5)).to.equal(0);
    });

    it('should return the distance between files', function () {
      expect(location.verticalDistanceTo(l.C4)).to.equal(1);
      expect(location.verticalDistanceTo(l.E4)).to.equal(1);
      expect(location.verticalDistanceTo(l.C3)).to.equal(1);
      expect(location.verticalDistanceTo(l.E3)).to.equal(1);
      expect(location.verticalDistanceTo(l.B5)).to.equal(2);
      expect(location.verticalDistanceTo(l.F7)).to.equal(2);
      expect(location.verticalDistanceTo(l.A1)).to.equal(3);
      expect(location.verticalDistanceTo(l.H8)).to.equal(4);
    });
  });

  describe('.distanceTo', function () {
    const location = l.D4; // D4 so we can check all directions

    it('should throw a ReferenceError when the location is missing or undefined', function () {
      expect(() => location.distanceTo()).to.throw(ReferenceError);
    });

    it('should throw a TypeError when the location is not a location', function () {
      expect(() => location.distanceTo('A1')).to.throw(TypeError);
    });

    it('should return the vertical distance when ranks are the same', function () {
      expect(location.distanceTo(l.C4)).to.equal(location.verticalDistanceTo(l.C4));
      expect(location.distanceTo(l.A4)).to.equal(location.verticalDistanceTo(l.A4));
      expect(location.distanceTo(l.E4)).to.equal(location.verticalDistanceTo(l.E4));
    });

    it('should return the horizontal distance when files are the same', function () {
      expect(location.distanceTo(l.D5)).to.equal(location.horizontalDistanceTo(l.D5));
      expect(location.distanceTo(l.D2)).to.equal(location.horizontalDistanceTo(l.D2));
      expect(l.A1.distanceTo(l.A5)).to.equal(l.A1.horizontalDistanceTo(l.A5));
    });

    it('should return the calculated distance when files and ranks are different', function () {
      expect(location.distanceTo(l.C5)).to.equal(1);
      expect(location.distanceTo(l.C6)).to.equal(1.5);
      expect(location.distanceTo(l.A1)).to.equal(3);
      expect(location.distanceTo(l.A8)).to.equal(3.5);
    });
  });

  describe('.isDiagonalTo', function () {
    const location = l.D4;

    it('should throw a ReferenceError when the location is missing or undefined', function () {
      expect(() => location.isDiagonalTo()).to.throw(ReferenceError);
    });

    it('should throw a TypeError when the location is not a location', function () {
      expect(() => location.isDiagonalTo('A1')).to.throw(TypeError);
    });

    it('should return true when the locations are diagonal', function () {
      expect(l.D3.isDiagonalTo(l.C2)).to.be.true;
      expect(l.E6.isDiagonalTo(l.F7)).to.be.true;
      expect(l.D4.isDiagonalTo(l.A1)).to.be.true;
      expect(l.D4.isDiagonalTo(l.A1)).to.be.true;
      expect(l.C2.isDiagonalTo(l.H7)).to.be.true;
    });

    it('should return false when the locations are not diagonal', function () {
      expect(l.D3.isDiagonalTo(l.D3)).to.be.false;
      expect(l.E5.isDiagonalTo(l.F7)).to.be.false;
      expect(l.D7.isDiagonalTo(l.A1)).to.be.false;
      expect(l.D1.isDiagonalTo(l.A1)).to.be.false;
      expect(l.C8.isDiagonalTo(l.H7)).to.be.false;
    });
  });

  describe('.makeNameUsable', function () {
    it('should return an array of two integers from 1-8', function () {
      expect(l.A1.makeNameUsable()).to.deep.equal([1,1]);
      expect(l.E2.makeNameUsable()).to.deep.equal([5,2]);
      expect(l.F4.makeNameUsable()).to.deep.equal([6,4]);
      expect(l.H3.makeNameUsable()).to.deep.equal([8,3]);
    });
  });


});
