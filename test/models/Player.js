/*eslint-disable */
import Player, { BLACK, WHITE } from '../../src/js/models/Player.js';

describe('Player', function () {
  it('should throw a ReferenceError when the color argument is missing or undefined', function () {
    expect(() => new Player()).to.throw(ReferenceError);
    expect(() => new Player(undefined)).to.throw(ReferenceError);
  });

  it('should throw a TypeError when the color argument is not a valid color', function () {
    expect(() => new Player({})).to.throw(TypeError);
    expect(() => new Player([])).to.throw(TypeError);
    expect(() => new Player('')).to.throw(TypeError);
    expect(() => new Player(2)).to.throw(TypeError);
  });

  it('should allow color to be WHITE or BLACK', function () {
    expect(new Player(WHITE)).to.be.ok;
    expect(new Player(BLACK)).to.be.ok;
  });

  it('should have its color property be set to its color', function () {
    expect(new Player(WHITE)).to.have.property('color', WHITE);
    expect(new Player(BLACK)).to.have.property('color', BLACK);
  });

});
