import React from "react";

const Loop = () => {
  // Types of  iterable object
  //   arrays, string, map, set

  // example of for of loop
  const arr = [1, 2, 3, 4, 5];
  //   arr is iteraable object
  // values is iterator
  for (const values of arr) {
    console.log(values);
  }

  //   example of foreach() method
  arr.forEach((curentvalues, index) => {
    console.log(`${curentvalues} or ${index}`);
  });

  //   example of map() method
  arr.map((values, index) => {
    return console.log(`${values} or ${index}`);
  });

  //   example of for in loop
  const obj = {
    name: "zeeshan",
    age: 22,
  };

  //   Dynamic Property Access: Allows dynamic access to object properties using bracket notation (object[key])
  for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
  return (
    <div>
      <h2>Loops</h2>
      <h2>Defference Between iterable object or iterator</h2>
      {/* jis pr hum ny loop chalani hy is called iterable object */}
      {/* loop values save is called iterator*/}
      <h2>for of loop:</h2>
      <li>
        for...of loop JavaScript mein ek iteration construct hai jo iterable
        objects (jaise ki arrays, strings, Map, Set, etc.) ke upar iterate karne
        ke liye use hota hai. for...of loop is a powerful and versatile
        iteration construct in JavaScript
      </li>
      <h2>foreach method: JavaScript mein forEach() ek array method hai</h2>
      <h2>map method:JavaScript mein map() ek array method hai</h2>
      <h2>
        for in loop: JavaScript mein forin loop object ky liay use krtein hein
      </h2>
    </div>
  );
};

export default Loop;
