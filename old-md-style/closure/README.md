#### [Go Back ↩](../README.md)
## Closure

A closure gives you access to outer functions lexical scope and variable from an inner functions. Every time a new closure to outer function will be created when calling nested function. Below are some examples.

1. **A firstName Function and nested is secondName function that returns both firstName and lastName.**

    ```javascript
    function firstName() {
        var firstName = 'mozilla'
        return function secondName() {
            var lastName = 'firefox'
            return firstName +" "+ lastName
        }
    }
    // when we call firstName, it automatically returns the function that have last name
    let fullName = firstName() // fistName will not lost it is accessible by child functions due to lexical scope.
    fullName() // mozilla firefox
    // when we call first name it fullName it creates a closure with parent function and its variables
    ```
2. **A outer function given a argument outerValue and nested inner function have access to parent variable.**

    ```javascript
    function outer (outerValue) {
        return function inner (innerValue) {
            console.log(outerValue+" "+innerValue);
        }
    }
    const newFunc = outer("hello");
    // even though outer done being executing but it **remembers** the hello passed in outer function
    newFunc("bye"); // hello bye
    ```
3. **A createCounter function that holds count variable and returns function that count variable on next function calling.**

    ```javascript
    let createCounter = (n) => {
        let count = n
        return () => {
            let currentCount = count
            count = count + 1
            return currentCount
        }
    }
    let counter = createCounter(10)
    console.log(counter()); // 10
    console.log(counter()); // 11
    ```