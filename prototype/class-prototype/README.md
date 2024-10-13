#### [Go Back ↩](../README.md)

## Class Prototype

  - A class also has this object prototype to look back to its origins, all the way up through Object. As a constructor function it is also chained from below to all its instances.

  ```javascript

  const log = console.log
  let xyz = function () {
  this.value = 123
  this.innerFunction = function () {
    console.log('innerFunction called');
  } 
  }
  xyz.prototype.someMethod = function () {
    console.log("this is xyz some method");
  }
  
  // new keyword indicates that xyz is not regular function 
  // function gets executed in different way as a constructor function when we use new keyword 
  // & make a new object and assign bind the code inside of function to this keyword 
  let obj = new xyz();

  
  class xyz {
    constructor(name) {
        this.name = name;
    }
  }
  const newXyz = new xyz("name")
  xyz.prototype.addSomeMethod = () => {}  // this will add this method to prototype
  xyz.prototype.grades = "A"

  console.log(newXyz);
  console.log(newXyz.__proto__); // same Object.getPrototypeOf(newXyz)
  console.log(newXyz.__proto__.__proto__); // root-object
  console.log(Object.getPrototypeOf(newXyz));
  ```

  ```mermaid
  flowchart LR;
    xyz.prototype.__proto__ --> Root-Object
    obj.__proto__.__proto__ --> Root-Object
    newXyz.__proto__.__proto__ --> Root-object
  ```
