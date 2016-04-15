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

  /**
   * Calculate the horizontal distance from this location to another one.
   *
   * @param {Location} location - the location from which to calculate the distance.
   * @return {Number} The number of ranks from this location to the other.
   */
  horizontalDistanceTo(location) {
    if (typeof location === 'undefined') throw new ReferenceError('location is undefined');
    if (!(location instanceof Location)) throw new TypeError(`${location} is not a Location`);
    const here = this.makeNameUsable();
    const there = location.makeNameUsable();
    return Math.abs(here[1] - there[1]);
  }

  /**
   * Calculate the vertical distance from this location to another one.
   *
   * @param {Location} location - the location from which to calculate the distance.
   * @return {Number} The number of files from this location to the other.
   */
  verticalDistanceTo(location) {
    if (typeof location === 'undefined') throw new ReferenceError('location is undefined');
    if (!(location instanceof Location)) throw new TypeError(`${location} is not a Location`);
    const here = this.makeNameUsable();
    const there = location.makeNameUsable();
    return Math.abs(here[0] - there[0]);
  }

  /**
   * Calculate the distance from this location to another one.
   *
   * @param {Location} location - the location from which to calculate the distance.
   * @return {Number} The calculated distance. If both locations are on the same file, then the
   *                  distance is the number of ranks from this location to the destination, and
   *                  vice versa when they are on the same rank. If the locations have different
   *                  files and ranks, then the distance is the number of ranks from this location
   *                  to the destination plus the number of files, divided by two.
   */
  distanceTo(location) {
    if (typeof location === 'undefined') throw new ReferenceError('location is undefined');
    if (!(location instanceof Location)) throw new TypeError(`${location} is not a Location`);
    const here = this.makeNameUsable();
    const there = location.makeNameUsable();
    const vertical = this.verticalDistanceTo(location);
    const horizontal = this.horizontalDistanceTo(location);
    if (here[1] === there[1]) {
      return vertical;
    } else if (here[0] === there[0]) {
      return horizontal;
    }
    return (vertical + horizontal) / 2;
  }

  /**
   * Check if this location is precisely diagonal to another location.
   *
   * @param {Location} location - the location to check diagonality to
   * @return {Boolean} True if the locations are diagonal, false if not.
   */
  isDiagonalTo(location) {
    if (typeof location === 'undefined') throw new ReferenceError('location is undefined');
    if (!(location instanceof Location)) throw new TypeError(`${location} is not a Location`);
    const vertical = this.verticalDistanceTo(location);
    const horizontal = this.horizontalDistanceTo(location);
    return (
      vertical !== 0
      && vertical === horizontal // no need to check if h is zero, since then v !== h
    );
  }

  /**
   * Convert the name of a location into an array of two digits from 1-8.
   *
   * @return {Array} An array of digits from 1-8. [0] is vertical; [1] is horizontal.
   */
  makeNameUsable() {
    const [vertical, horizontal] = this.name;
    // 0 is in here so A = 1 and not 0, etc.
    return ['0ABCDEFGH'.indexOf(vertical), parseInt(horizontal, 10)];
  }
}
