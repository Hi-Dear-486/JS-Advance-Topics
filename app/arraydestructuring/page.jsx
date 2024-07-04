import React from "react";

const Array = () => {
  const arr = [
    "shafan",
    "rayyan",
    "saqib",
    [1, 2, 3, 4],
    "alveena",
    "amna",
    "arnub",
  ];
  //cloning
  const arr2 = [...arr];
  //   push value in arr
  arr.push("haider");

  const [
    student1,
    student2,
    student3,
    [num1, num2, num3, num4],
    ...classfellows
  ] = arr;

  const [first, , third] = arr2;
  console.log(arr);
  console.log(arr2);
  console.log(student1);
  console.log(num4);
  console.log(classfellows);
  console.log(third);

  return (
    <div>
      <h2>Array Destructring</h2>
      <p>array ki hr values ko effient way mein rakh sekhty hein</p>
    </div>
  );
};

export default Array;
