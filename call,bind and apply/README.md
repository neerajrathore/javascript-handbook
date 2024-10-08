Here’s a README text explaining the differences between `call()`, `apply()`, and `bind()` in JavaScript, structured similarly to your provided example:

---

#### [Go Back ↩](../README.md)

## Difference between `call()`, `apply()`, and `bind()`

In JavaScript, `call()`, `apply()`, and `bind()` are methods that allow you to set the `this` context for a function. However, they differ in how they invoke the function and handle arguments.

1. **call() invokes a function immediately with a specified `this` value and arguments provided individually.**

    ```javascript
    function greet(greeting) {
        console.log(greeting + ', ' + this.name);
    }

    const person = { name: 'Alice' };
    greet.call(person, 'Hello');  // Output: "Hello, Alice"
    ```

    In this example, `call()` is used to invoke the `greet` function with the `this` context set to `person`, allowing us to access the `name` property.

2. **apply() is similar to `call()`, but it takes arguments as an array.**

    ```javascript
    function greet(greeting1, greeting2) {
        console.log(greeting1 + ' and ' + greeting2 + ', ' + this.name);
    }

    const person = { name: 'Bob' };
    greet.apply(person, ['Hi', 'Hola']);  // Output: "Hi and Hola, Bob"
    ```

    Here, `apply()` is used to invoke the `greet` function with the `this` context set to `person`, passing the arguments as an array.

3. **bind() returns a new function with a bound `this` value and allows you to preset parameters.**

    ```javascript
    function greet(greeting) {
        console.log(greeting + ', ' + this.name);
    }

    const person = { name: 'Charlie' };
    const greetCharlie = greet.bind(person);
    greetCharlie('Hey');  // Output: "Hey, Charlie"
    ```

    In this example, `bind()` creates a new function `greetCharlie` that has its `this` context permanently set to `person`. It can be invoked later with the specified parameters.

4. **Key Differences**:

    - **Invocation**: 
        - `call()` and `apply()` immediately invoke the function with a specified `this` context.
        - `bind()` returns a new function that can be invoked later.

    - **Arguments**:
        - `call()` accepts individual arguments.
        - `apply()` accepts arguments as an array.
        - `bind()` allows presetting parameters and creating a new function.

5. **Best Practice**:

    ```javascript
    const person = { name: 'David' };
    function greet(greeting) {
        console.log(greeting + ', ' + this.name);
    }

    const greetDavid = greet.bind(person);
    greetDavid('Hi');  // Output: "Hi, David"
    ```

    It is generally recommended to use `bind()` when you need to ensure a specific `this` context for a function, especially when passing it as a callback. Using `call()` or `apply()` is useful for immediate invocation.

