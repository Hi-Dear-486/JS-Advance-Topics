import React from "react";

const Iterables = () => {
  // iterables:  On which we can apply  for of loop
  // ✅Array
  // ✅String

  // array are the most common example of iterables

  const arr = [1, 2, 3];

  for (const elem of arr) {
    console.log("🚀 ~ elem:", elem);
  }

  // ✅Strings are iterables, and you can apply  for of loop over each character
  const name = "Zeeshan";

  for (const elem of name) {
    console.log("🚀 ~ elem:", elem);
  }

  // Arguments Object
  // In legacy code
  // ✅The arguments object is iterable in non-arrow functions:
  function demo() {
    for (const elem of arguments) {
      console.log("🚀 ~ demo ~ elem:", elem);
    }
  }
  demo(1, 2, 3, 4, 5);

  // Recommended
  // In Modern JavaScript ...args (rest parameters)  🚀
  const test = (...args) => {
    console.log(args);
  };
  test(1, 2, 3);

  // Sets
  // ✅Sets are iterables that store unique values:
  const mySet = new Set([1, 2, 3, 3]); // Duplicate 3 is ignored

  // Using for...of
  for (const value of mySet) {
    console.log(value);
  }

  // Map
  // ✅its useful for Large datasets or dynamic keys.
  const sessionData = new Map();
  sessionData.set(123, { name: "ismail", age: 23 });
  console.log(sessionData.get(123));

  // 🔹 When to Use Set & Map?
  // ✅ Use Set when you need a list of unique values.
  // ✅ Use Map when you need key-value pairs with fast lookup

  return <div>Iterables & Set & Map</div>;
};

export default Iterables;
