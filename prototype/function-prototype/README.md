#### [Go Back ↩](../README.md) 
## Function Prototype

1. **Function Prototype**

    To get function prototype we use `.prototype`

    ```javascript
    const log = console.log
    
    function Cat() {
    // constructor 
    }

    let kitty = new Cat();
    log(Cat === kitty.constructor) // true
    log(kitty.__proto__ === Cat.prototype)  // true
    ```

    ```mermaid
    graph LR;
      Cat-->|Cat.prototype| kitty --> |kitty.__proto__.__proto__|function-cat -->|kitty.__proto__.__proto__.__proto__| null ;
    ```