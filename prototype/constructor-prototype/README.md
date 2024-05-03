#### [Go Back ↩](../README.md) 
## Constructor Prototype

  - Constructor function to build other objects & constructor always get prototype object.

  ```javascript

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
    xyzObj.__proto__ --> Root-Object
    childObj.__proto__.__proto__ --> Root-Object
    childObj2.__proto__.__proto__ --> Root-Object
    Root-Object --> |Root-Object.__proto__|null
  ```
