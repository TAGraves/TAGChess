/**
 * This class defines *locations*, the squares on the board in which pieces (one per location)
 * reside.
 */
export default class Location {
  /**
   * Create a new location.
   *
   * @param {String} name - the algebraic notation for the location, e.g. A2 or D5
   */
  constructor(name) {
    if (typeof name === 'undefined') throw new ReferenceError('name is undefined');
    if (!name.match(/[A-H][1-8]/)) throw new Error(`Location name ${name} was invalid`);
    this.name = name;
    this.occupant = null;
  }
}
