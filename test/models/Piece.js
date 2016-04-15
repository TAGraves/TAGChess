/*eslint-disable */
import Piece from '../../src/js/models/Piece';
import Location from '../../src/js/models/Location';
import Player, { BLACK } from '../../src/js/models/Player';

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

  it('should throw a ReferenceError when the owner is missing or undefined', function () {
    const location = new Location('A1');
    expect(() => new Piece(location)).to.throw(ReferenceError);
    expect(() => new Piece(location, undefined)).to.throw(ReferenceError);
  });

  it('should throw a TypeError when the owner is not an instance of Player', function () {
    const location = new Location('A1');
    expect(() => new Piece(location, '')).to.throw(TypeError);
    expect(() => new Piece(location, 10)).to.throw(TypeError);
    expect(() => new Piece(location, [])).to.throw(TypeError);
    expect(() => new Piece(location, {})).to.throw(TypeError);
  });

  it('should set its location\'s occupant to itself', function () {
    const location = new Location('A1');
    const player = new Player(BLACK);
    const piece = new Piece(location, player);
    expect(location.occupant).to.deep.equal(piece);
  });

  describe('#moveTo', function () {
    it('should be rejected when the move is illegal', function (done) {
      const location = new Location('A1');
      const player = new Player(BLACK);
      const piece = new Piece(location, player);
      expect(piece.moveTo(location)).to.eventually.be.rejectedWith(Error).notify(done);
    });

    it('should return the piece when the move is legal', function (done) {
      const location = new Location('A1');
      const endLocation = new Location('A2');
      const player = new Player(BLACK);
      const piece = new Piece(location, player);
      piece.validateMove = () => true; // since otherwise an uninherited piece cannot move
      expect(piece.moveTo(endLocation)).to.eventually.deep.equal(piece).notify(done);
    });

    it('should be in the new location when the move is legal', function (done) {
      const location = new Location('A1');
      const endLocation = new Location('A2');
      const player = new Player(BLACK);
      const piece = new Piece(location, player);
      piece.validateMove = () => true; // since otherwise an uninherited piece cannot move
      expect(piece.moveTo(endLocation)).to.eventually.have.property('location', endLocation).notify(done);
    })
  });
});
