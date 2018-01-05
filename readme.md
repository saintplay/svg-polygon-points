# svg-polygon-points

> Tiny library to manipulate [SVG Polygon Points](https://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute)

## Install ##

    npm install --save svg-polygon-points

or

    yarn add svg-polygon-points


## Functions ##

- add –  WIP
- [`Bounding Box`](#bounding-box) – Calculate the bouding box dimensions of a polygon
- [`Offset`](#offset) – Offset the polygon
- [`Rotate`](#rotate) - Rotates the polygon clockwise
- scale - WIP
- [`Start In`](#start-in) – Draw a polygon like HTML canvas
- [`From Geo JSON`](#from-geo-json) – Transform GeoJSON coords to SVG Polygon's points
- [`To Geo JSON`](#to-geo-json) – Returns the respective GeoJSON Array Coords


## Usage ##


### Bounding Box ###

`boundingBox(points)`  
Get the bounding box

#### {String} points - The polygon points to manipulate.

#### Returns {Object} a { left, top, right, bottom, width, height. center } Object

```js
const boundingBox = require('svg-polygon-points').boundingBox;
// or
import { boundingBox } from 'svg-polygon-points';

const points = "28,224 256,224 256,352 128,352"
boundingBox(points)
/*=> {
    left: 28,
    top: 224,
    right: 256,
    bottom: 352,
    width: 228,
    height: 128,
    center: {
      x: 192,
      y: 288
    }
  }
*/
```

### Offset ###

`offset(points, angle, horizontalOffset, verticalOffset)`  
Offsets the polygon points 

#### {String} points - The polygon points to manipulate.
#### {Number} horizontalOffset - The horizontal offset
#### {Number} verticalOffset - The horizontal offset

#### Returns {String} a polygons points string

```js
const offset = require('svg-polygon-points').offset;
// or
import { offset } from 'svg-polygon-points';

const points = "0,0 128,0 128,128 0,128"
offset(points, 100, 50)
//=> "100,50 228,50 228,178 100,178"
```

### Rotate ###

`rotate(points, angle, [center])`  
Rotates the polygon clockwise  

#### {String} points - The polygon points to manipulate.
#### {Number} angle - The angle degrees to rotate
#### {Number} center - An { x, y } coord, If not especified, center of the bounding box will be used

#### Returns {String} a polygons points string

```js
const rotate = require('svg-polygon-points').rotate;
// or
import { rotate } from 'svg-polygon-points';

const points = "0,0 48,0 48,64 96,64 96,128 0,128"
rotate(points, 90)
//=> "112,16 112,64 48,64 48,112 -16,112 -16,16"
```

### Start In ###

`startIn(coord)`  
Creates a Draw Object  

#### {Object} coord - A { x, y } Object

#### Returns {Draw} a Draw Object

#### Draw methods

- **drawTo({ direction, length })**
- **toPoints()**

```js
const startIn = require('svg-polygon-points').startIn;
// or
import { startIn } from 'svg-polygon-points';

const points = startIn({ x: 50, y: 50 })
  .drawTo({ direction: 'right', length: 150 })
  .drawTo({ direction: 'down', length: 150 })
  .drawTo({ direction: 'right', length: 150 })
  .drawTo({ direction: 'down', length: 150 })
  .drawTo({ direction: 'left', length: 150 })
  .toPoints()
//=> "50,50 200,50 200,200 350,200 350,350 50,350"
```

### From Geo JSON ###

`fromGeoJSON(points)`  
Transform GeoJSON coords to SVG Polygon's points

#### {Array} a GeoJSON Coordinates Array
#### returns {String} the polygon points.


```js
const fromGeoJSON = require('svg-polygon-points').fromGeoJSON;
// or
import { fromGeoJSON } from 'svg-polygon-points';

const coords = "[ [[100,50], [228,50], [228,178], [100,178]] ]"
fromGeoJSON(coords)
//=> "100,50 228,50 228,178 100,178"
```

### To Geo JSON ###

`toGeoJSON(points)`  
Returns the respective GeoJSON Array Coords  

#### {String} points - The polygon points to manipulate.

#### Returns {Array} a Coordinates Array

```js
const toGeoJSON = require('svg-polygon-points').toGeoJSON;
// or
import { toGeoJSON } from 'svg-polygon-points';

const points = "0,0 128,0 128,128 0,128"
toGeoJSON(points)
//=> [ [[100,50], [228,50], [228,178], [100,178]] ]
```

## License ##

MIT © [Diego Jara](saintplay96@gmail.com)
