import Piece from './Piece';
import Location from './Location';

export default class Move {
  constructor(piece, location) {
    if (!(piece instanceof Piece)) throw new Error(`${piece} is not a Piece`);
    if (!(location instanceof Location)) throw new Error(`${location} is not a Location`);
    this.piece = piece;
    this.oldLocation = piece.location;
    this.newLocation = location;
    this.isLegal = this.checkIfLegal();
  }

  checkIfLegal() {
    return (
      this.oldLocation !== this.newLocation
    );
  }
}
