/**
 * @name
 * @summary Transform GeoJSON coords to SVG Polygon's points
 *
 * @description
 * Transform GeoJSON coords to SVG Polygon's points
 *
 * @param {Array} a Coordinates Array. See {@link http://geojson.org/geojson-spec.html#id4}
 * @returns {String} the polygon points. See [points]{@link https://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute}
 *
 * @example
 * var coords = "[ [[100,50], [228,50], [228,178], [100,178]] ]"
 * fromGeoJSON(coords)
 * //=> "100,50 228,50 228,178 100,178"
 */
export default function toGeoJSON(coords) {
  if (!coords) {
    return;
  }
  return JSON.stringify(coords).match(/\d+,\d+/g).join(' ');
}
