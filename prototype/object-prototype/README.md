#### [Go Back ↩](../README.md) 
## Object Prototype

1. **JavaScript prototypes are used to access the properties and methods of objects.**

    To get object prototype we use `__proto__`or `Object.getPrototypeOf()`

    ```javascript
    const log = console.log
    let myObj = {};  // same as let myObj = new Object()

    console.dir(myObj.constructor)  // ƒ () { [native code] }

    log(myObj.toString()) //Output ("[object Object]"); the method toString()belongs to the prototype of the object myObj

    log(myObj.__proto__ === myObj.constructor.prototype) // both are pointing to prototype object of constructor

    // accessing constructor's prototype will not work this way 
    log(myObj.constructor.__proto__ ) // not work
    log(Object.getPrototypeOf(myObj.constructor)) // not work
    log(myObj.constructor.prototype) // will work and give root object prototype

    // Also Root-Object.constructor.prototype === Root-Object 
    ```

    ```mermaid
    graph LR;
      myObj.__proto__ --> Root-Object
      myObj.constructor.prototype --> Root-Object
      Object.getPrototypeOf.myObj --> Root-Object
      myObj.__proto__.constructor.prototype --> Root-Object
      Root-Object.constructor.prototype --> Root-Object
      Root-Object --> |Root-Object.__proto__|null
    ```