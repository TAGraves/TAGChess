/*eslint-disable */
import Location from '../../src/js/models/Location';

describe('Location', function () {
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
    expect(new Location('A1')).to.have.property('name','A1');
    expect(new Location('B2')).to.have.property('name','B2');
  });
});
