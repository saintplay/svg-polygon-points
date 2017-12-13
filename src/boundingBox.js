/**
 * @name
 * @summary Get the bounding box
 *
 * @description
 * Get the bounding box
 *
 * @param {String} points - The polygon points to manipulate. See [points]{@link https://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute}
 * @returns {Object} a { left, top, right, bottom, width, height. center } Object
 *
 * @example
 * var points = "28,224 256,224 256,352 128,352"
 * boundingBox(points)
 * //=> {left: 28, top: 224, right: 256, bottom: 352, width: 228, height: 128, center: { x: 192 , y: 288 }}
 */
export default function boudingBox(points) {
  if (!points) {
    return;
  }

  let minX, maxX, minY, maxY;

  const pointsArray = points.split(' ');

  for (let i = 0; i < pointsArray.length; i++) {
    const pair = pointsArray[i].split(',');
    const x = Number(pair[0]);
    const y = Number(pair[1]);

    if ((!minX && minX !== 0) || x < minX) minX = x;
    if ((!maxX && maxX !== 0) || x > maxX) maxX = x;
    if ((!minY && minY !== 0) || y < minY) minY = y;
    if ((!maxY && maxY !== 0) || y > maxY) maxY = y;
  }

  return {
    left: minX,
    top: minY,
    right: maxX,
    bottom: maxY,
    width: Number(maxX) - Number(minX),
    height: Number(maxY) - Number(minY),
    center: {
      x: (Number(minX) + Number(maxX)) / 2,
      y: (Number(minY) + Number(maxY)) / 2
    }
  };
}
