#### [Go Back ↩](../README.md) 
## Hoisting

Hoisting is a process of declaring variables and function and moving them on top scope before execution of the code.


1. **Hoisting when using var for variable declaration.**

    ```javascript
    console.log(number) // gives undefined cause variable number is hoisted and initialized with undefined
    var number = 10     // initialization is not hoisted
    console.log(number) // 10
    ```

2. **Hoisting when using let & const for variable declaration.**

    it throws reference error when using let wheres using var for declaration doesn't throws any error.

    ```javascript
    console.log(number) // ReferenceError: Cannot access 'number' before initialization.
    // number is hoisted to the top of the global scope.
    let number = 10  
    // or const number = 10   
    console.log(number)
    ```

    ```javascript
    console.log(otherNumber) // ReferenceError: otherNumber is not defined.
    // JavaScript don't know what the otherNumber variable is because it is not defined. so it cannot be hoisted. 
    let number = 10     
    console.log(number)
    ```
    ### we can access a variable declared with var before declaration without errors, but we cannot do the same with let and const. let or const are hoisted without a default initialization but var are hoisted with a default initialization of **undefined**.

3. **Temporal Dead Zone of let & const variable hoisted**

    its that area where let & const variable are hoisted but not accessible.

    ```javascript
    // tdz starts
    console.log(number) 
    let number = 10    
    console.log(number)
    // tdz ends
    ```

3. **All undeclared variables are global variables**

    All variable and function declarations are hoisted to the top of their scope before any code is executed. 

    Undeclared variables do not exist until code assigning them is executed. Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed.

    ```javascript
    function hoist() {
    a = 2;
    var b = 5; // or let b = 5 both will complain b is not define
    }

    hoist();

    console.log(a); 
    /* 
    Accessible as a global variable outside hoist() function
    Output: 20
    */

    console.log(b); 
    /*
    Since it was declared, it is confined to the hoist() function scope.
    We can't print it out outside the confines of the hoist() function.
    Output: ReferenceError: b is not defined
    */
    ```