#### [Go Back ↩](../README.md) 
* [Prototype Chain](#-prototype-chain)
## Function Prototype

  - To get function prototype we use `.prototype` because the constructor have prototype method
  - `prototype` is used to find next thing up in prototype chain for functions.
  - Root-Object is second last in prototype chain. It's `__proto__` is null

  ```javascript
  // Root-Object = {
  //   constructor:ƒ Object(")
  //   hasOwnProperty:ƒ hasOwnProperty()
  //   isPrototypeOf:ƒ isPrototypeOf()
  //   propertyIsEnumerable:ƒ propertyIsEnumerable()
  //   toLocaleString:ƒ toLocaleString()
  //   toString:ƒ toString()
  //   valueOf:ƒ valueOf()
  //   __defineGetter__:ƒ __defineGetter__()
  //   __defineSetter__:ƒ __defineSetter__()
  //   __lookupGetter__:ƒ __lookupGetter__()
  //   __lookupSetter__:ƒ __lookupSetter__()
  //   __proto__:null
  //   get __proto__:ƒ __proto__()
  // }
  const log = console.log
  
  function Cat() {
  // constructor 
  }

  let kitty = new Cat();

  // log(kitty)
  // log(kitty.constructor.prototype)   // ƒ () { [native code] }
  // log(kitty.__proto__ === Cat.prototype)  // true
  // log(kitty.__proto__ === kitty.constructor.prototype)  // true
  // // Cat === kitty.constructor

  // log(kitty.__proto__.__proto__ === myObj.__proto__ === Object.prototype) /// these are same 

  // console.dir(Object.__proto__)  // this is anonymus strange!

  // log(Object.prototype.__proto__)

  // Object is function so prototype will exist not __proto__ but Object.prototype is object so __proto__ will exist in it
  // function ka __proto__ nhi hota prototype hota h

  log(Cat === kitty.constructor) // true
  log(kitty.__proto__ === Cat.prototype)  // true
  
  console.log(kitty.__proto__.__proto__, {}.__proto__); // Root-Object
  // console.log( (new Object).constructor.prototype); === console.log( (new Object()).constructor.prototype);
  console.log( new Object().__proto__); // Root-Object
  console.log({}, new Object, new Object()); // {}
  console.log(kitty.__proto__.__proto__, {}.__proto__);
  console.log(myObj.__proto__);
  // console.log( (new Object).constructor.prototype); === console.log( (new Object()).constructor.prototype);
  console.log( new Object().__proto__);

  console.log({}, new Object, new Object()); // just before root object  
  // it is just same as root object but has [[Prototype]] property which has proto as Root-Object

  // object-literal = {}
  ```

  ```mermaid
  flowchart LR;
    kitty.__proto__.__proto__ --> Root-Object
    object-literal.__proto__ --> Root-Object
    Object.prototype --> Root-Object
    new-Object.__proto__ --> Root-Object
    new-Object.constructor.prototype --> Root-Object
    Root-Object --> |Root-Object.__proto__|null
  ```
  ## Prototype Chain

  Create Cat Object as prototype of Animal Object.

  ```javascript
  function Cat() {
    // constructor 
  }
  let kitty = new Cat();
  function Animal () {}   // Cat should go to Animal 

  Object.setPrototypeOf(Cat.prototype, Animal.prototype)
  log(kitty.__proto__)  // Cat {}
  log(kitty.__proto__.__proto__)  // Animal {}
  log(kitty.__proto__.__proto__.__proto__)  // Object {}
  log(kitty.__proto__.__proto__.__proto__.__proto__)  // null
  ```

  ```mermaid
  flowchart LR;
    Cat-->|Cat.prototype| kitty --> |kitty.__proto__.__proto__|function-cat -->|kitty.__proto__.__proto__.__proto__| null ;
    kitty.__proto__ --> Cat --> |kitty.__proto__.__proto__| Animal --> |kitty.__proto__.__proto__.__proto__| Root-object -->|kitty.__proto__.__proto__.__proto__.__proto__| null
  ```
