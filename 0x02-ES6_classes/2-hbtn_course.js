export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw Error('TypeError: Name must be a string');
    }
    if (typeof length !== 'number') {
      throw Error('TypeError: Length must be a number');
    }
    if (!(Array.isArray(students))) {
      throw Error('TypeError: Students must be array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw Error('TypeError: Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw Error('TypeError: Length must be a Number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!(Array.isArray(students))) {
      throw Error('TypeError: Students must be an array of strings');
    }
    this._students = students;
  }
}
