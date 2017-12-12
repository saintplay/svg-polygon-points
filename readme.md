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


## Usage ##

### offset

```js
const offset = require('svg-polygon-points').offset;
// or
import { offset } from 'svg-polygon-points';

const points = "0,0 128,0 128,128 0,128"
offset(points, 100, 50)
//=> "100,50 228,50 228,178 100,178"
```

## License ##

MIT © [Diego Jara](saintplay96@gmail.com)
