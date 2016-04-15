import { BLACK, WHITE } from '../CONSTANTS';

/**
 * This class defines *players*, the competitors in a game of chess.
 */
export default class Player {
  /**
   * Create a player.
   *
   * @param {number} color - the color of pieces the player will have; 0 for white and 1 for black
   */
  constructor(color) {
    if (typeof color === 'undefined') throw new ReferenceError('color is undefined');
    if (color !== BLACK && color !== WHITE) {
      throw new TypeError(`${color} is not a valid player color`);
    }
    this.color = color;
  }
}

export { BLACK, WHITE } from '../CONSTANTS';
