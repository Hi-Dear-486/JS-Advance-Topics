"use client";

/* Synchronous Programming: */
/* In synchronous programming, code executes in a sequence, meaning the next line executes only after the previous line has finished. */
/* Here is an example of synchronous programming: */

console.log("start");
function Synchronousprograming() {
  console.log(
    "A second line will execute only after the first line has executed."
  );
}
Synchronousprograming();
console.log("end");

// Asynchronous programming
// In asynchronous programming, after starting a task, the program does not wait for it to complete.
// This means other tasks can continue without waiting for the current task to finish.
// In JavaScript, asynchronous programming is commonly used for network requests, file operations, timers, event handling, etc.

// Here is an example of Asynchronous programming

console.log("start");
setTimeout(() => {
  console.log("Asynchronous programming does not wait  ");
}, 2000);

console.log("end");

const Synchronous = () => {
  return (
    <div>
      {/* Synchronous or asynchronous programing */}
      <h2>
        Defference Between Synchronous or asynchronous programing in Javascript
      </h2>
    </div>
  );
};

export default Synchronous;
