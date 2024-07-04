const Scope = () => {
  // example of global scope
  var globalscope = "globalscopedefine";
  const GlobalScope = () => {
    // access global variable
    console.log(globalscope);
  };
  GlobalScope();

  // example of local scope
  const LocalScope = () => {
    // local variable
    let local = "localscopedefine";
    console.log(local);
  };
  LocalScope();

  // example of block scope
  const blockScope = () => {
    // block scope variables
    const block = "block scope define";
    console.log(block);
  };
  blockScope();
  return (
    <div>
      <h2>Scope in js </h2>
      <p>
        JavaScript mein "scope" ek concept hai jo define karta hai ki kisi
        variable ya function ko kahaan se access kiya ja sakta hai.
      </p>
      <h2>Types of Scopes</h2>
      <li>
        Global Scope: is mein variables ko function ky bhir define kiya jata hy
        or hum usko hr jaga access kr sekhty hein
      </li>
      {/* example of  Global Scope */}
      {}
      <li>
        Local Scope: is mein variables ko function ky inside mein define kiya
        jata hy but hum is ko bhir access nahi kr sekhty
      </li>
      {/*example of Local scope */}
      {}

      <li>
        Block Scope:ES6 ke let ya const se define kiye gaye variables block
        scope mein hote hain, jaise if, for, while statements ke blocks mein.
      </li>
    </div>
  );
};

export default Scope;
