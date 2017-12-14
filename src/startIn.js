import Draw from './Draw';

/**
 * @name
 * @summary Creates a Draw Object
 *
 * @description
 * Creates a Draw Object
 *
 * @param {Object} coord - A { x, y } Object
 * @returns {Draw} a Draw Object
 *
 * @example
 * var coord = "{ x: 0, y: 0 }"
 * startIn(coord)
 * //=> {Draw Object}
 */
export default function startIn(coord) {
  if (!coord) {
    return;
  }

  return new Draw(coord);
}
