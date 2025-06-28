# 0x06. Unittests in JS

**Back-end JavaScript | Node.js | ES6 | Mocha | Chai | Sinon**

## Table of Contents

* [Project Overview](#project-overview)
* [Learning Objectives](#learning-objectives)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Author](#author)

---

## Project Overview

This project focuses on the fundamentals and best practices of **unit testing in JavaScript** using popular tools like **Mocha**, **Chai**, and **Sinon**. It covers writing both unit and integration tests for JavaScript/Node.js applications, working with assertion libraries, and using spies, stubs, and hooks for robust and maintainable tests.

---

## Learning Objectives

By completing this project, you will be able to:

* Set up and use **Mocha** to write test suites.
* Use assertion libraries such as **Node assert** and **Chai** (`expect` and `should` styles).
* Organize and present comprehensive test suites.
* Understand and implement **spies** and **stubs** with **Sinon**.
* Utilize **Mocha hooks** for efficient test management.
* Test asynchronous code and handle promises in tests.
* Write integration tests for Node.js Express APIs.
* Use advanced test techniques like skipping tests and deep equality checks.

---

## Project Structure

```plaintext
0x06-unittests_in_js/
├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── utils.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── 5-payment.js
├── 5-payment.test.js
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── 8-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── 9-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── 10-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── package.json
└── README.md
```

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/alx-backend-javascript.git
   cd 0x06-unittests_in_js
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   * Project is designed for **Node.js 12.x** on Ubuntu 18.04.
   * Main dependencies: `mocha`, `chai`, `sinon`, `express`, `request`.

---

## Usage

* Run all tests:

  ```bash
  npm test
  ```
* Run a specific test file (e.g., for task 0):

  ```bash
  npm test 0-calcul.test.js
  ```
* Start the API server (within the appropriate API folder):

  ```bash
  cd 8-api
  node api.js
  ```

---

## Testing

* **Unit tests:** Located in `*.test.js` files for each module. Covers arithmetic operations, payment processing, and more.
* **Integration tests:** Located in `8-api`, `9-api`, and `10-api` folders, testing REST API endpoints using Express.
* **Advanced techniques:** Includes use of spies, stubs, hooks, async tests, and skipping tests.

### Example Test Case

```js
const calculateNumber = require('./0-calcul.js');
console.log(calculateNumber(1.4, 4.5)); // Output: 6
```

### API Endpoints (10-api)

* `GET /` – Welcome to the payment system
* `GET /cart/:id` – Payment methods for cart \:id (only numeric ids allowed)
* `GET /available_payments` – Returns available payment methods (JSON)
* `POST /login` – Returns personalized welcome message

---

## Author

* **Addis Ababa Intranet / ALX Backend JavaScript**
* [Project Link](https://savanna.alxafrica.com/projects/1244)

---

## Resources

* [Mocha Documentation](https://mochajs.org/)
* [Chai Assertion Library](https://www.chaijs.com/)
* [Sinon.js Spies, Stubs, and Mocks](https://sinonjs.org/)

---

**Happy Testing!**

---

