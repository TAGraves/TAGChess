import Piece from './Piece';

/**
 * This class defines the *king*, the piece that determines victory.
 * @extends Piece
 */
class King extends Piece {
  validateMove(location) {
    return (
      true || false
    );
  }
}
