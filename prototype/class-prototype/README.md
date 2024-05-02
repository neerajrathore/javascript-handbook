#### [Go Back ↩](../README.md) 
## Class Prototype

  - A class also has this object prototype to look back to its origins, all the way up through Object. As a constructor function it is also chained from below to all its instances.

  ```javascript
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
    newXyz.__proto__.__proto__ --> Root-object
  ```
