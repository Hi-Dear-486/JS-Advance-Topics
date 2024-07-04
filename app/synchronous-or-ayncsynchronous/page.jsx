"use client";

/* Synchronous Programming: */
/* Synchronous programming mein code ek sequence mein execute hota hai, yani ek line execute hone ke baad hi agla line execute hota hai. */
/* Synchronous programming ka ek example ye hai: */

console.log("start");
function Synchronousprograming() {
  console.log("aik line execute honay ky baad hi second line execute ho gi");
}
Synchronousprograming();
console.log("end");

// Asynchronous programming
// Asynchronous programming mein ek task ko shuru karne ke baad, program us task ka wait nahi karta hai. Iska matlab hai ki dusre tasks ko continue kiya ja sakta hai bina current task ke completion ka wait kiye.
// JavaScript mein asynchronous programming commonly network requests, file operations, timers, event handling, etc. ke liye use hota hai.

// Asynchronous programming ki example

console.log("start");
setTimeout(() => {
  console.log("Asynchronous programming wait nahi krta ");
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
