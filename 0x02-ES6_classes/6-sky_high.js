import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') {
      throw Error('TypeError: floors must be a Number')
    }
    super(sqft);
    this._floors = floors;
  }
  get floors() {
    return this._floors;
  }
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`
  }
}