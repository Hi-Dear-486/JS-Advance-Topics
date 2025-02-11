import React from "react";

// call and apply both execute the function immediately, but call takes arguments separately, while apply takes them as an array.
// bind, on the other hand, does not execute immediately. Instead, it returns a new function with the this value set to the given object.
const functionMethods = () => {
  // 1️⃣ call()
  function greet(name) {
    console.log(`Hello ${name}, my name is ${this.name}`);
  }

  const person = { name: "zeeshan" };

  greet.call(person, "Ahmed");
  // Output: Hello Ahmed, my name is Ali

  //📌 Meaning: apply is similar to call, but you have to pass arguments inside an array.
  //   2️⃣ apply()
  greet.apply(person, ["Ahmed"]);
  // Output: Hello Ahmed, my name is zeeshan

  //   3️⃣ bind()
  //   This is a bit different from call and apply. It returns a new function that can be used late
  const newFunc = greet.bind(person);
  newFunc("Ahmed");
  // Output: Hello Ahmed, my name is zeeshan

  return <div>Function Methods</div>;
};

export default functionMethods;
