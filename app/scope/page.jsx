const Scope = () => {
  // 1️⃣ Global Scope
  // 📌 Note: Too many global variables can cause conflicts and make debugging difficult.
  let globalVar = "I am global";

  function showGlobal() {
    console.log(globalVar); // ✅ Accessible
  }
  showGlobal();
  console.log(globalVar); // ✅ Accessible

  // 2️⃣ Function Scope (Local Scope)
  // 📌 Note: Function-scoped variables exist only while the function is running.
  function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar); // ✅ Accessible inside function
  }
  localScopeExample();
  // console.log(localVar); // ❌ Error: localVar is not defined

  // 3️⃣ Block Scope (ES6: let & const)
  if (true) {
    let blockVar = "I am block-scoped";
    console.log(blockVar); // ✅ Accessible inside block
  }

  console.log(blockVar); // ❌ Error: blockVar is not defined

  // 4️⃣ Lexical Scope (Scope Chain)
  // 📌 Note: The inner function can access the outer function’s variables, but not vice versa.
  function outerFunction() {
    let outerVar = "I am outer";

    function innerFunction() {
      console.log(outerVar); // ✅ Accessible due to lexical scope
    }

    innerFunction();
  }
  outerFunction();

  // 5️⃣ Module Scope (ES6 Modules)
  // 📌 Note: This helps in keeping code modular and maintainable.
  // file: myModule.js
  // export let moduleVar = "I am module-scoped";

  // file: main.js
  // import { moduleVar } from './myModule.js';
  // console.log(moduleVar); // ✅ Accessible after import

  return (
    <div>
      <h2> Types of Scope in JavaScript </h2>
    </div>
  );
};

export default Scope;
