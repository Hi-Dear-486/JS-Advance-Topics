// iterables:  On which we can apply  loop
// Array
// array are the most common example of iterables

const arr = [1, 2, 3];

for (const elem of arr) {
  console.log("🚀 ~ elem:", elem);
}

// using spread operator
const arr2 = [...arr];

// Strings are iterables, and you can loop over each character
const name = "Zeeshan";

for (const elem of name) {
  console.log("🚀 ~ elem:", elem);
}

const name2 = [...name];
console.log("🚀 ~ name2:", name2);

// Sets
// Sets are iterables that store unique values:

const mySet = new Set([1, 2, 3, 3]); // Duplicate 3 is ignored

// Using for...of
for (const value of mySet) {
  console.log(value);
}

// Arguments Object
// The arguments object is iterable in non-arrow functions:
function demo() {
  for (const elem of arguments) {
    console.log("🚀 ~ demo ~ elem:", elem);
  }
}
demo(1, 2, 3, 4, 5);
