import React from "react";

const Hoisting = () => {
  {
    /*example of Variable Hoisting */
  }
  console.log(Name);
  const Name = "Muhammad zeeshan";
  //   after Hoisting
  // const Name =  "Muhammad zeeshan"
  // console.log(Name)

  //   example of Function hoisting
  Student();
  function Student() {}
  // after Hoisting
  // function Student() {

  // }
  // Student()

  return (
    <div>
      <h2>
        Hoisting ka matlab hai ki JavaScript engine apne code ko execute karne
        se pehle sabhi variables aur functions ko uske containing scope ke top
        par le jata hai.
      </h2>
      <h2>Types of Hoisting</h2>
      <li>Variable Hoisting</li>
      <li>Function Hoisting</li>
    </div>
  );
};

export default Hoisting;
