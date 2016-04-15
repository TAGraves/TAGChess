/*eslint-disable */
import Piece from '../../src/js/models/Piece';
import Location from '../../src/js/models/Location';

describe('Piece', function () {
  it('should throw a ReferenceError when the location is missing or undefined', function () {
    expect(() => new Piece()).to.throw(ReferenceError);
    expect(() => new Piece(undefined)).to.throw(ReferenceError);
  });

  it('should throw a TypeError when the location is not an instance of Location', function () {
    expect(() => new Piece('')).to.throw(TypeError);
    expect(() => new Piece(10)).to.throw(TypeError);
    expect(() => new Piece([])).to.throw(TypeError);
    expect(() => new Piece({})).to.throw(TypeError);
    expect(() => new Piece('A1')).to.throw(TypeError);
  });

  describe('#moveTo', function () {
    it('should be rejected when the move is illegal', function (done) {
      const location = new Location('A1');
      const piece = new Piece(location);
      expect(piece.moveTo(location)).to.eventually.be.rejectedWith(Error).notify(done);
    });

    it('should return the piece when the move is legal', function (done) {
      const location = new Location('A1');
      const endLocation = new Location('A2');
      const piece = new Piece(location);
      expect(piece.moveTo(endLocation)).to.eventually.deep.equal(piece).notify(done);
    });

    it('should be in the new location when the move is legal', function (done) {
      const location = new Location('A1');
      const endLocation = new Location('A2');
      const piece = new Piece(location);
      expect(piece.moveTo(endLocation)).to.eventually.have.property('location', endLocation).notify(done);
    })
  });
});
