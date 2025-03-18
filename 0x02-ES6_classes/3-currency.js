export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw Error('TypeError: Code must be a string');
    }
    if (typeof name !== 'string') {
      throw Error('TypeError: Name must be a string');
    }
    this._code = code
    this._name = name 
  }
  get code() {
    return this._code
  }
  set code(code) {
    if (typeof code !== 'string') {
      throw Error('TypeError: Code must be a string.');
    }
    this._code = code
  }
  get name() {
    return this._name
  }
  set name(name) {
    if (typeof name !== 'string') {
      throw Error('TypeErro: Name must be a string');
    }
  }
  
  displayFullCurrency() {
    return `${this._name} ${(this._code)}`
  }
}
