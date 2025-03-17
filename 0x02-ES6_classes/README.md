# 🌟 Project: 0x02. ES6 Classes 🌟

## 🎯 Description
This project focuses on understanding and implementing **Object-Oriented Programming (OOP)** concepts in **JavaScript** using **ES6 classes**. The project covers key topics such as **defining classes, adding methods, extending classes, static methods, and metaprogramming techniques**.

## 🚀 How This Project Can Help You
By working on this project, you will:
- **Gain a solid understanding of OOP in JavaScript** by learning how to define and work with classes.
- **Improve your coding efficiency** by using ES6 features such as getters, setters, and static methods.
- **Develop better software architecture** by practicing class inheritance and encapsulation.
- **Enhance problem-solving skills** by implementing abstract classes and metaprogramming techniques.
- **Prepare for technical interviews** with real-world applications of ES6 classes and design patterns.
- **Follow industry best practices** by using testing (Jest) and linting (ESLint) to ensure clean and maintainable code.

## 📌 Learning Objectives
By the end of this project, you should be able to:
- ✅ Define and use **JavaScript classes**.
- ✅ Add **instance and static methods** to a class.
- ✅ Extend a class from another.
- ✅ Use **getters and setters**.
- ✅ Implement **metaprogramming techniques** with Symbols.

## ⚙️ Requirements
- 🖥️ All files will be executed on **Ubuntu 18.04 LTS** using **Node.js 12.11.x**.
- ✏️ Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- 📝 All files should end with a **new line**.
- 🔖 Code should use the **.js extension**.
- 🧪 Jest will be used for testing (`npm run test`).
- 🔍 Code should be checked using **ESLint** (`npm run lint`).
- ✅ Run full tests using `npm run full-test`.

## 🛠️ Setup
### 📌 Install Node.js
```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
### 🔍 Verify Installation
```sh
nodejs -v  # should return v12.11.1
npm -v     # should return 6.11.3
```
### 📦 Install Dependencies
```sh
npm install
```

## 📂 Project Structure
```
.
├── 0x02-ES6_classes
│   ├── 0-classroom.js
│   ├── 1-make_classrooms.js
│   ├── 2-hbtn_course.js
│   ├── 3-currency.js
│   ├── 4-pricing.js
│   ├── 5-building.js
│   ├── 6-sky_high.js
│   ├── 7-airport.js
│   ├── 8-hbtn_class.js
│   ├── 9-hoisting.js
│   ├── 10-car.js
│   ├── 100-evcar.js (Advanced)
│   ├── package.json
│   ├── babel.config.js
│   ├── .eslintrc.js
│   ├── README.md
```

## 📋 Tasks Overview
1. **🏫 ClassRoom** - Create a class with a single attribute.
2. **🏠 Initialize Rooms** - Instantiate multiple classroom objects.
3. **📚 ALXCourse** - Implement getters and setters.
4. **💲 Currency Class** - Create a class to handle currency display.
5. **💰 Pricing** - Extend Currency to manage pricing.
6. **🏢 Building (Abstract Class)** - Implement an abstract base class.
7. **🌇 SkyHighBuilding** - Inherit from Building and override methods.
8. **✈️ Airport** - Implement a class with a custom string representation.
9. **🏛️ ALXClass** - Implement type conversion using `Symbol`.
10. **🐞 Hoisting Fix** - Debug JavaScript hoisting issues.
11. **🚗 Car Class** - Implement cloning methods.
12. **⚡ EVCar (Advanced)** - Extend Car with privacy features.

## 🏃 Running Tests
To run all tests:
```sh
npm test
```
To run linting:
```sh
npm run lint
```
To run both:
```sh
npm run full-test
```

## ✍️ Author
**Daniel Berihun**

## 📜 License
This project is licensed under the **MIT License**.

