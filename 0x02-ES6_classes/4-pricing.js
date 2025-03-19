import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw Error('TypeError: Amount must be a Number');
    }
    if (!(currency instanceof Currency)) {
      throw Error('TypeError: Currency must be Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw Error('TypeError: Amount must be a Number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw Error('TypeError: Currency must be Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate)
  }
}