import { BLACK, WHITE } from '../CONSTANTS';

/**
 * This class defines *players*, the competitors in a game of chess.
 */
export default class Player {
  /**
   * Create a player.
   *
   * @param {String} color - the color of pieces the player will have; 'WHITE' for white and
   *                         'BLACK' for BLACK
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
