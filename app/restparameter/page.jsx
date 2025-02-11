import React from "react";

// Rest Parameter
// 👉 Rest parameter is used when we need to handle any number of arguments without defining separate parameters.
// 👉 It converts the arguments into an array.
// 👉 It can be used anywhere, such as in functions, array destructuring, etc.
function Restparameter(...rest) {
  rest.map((values) => {
    const { name, age } = values;
    console.log(name, age);
  });
}

Restparameter(
  { name: "zeeshan", age: 22 },
  { name: "ali", age: 23 },
  { name: "haider", age: 24 }
);
const RestParameter = () => {
  return (
    <div>
      <h3>Rest Parameter</h3>
    </div>
  );
};

export default RestParameter;
