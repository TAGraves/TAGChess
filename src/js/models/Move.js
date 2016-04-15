import Piece from './Piece';
import Location from './Location';

/**
 * This class handles *moves*, the characteristic event of a turn in which a piece or pieces changes
 * location
 */
export default class Move {
  /**
   * Define a new move.
   *
   * @param {Piece} piece - the Piece to be moved (always a King in the case of a castle)
   * @param {Location} location - the Location to which the Piece is attempting to move.
   */
  constructor(piece, location) {
    if (typeof piece === 'undefined') throw new ReferenceError('piece is undefined');
    if (!(piece instanceof Piece)) throw new TypeError(`${piece} is not a Piece`);
    if (typeof location === 'undefined') throw new ReferenceError('location is undefined');
    if (!(location instanceof Location)) throw new TypeError(`${location} is not a Location`);
    this.piece = piece;
    this.oldLocation = piece.location;
    this.newLocation = location;
  }

  /**
   * Checks if the move can legally be done.
   *
   * @return {Boolean} True if the move is legal, false if not.
   */
  isLegal() {
    return (
      this.oldLocation !== this.newLocation
      && (
        !this.newLocation.occupant ||
        this.piece.owner !== this.newLocation.occupant.owner
      )
    );
  }
}
