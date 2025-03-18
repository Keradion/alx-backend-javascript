export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw Error('TypeError: sqft must be a Number')
    }
    this._sqft = sqft
  }
  get sqft(){
    return this._sqft
  }
}