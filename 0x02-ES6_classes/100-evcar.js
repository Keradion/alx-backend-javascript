import Car from './10-car.js';

class EvCar extends Car{
  constructor(brand, motor, color, range) {
    super(brand, motor, color)
    this._range = range;
  }
  static get [Symbol.species]() {
    return Car;
  }
}

export default EvCar;