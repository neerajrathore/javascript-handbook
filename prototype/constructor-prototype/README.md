#### [Go Back ↩](../README.md) 
## Constructor Prototype

  - Constructor function to build other objects & constructor always get prototype object.

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

  // instance || func we run    ||  obj we get we run new func                       
  // obj --> xyz.prototype --> Object.prototype --> null

  
  let xyzObj = {
    value: 456,
    someMethod: function () {
        console.log("xyzObj some method");
    }
  }

  // childObj --> xyzObj --> Object.prototype --> null
  
  let childObj = {};
  Object.setPrototypeOf(childObj, xyzObj)
  ```

  ```mermaid
  flowchart LR;
    xyz.prototype.__proto__ --> Root-Object
    obj.__proto__.__proto__ --> Root-Object
    xyzObj.__proto__ --> Root-Object
    childObj.__proto__.__proto__ --> Root-Object
    childObj2.__proto__.__proto__ --> Root-Object
    Root-Object --> |Root-Object.__proto__|null
  ```
