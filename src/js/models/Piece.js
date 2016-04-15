import Location from './Location';
import Move from './Move';

/**
 * This class defines *pieces*, the principal component of a game of chess.
 */
export default class Piece {
  /**
   * Create a piece.
   *
   * @param {Location} location - the starting location for the piece.
   */
  constructor(location) {
    if (typeof location === 'undefined') throw new ReferenceError('location is undefined');
    if (!(location instanceof Location)) throw new TypeError(`${location} is not a Location`);
    this.location = location;
  }

  /**
   * Attempt to move the piece to a new location.
   *
   * @param {Location} location - the destination location for the piece.
   * @returns {Promise} a promise to be rejected if the move is illegal and resolved returning
   *                    itself if it is successful
   */
  moveTo(location) {
    const move = new Move(this, location);

    return new Promise((resolve, reject) => {
      if (!move.isLegal()) reject(new Error('Move was not legal'));
      this.location = location;
      resolve(this);
    });
  }
}
