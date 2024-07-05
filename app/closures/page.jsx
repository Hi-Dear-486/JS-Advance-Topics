import React from "react";

const Closures = () => {
  // simple hy Closures  nestted function apnay outerfunctions ky saray variables or paramters ko access kr sekhta hy
  function Outerfun(fname) {
    const lname = "hassan";
    const innerfun = () => {
      return fname + lname;
    };
    innerfun();
  }

  Outerfun("saad");
  return (
    <div>
      <h2>Closures</h2>
    </div>
  );
};

export default Closures;
