import React from "react";

const ObjectDestructuring = () => {
  const obj = {
    name: "Ronaldo",
    girlfriends: "many",
    age: 40,
    address: {
      city: "Santos Aveiro ",
      country: "Portuguese footballer",
    },
    sleeptime: "10pm",
    practice: "12hour",
  };

  const {
    name: fname,
    girls,
    age,
    address: { city, country },
    ...shedule
  } = obj;

  console.log(`${fname}, ${age}, ${city}, ${shedule}`);
  return (
    <div>
      <h3>Object Destructuring</h3>
      <h2>
        Object destructuring in JavaScript is a powerful feature that allows you
        to extract properties from objects into variables, providing a concise
        and readable syntax
      </h2>
    </div>
  );
};

export default ObjectDestructuring;
