/**
 * @name
 * @summary Offsets the polygon points
 *
 * @description
 * Offsets the polygon points
 *
 * @param {String} points - The polygon points to manipulate. See [points]{@link https://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute}
 * @param {Number} horizontalOffset - The horizontal offset
 * @param {Number} verticalOffset - The horizontal offset
 * @returns {String} a polygons points string. See [points]{@link https://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute}
 *
 * @example
 * var points = "0,0 128,0 128,128 0,128"
 * offset(points, 100, 50)
 * //=> "100,50 228,50 228,178 100,178"
 */
export default function offset(points, horizontalOffset = 0, verticalOffset = 0) {
  if (!points) {
    return;
  }

  const pointsArray = points.split(' ');
  const coordsArray = pointsArray.map(p => {
    const coord = p.split(',');

    return `${Number(coord[0]) + horizontalOffset},${Number(coord[1]) + verticalOffset}`;
  });

  return coordsArray.join(' ');
}
