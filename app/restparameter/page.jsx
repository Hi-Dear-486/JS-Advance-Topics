import React from "react";

// Rest Parameter
// Yahan ...args ek rest parameter hai, jo function ke arguments ko ek array mein collect karta hai. Iska matlab hai ki function ko kitne bhi arguments pass kiye jaa sakte hain, aur wo sabhi args array ke roop mein available hote hain.
// Note:
// Kuch important points rest parameters ke baare mein:
// Rest parameter ...args ko function ke parameters list ke end mein hi define kiya ja sakta hai.
// Ek function mein sirf ek rest parameter ho sakta hai.
// Rest parameter ka naam (args yahan) arbitrary hai, lekin conventionally iska naam ...args ya ...rest rakha jata hai.
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
