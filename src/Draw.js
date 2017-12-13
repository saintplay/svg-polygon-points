export default class Draw {
  constructor(coord) {
    this.coords = [];
    this.coords.push(coord);
  }

  get lastCoord() {
    return this.coords[this.coords.length - 1];
  }

  drawTo({ direction, length }) {
    const coord = Object.assign({}, this.lastCoord);

    switch (direction) {
      case 'left':
        coord.x -= length;
        break;

      case 'up':
        coord.y -= length;
        break;

      case 'right':
        coord.x += length;
        break;

      case 'down':
        coord.y += length;
        break;

      default:
        break;
    }

    this.coords.push(coord);
    return this;
  }

  toPoints() {
    const coordsArray = this.coords.map(c => `${c.x},${c.y}`);

    return coordsArray.join(' ');
  }
}
