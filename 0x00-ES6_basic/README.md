
# 🌟 **0x00. ES6 Basics** 🌟

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-v12.11.x-green?style=for-the-badge&logo=node.js)
![Jest](https://img.shields.io/badge/Tested_with-Jest-red?style=for-the-badge&logo=jest)
![ESLint](https://img.shields.io/badge/Linted_with-ESLint-blue?style=for-the-badge&logo=eslint)

## 📜 **Description**
This project explores the latest features introduced in **ECMAScript 6 (ES6)**, such as constants, block-scoped variables, arrow functions, template literals, and more. The project will also utilize Node.js, Jest for testing, and ESLint for code linting.

## 🎯 **Learning Objectives**
By the end of this project, you should be able to:

- 💡 Explain **ES6** and its new features.
- 🔐 Understand **block-scoping** using `const` and `let`.
- 🚀 Use **arrow functions** and set **default parameters**.
- 🧵 Work with **rest and spread** syntax.
- ✨ Implement **string templating** using **template literals**.
- 🏗️ Create objects with **property shorthand**.
- 🔄 Use **iterators** and `for...of` loops.
- 📜 Write concise **ES6 method properties**.

## 💻 **Project Setup**

### 📋 **Requirements**
- OS: **Ubuntu 18.04 LTS**
- **Node.js v12.11.x**
- **npm v6.11.3**
- **Jest** and **ESLint** for testing and linting

### ⚙️ **Installation**

1. **Install Node.js 12.11.x**
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. **Verify the installation:**
   ```bash
   nodejs -v
   npm -v
   ```

3. **Install project dependencies:**
   ```bash
   npm install
   ```

### 🗂️ **Project Structure**

The project consists of multiple JavaScript files, each dedicated to a specific ES6 concept. Here are the tasks:

| Task Number | Task Description                                                                 | File                                      |
|-------------|-----------------------------------------------------------------------------------|-------------------------------------------|
| 🟢 **0**    | Use `const` and `let` properly                                                    | [0-constants.js](./0-constants.js)        |
| 🟢 **1**    | Fix hoisting issues using block-scoped variables                                   | [1-block-scoped.js](./1-block-scoped.js)  |
| 🟢 **2**    | Convert a function to an **arrow function**                                        | [2-arrow.js](./2-arrow.js)                |
| 🟢 **3**    | Use **default function parameters**                                                | [3-default-parameter.js](./3-default-parameter.js) |
| 🟢 **4**    | Use the **rest parameter** to handle multiple arguments                            | [4-rest-parameter.js](./4-rest-parameter.js) |
| 🟢 **5**    | Use the **spread operator** to concatenate arrays and strings                      | [5-spread-operator.js](./5-spread-operator.js) |
| 🟢 **6**    | Replace string concatenation with **template literals**                            | [6-string-interpolation.js](./6-string-interpolation.js) |
| 🟢 **7**    | Simplify object property value assignment using **property shorthand**             | [7-getBudgetObject.js](./7-getBudgetObject.js) |
| 🟢 **8**    | Use **computed property names** in an object                                       | [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js) |
| 🟢 **9**    | Use **method properties** in objects                                               | [9-getFullBudget.js](./9-getFullBudget.js) |
| 🟢 **10**   | Replace `for...in` loop with `for...of`                                            | [10-loops.js](./10-loops.js)              |
| 🟢 **11**   | Create an object with an array of employees                                        | [11-createEmployeesObject.js](./11-createEmployeesObject.js) |
| 🟢 **12**   | Create an object with **methods** using ES6 syntax                                  | [12-createReportObject.js](./12-createReportObject.js) |

## ⚡ **Execution**
To run a specific task, use the following command:

```bash
npm run dev <file-name>
```

For example, to run **task 0**:
```bash
npm run dev 0-main.js
```

## 🔍 **Linting and Testing**

- **Lint your code** with ESLint:
    ```bash
    npm run lint
    ```

- **Run Jest tests**:
    ```bash
    npm test
    ```

## 👨‍💻 **Author**
This project was developed as part of the **ALX SE Backend Curriculum**.

## 📝 **License**
This project is licensed under the **MIT License**.

