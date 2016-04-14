/*eslint-disable */
import Move from '../../src/js/models/Move.js';
import Piece from '../../src/js/models/Piece.js';
import Location from '../../src/js/models/Location.js';
const expect = require('chai').expect;

describe('Move', function () {
  it('should throw an error when the piece is invalid', function () {
    const location = new Location('A1');
    expect(() => new Move(location)).to.throw(Error);
    expect(() => new Move('', location)).to.throw(Error);
    expect(() => new Move(location, location)).to.throw(Error);
  });

  it('should throw an error when the location is invalid', function () {
    const location = new Location('A1');
    const piece = new Piece(location);

    expect(() => new Move(piece)).to.throw(Error);
    expect(() => new Move(piece, '')).to.throw(Error);
    expect(() => new Move(piece, piece)).to.throw(Error);
  });

  describe('.checkIfLegal', function () {
    it('should return false when the piece is already in the location', function () {
      const location = new Location('A1');
      const piece = new Piece(location);
      const move = new Move(piece, location);
      expect(move.checkIfLegal()).to.be.false;
    });

    it('should return false when another piece by the same player is already in the location', function () {
      const piece = new Piece(10);
    })
  });
});
