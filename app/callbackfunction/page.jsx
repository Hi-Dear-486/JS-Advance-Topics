import React from "react";

// A callback function is simply a function passed as an argument to another function. It helps in handling asynchronous operations and improves code modularity.
const callbackFun = () => {
  // Basic Callback Function
  function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Executing the callback function
  }

  function sayGoodbye() {
    console.log("Goodbye!");
  }

  greet("Ali", sayGoodbye);

  //   Example 2: Callback in Asynchronous Code
  setTimeout(function () {
    console.log("This message appears after 2 seconds.");
  }, 2000);

  // Example 3: Callback in Array Methods
  let numbers = [1, 2, 3, 4, 5];

  numbers.forEach(function (num) {
    console.log(num * 2);
  });
  return <div>Call Back Function</div>;
};

export default callbackFun;
