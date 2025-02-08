


## **🔥 JavaScript Advanced Concepts**
```md
# 🚀 JavaScript Advanced Concepts

This repository contains **in-depth explanations** and **code examples** of advanced JavaScript topics.
 Whether you're preparing for interviews or enhancing your JavaScript skills, this guide will help
 you understand **core concepts** deeply.  

---

## 📌 Table of Contents  
1. [Execution Context & Call Stack](#-execution-context--call-stack)  
2. [Hoisting](#-hoisting)  
3. [Closures](#-closures)  
4. [Prototype & Prototypal Inheritance](#-prototype--prototypal-inheritance)  
5. [Event Loop & Asynchronous JavaScript](#-event-loop--asynchronous-javascript)  
6. [Promises & Async/Await](#-promises--asyncawait)  
7. [Functional Programming](#-functional-programming)  
8. [Modules (ES6+)](#-modules-es6)  
9. [Memory Management & Garbage Collection](#-memory-management--garbage-collection)  

---

## 📖 **Execution Context & Call Stack**  
When JavaScript code runs, it executes inside an **execution context**. The **call stack** maintains the order of execution.

```js
function first() {
  console.log("First Function");
}

function second() {
  first();
  console.log("Second Function");
}

second();
```
🔹 **Output:**  
```
First Function
Second Function
```
📌 **Concepts Covered:**  
- Global Execution Context  
- Functional Execution Context  
- Call Stack  

---

## 🔥 **Hoisting**  
Hoisting allows function and variable declarations to be moved to the top of their scope before execution.

```js
console.log(myVar); // undefined
var myVar = 10;

hello(); // Works! Because of hoisting.
function hello() {
  console.log("Hello, world!");
}
```
📌 **Concepts Covered:**  
- Function Hoisting  
- Variable Hoisting  
- `var`, `let`, and `const` hoisting differences  

---

## 🔒 **Closures**  
A **closure** is when a function remembers the variables from its outer scope even after the outer function has finished executing.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```
📌 **Concepts Covered:**  
- Lexical Scope  
- Practical Use Cases (e.g., Data Hiding, Function Factories)  

---

## 🧬 **Prototype & Prototypal Inheritance**  
Every JavaScript object has a **prototype**, allowing it to inherit properties and methods.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet(); // Hello, my name is John
```
📌 **Concepts Covered:**  
- `__proto__` vs `prototype`  
- Prototype Chain  

---

## 🔄 **Event Loop & Asynchronous JavaScript**  
JavaScript uses an **event loop** to handle asynchronous operations.

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");
```
🔹 **Output:**  
```
Start
End
Inside setTimeout
```
📌 **Concepts Covered:**  
- Call Stack  
- Web APIs  
- Callback Queue  
- Microtasks (`Promises`) vs Macrotasks (`setTimeout`)  

---

## 🌟 **Promises & Async/Await**  
JavaScript provides `Promises` and `async/await` for handling asynchronous operations.

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData(); // Data fetched! (after 2 seconds)
```
📌 **Concepts Covered:**  
- `Promise` States  
- `async` & `await`  
- Error Handling with `.catch()`  

---

## 🎭 **Functional Programming**  
JavaScript supports **functional programming paradigms** like **higher-order functions** and **immutability**.

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```
📌 **Concepts Covered:**  
- Pure Functions  
- Higher-Order Functions (`map`, `filter`, `reduce`)  
- Immutability  

---

## 📦 **Modules (ES6+)**  
JavaScript uses **modules** to organize and share code.

**File: `math.js`**
```js
export function add(a, b) {
  return a + b;
}
```
**File: `app.js`**
```js
import { add } from "./math.js";
console.log(add(2, 3)); // 5
```
📌 **Concepts Covered:**  
- `import` & `export`  
- Named vs Default Exports  

---

## 🧹 **Memory Management & Garbage Collection**  
JavaScript uses **Garbage Collection** to remove unused memory.

```js
let obj = { name: "John" };
obj = null; // Object is now eligible for garbage collection.
```
📌 **Concepts Covered:**  
- Reference Counting  
- Mark & Sweep Algorithm  

---

## 📚 **Conclusion**  
This guide covers **essential JavaScript advanced topics** with practical examples.  
Feel free to **contribute, suggest edits, or star 🌟 this repository** if you find it useful! 🚀  

---

# 🌍 **Contribute**  
📌 If you want to contribute, fork this repository and submit a pull request.  

---

# 📧 **Contact**  
If you have any questions, feel free to reach out! 😊  
📩 Email: fullstackdeveloper486@gmail.com 
🔗 LinkedIn: [Your Profile](https://www.linkedin.com/in/muhammad-zeeshan-87b01a333/)  
---

**⭐️ If you found this helpful, please give this repository a star! ⭐️**
```

---
