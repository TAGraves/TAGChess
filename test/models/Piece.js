/*eslint-disable */
import Piece from '../../src/js/models/Piece.js';
const expect = require('chai').expect;

describe('Piece', function () {
  describe('#moveTo', function () {
    it('should return false when the move is illegal', function () {
      const piece = new Piece();
      expect(piece.moveTo()).to.be.false;
    });

    it('should return the piece when the move is legal', function () {
      const piece = new Piece();
      expect(piece.moveTo(10)).to.be.an.instanceof(Piece);
    });

    it('should be in the new location when the move is legal', function () {
      const piece = new Piece();
      expect(piece.moveTo(10).location).to.equal(10);
      expect(piece.moveTo(18).location).to.equal(18);
    })
  });
});
