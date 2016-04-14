export default class Piece {
  constructor(location) {
    this.location = location;
  }

  moveTo(location) {
    if (!this.moveIsLegal(location)) return false;
    this.location = location;
    return this;
  }

  moveIsLegal(move) {
    return !!move;
  }
}
