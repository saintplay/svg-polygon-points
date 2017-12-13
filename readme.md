# svg-polygon-points

> Tiny library to manipulate [SVG Polygon Points](https://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute)

## Install ##

    npm install --save svg-polygon-points

or

    yarn add svg-polygon-points


## Functions ##

- add –  WIP
- [`offset`](#offset) – Offset the polygon
- scale - WIP
- rotate - WIP
- [`startIn`](#startIn) – Draw a polygon like HTML canvas
- [`boundingBox`](#boundingBox) – Calculate the bouding box dimensions of a polygon


## Usage ##

### offset ###

```js
const offset = require('svg-polygon-points').offset;
// or
import { offset } from 'svg-polygon-points';

const points = "0,0 128,0 128,128 0,128"
offset(points, 100, 50)
//=> "100,50 228,50 228,178 100,178"
```

### startIn ###

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

### boundingBox ###

```js
const boundingBox = require('svg-polygon-points').boundingBox;
// or
import { boundingBox } from 'svg-polygon-points';

var points = "28,224 256,224 256,352 128,352"
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

## License ##

MIT © [Diego Jara](saintplay96@gmail.com)
