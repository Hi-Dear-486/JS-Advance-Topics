"use client";

// 🔸 1. Creating & Modifying Objects
// ✅ Object.create(proto): Creates a new object by using an existing object as its prototype.
// ✅ Object.assign(target, source): Copies the properties of one object into another object.

// 🔸 2. Accessing Object Properties
// ✅ Object.keys(obj): Returns an array of only the object's keys.
// ✅ Object.values(obj):Returns an array of only the object's values.
// ✅ Object.entries(obj):Converts an object into an array of [key, value] pairs.

// 🔸 3. Checking & Freezing Objects
// ✅ Object.hasOwnProperty(key):Checks whether the object has the specified key or not.
// ✅ Object.freeze(obj):Completely freezes the object (no changes can be made).
// ✅ Object.seal(obj):New properties cannot be added to the object, but existing values can be updated.

// 🔸 4. Getting Object Prototype
// ✅ Object.getPrototypeOf(obj):Returns the prototype of an object.
// 🔸 5. Converting Objects
// ✅ Object.fromEntries(array):Creates a new object from [key, value] pairs.

const Objects = () => {
  const obj1 = { name: "Ali" };
  const obj2 = { age: 25 };

  const person = {
    greet() {
      console.log("Hello!");
    },
  };
  const newPerson = Object.create(person);
  console.log("🚀 ~ Objects ~ newPerson:", newPerson.greet());

  // Alternative
  // const newPerson = { ...person };
  //   console.log("🚀 ~ Objects ~ newPerson:", newPerson.greet());

  //   const merged = Object.assign(obj1, obj2);
  //   console.log("🚀 ~ Objects ~ merged:", merged);

  //   alternative
  const merged = { ...obj1, ...obj2 };
  console.log("🚀 ~ Objects ~ merged:", merged);

  const user = {
    name: "Zeeshan",
    age: 23,
    city: "Faisalabad",
    student() {
      console.log("i am student of BSSE");
    },
  };
  console.log("🚀 ~ Objects ~ user:", Object.keys(user));
  console.log("🚀 ~ Objects ~ user:", Object.values(user));
  console.log("🚀 ~ Objects ~ user:", Object.entries(user));
  //   console.log("🚀 ~ Objects ~ user:", user.hasOwnProperty(age));
  //   Object.freeze(user);
  //   user.name = "Ahmed"; // ❌ Error (no change)
  Object.seal(user);
  obj2.email = "fullstackdeveloper486@gmail.com"; // ❌ New property not added
  obj2.name = "Ahmed"; // ✅ Allowed
  console.log("🚀 ~ Objects ~ user:", user);
  const proto = Object.getPrototypeOf(user);
  console.log("🚀 ~ Objects ~ proto:", proto);

  const arr = [
    ["name", "Ali"],
    ["age", 25],
  ];
  const objFromArr = Object.fromEntries(arr);
  console.log(objFromArr);
  return <div>Objects</div>;
};

export default Objects;
