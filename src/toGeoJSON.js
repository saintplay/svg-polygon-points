/**
 * @name
 * @summary Returns the respective GeoJSON Array Coords
 *
 * @description
 * Returns the respective GeoJSON Array Coords
 *
 * @param {String} points - The polygon points to manipulate. See [points]{@link https://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute}
 * @returns {Array} a Coordinates Array. See {@link http://geojson.org/geojson-spec.html#id4}
 *
 * @example
 * var points = "0,0 128,0 128,128 0,128"
 * toGeoJSON(points, 100, 50)
 * //=> "[ [[100,50], [228,50], [228,178], [100,178]] ]"
 */
export default function toGeoJSON(points) {
  if (!points) {
    return;
  }
  const polygonCoords = points.split(' ').map(p => {
    const [x, y] = p.split(',');

    return [Number(x), Number(y)];
  });

  return [polygonCoords];
}
