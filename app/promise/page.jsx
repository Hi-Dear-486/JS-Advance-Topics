// Promise
// JavaScript mein Promise ek object hai jo asynchronous operations ko handle karne ke liye use hota hai. Promise ek value ko represent karta hai jo future mein available ho sakti hai, ya phir nahi bhi ho sakti. Ye ek flexible mechanism hai jo async programming ko manage karta hai aur callbacks ko better organize karta hai.
// Promise ki basic properties:
// State: Promise ke paas three possible states hote hain:
// Pending: Initial state, jab promise create hota hai.
// Fulfilled: Jab promise successfully complete hota hai (resolve hota hai).
// Rejected: Jab promise fail hota hai (reject hota hai).
// Promise ke methods:
// then(): Ek Promise object ke liye then method use hota hai, jo do optional arguments le sakta hai: ek success handler function (jab promise resolve hota hai) aur ek error handler function (jab promise reject hota hai).
// catch(): Error handling ke liye use hota hai, agar koi promise reject hota hai.
// finally(): Optional hai, aur promise settle hone ke baad execute hota hai, chahe resolve ho ya reject.

function getData() {
  return new Promise((resolve, reject) => {
    let conditions = false;
    const data = [1, 2, 3, 4];
    conditions ? resolve(data) : reject("failed to fetch data");
  });
}

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise settled");
  });

const MyPromise = () => {
  return (
    <div>
      <h3>Promise in js </h3>
    </div>
  );
};

export default MyPromise;
