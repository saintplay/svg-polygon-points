import boundingBox from './boundingBox';

/**
 * @name
 * @summary Rotates the polygon clockwise
 *
 * @description
 * Rotates the polygon clockwise
 *
 * @param {String} points - The polygon points to manipulate. See [points]{@link https://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute}
 * @param {Number} angle - The angle degrees to rotate
 * @param {Number} center - An { x, y } coord, If not especified, center of the bounding box will be used
 * @returns {String} a polygons points string. See [points]{@link https://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute}
 *
 * @example
 * var points = "0,0 48,0 48,64 96,64 96,128 0,128"
 * rotate(points, 90)
 * //=> "112,16 112,64 48,64 48,112 -16,112 -16,16"
 */
export default function rotate(points, angle = 0, center = {}) {
  if (!points) {
    return;
  }

  let centerOfRotation = center;

  if (!center.x || !center.y) {
    centerOfRotation = boundingBox(points).center;
  }

  const pointsArray = points.split(' ');
  const radians = (Math.PI / 180) * angle;
  const cx = centerOfRotation.x;
  const cy = centerOfRotation.y;

  const rotatedCoords = pointsArray.map(coord => {
    const pair = coord.split(',');
    const x = Number(pair[0]);
    const y = Number(pair[1]);
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
    const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;

    return `${nx},${ny}`;
  });

  return rotatedCoords.join(' ');
}
