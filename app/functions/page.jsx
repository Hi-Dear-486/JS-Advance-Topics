import React from "react";

const Functions = () => {
  // example of function expression
  function Student() {
    console.log("Hi i am student of tuf university");
  }
  Student();
  //   example of Anonumous function
  //   wo function jis ka koi name na ho that is called anonumous function
  const student2 = (one, two) => {
    return one + two;
  };
  student2(2, 3);

  //example of arrow function

  //   basic arrow function
  const arrowfun = (a, b) => {
    console.log(`${a} : ${b}`);
  };
  arrowfun(5, 10);

  const arrowfunc = (a, b) => console.log(`${a}, author: ${b}`);
  arrowfunc(
    "agr block of scope mein aik line hy then hum arrow function ki brackets ko remove kr sekhty hein",
    "arslan"
  );

  //   agr aik parameter hy then we can remove paranthisis
  const arrowfunct = (tufstudent) => console.log(`${tufstudent}`);
  arrowfunct("omiad");
  return (
    <div>
      <h2>Types of Functions</h2>
      <li>Function Expression</li>
      <li>Anonumous Function</li>
      <li>Arrow Function</li>
    </div>
  );
};

export default Functions;
