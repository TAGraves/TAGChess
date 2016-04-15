/*eslint-disable */
import Move from '../../src/js/models/Move.js';
import Piece from '../../src/js/models/Piece.js';
import Location from '../../src/js/models/Location.js';

describe('Move', function () {
  it('should throw a ReferenceError when the piece argument is missing or undefined', function () {
    const location = new Location('A1');
    expect(() => new Move()).to.throw(ReferenceError);
    expect(() => new Move(undefined, location)).to.throw(ReferenceError);
  });

  it('should throw a TypeError when the piece argument is not a Piece', function () {
    const location = new Location('A1');
    expect(() => new Move(location)).to.throw(TypeError);
    expect(() => new Move('', location)).to.throw(TypeError);
    expect(() => new Move(location, location)).to.throw(TypeError);
  });

  it('should throw a ReferenceError when the location argument is missing or undefined', function () {
    const location = new Location('A1');
    const piece = new Piece(location);
    expect(() => new Move(piece)).to.throw(ReferenceError);
    expect(() => new Move(piece, undefined)).to.throw(ReferenceError);
  });

  it('should throw a TypeError when the location argument is not a Location', function () {
    const location = new Location('A1');
    const piece = new Piece(location);

    expect(() => new Move(piece, '')).to.throw(TypeError);
    expect(() => new Move(piece, piece)).to.throw(TypeError);
  });

  describe('.isLegal', function () {
    it('should return false when the piece is already in the location', function () {
      const location = new Location('A1');
      const piece = new Piece(location);
      const move = new Move(piece, location);
      expect(move.isLegal()).to.be.false;
    });

    it('should return false when another piece by the same player is already in the location');

  });
});
