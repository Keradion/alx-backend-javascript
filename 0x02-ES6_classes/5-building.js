export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw Error('TypeError: Sqft must be a Number');
    }
    this._sqft = sqft;

    if (this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
