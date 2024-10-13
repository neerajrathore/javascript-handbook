#### [Go Back ↩](../README.md)

## Event Loop

The Event Loop is a fundamental concept in JavaScript that enables asynchronous programming by allowing the execution of code, collecting and processing events, and executing queued sub-tasks. It helps JavaScript perform non-blocking operations, even though it is single-threaded. Below are some examples to illustrate how the Event Loop works.

1. **Basic Understanding of the Event Loop**

    ```javascript
    console.log("Start");

    setTimeout(() => {
        console.log("Timeout 1");
    }, 0);

    setTimeout(() => {
        console.log("Timeout 2");
    }, 0);

    console.log("End");
    ```

   - In this example, the output will be:
     ```
     Start
     End
     Timeout 1
     Timeout 2
     ```
   - The synchronous code runs first, followed by the asynchronous callbacks queued by `setTimeout`, demonstrating that the Event Loop allows non-blocking behavior.

2. **Understanding Callbacks in the Event Loop**

    ```javascript
    console.log("First");

    setTimeout(() => {
        console.log("Second");
    }, 1000);

    Promise.resolve()
        .then(() => {
            console.log("Third");
        });

    console.log("Fourth");
    ```

   - The output will be:
     ```
     First
     Fourth
     Third
     Second
     ```
   - Here, the promise is resolved and its callback is queued in the microtask queue, which has higher priority than the macrotask queue (like `setTimeout`).

3. **Illustrating the Microtask Queue**

    ```javascript
    console.log("A");

    Promise.resolve().then(() => {
        console.log("B");
    });

    console.log("C");

    setTimeout(() => {
        console.log("D");
    }, 0);

    Promise.resolve().then(() => {
        console.log("E");
    });

    console.log("F");
    ```

   - The output will be:
     ```
     A
     C
     F
     B
     E
     D
     ```
   - This example shows that all synchronous code runs first, then the microtasks (Promises) are processed before the macrotasks (setTimeout).

4. **Event Loop with Multiple Callbacks**

    ```javascript
    console.log("1");

    setTimeout(() => {
        console.log("2");
    }, 0);

    setTimeout(() => {
        console.log("3");
    }, 0);

    Promise.resolve().then(() => {
        console.log("4");
    }).then(() => {
        console.log("5");
    });

    console.log("6");
    ```

   - The output will be:
     ```
     1
     6
     4
     5
     2
     3
     ```
   - This illustrates how the Event Loop processes callbacks from the microtask queue (Promises) before moving to the macrotask queue (`setTimeout`).

5. **Summary of the Event Loop Process**

   - The Event Loop constantly checks the call stack and the task queues:
     1. If the call stack is empty, it looks at the microtask queue and processes all microtasks (like resolved Promises).
     2. Once the microtask queue is empty, it processes the next macrotask (like `setTimeout` or `setInterval`).
   - This allows JavaScript to handle asynchronous operations effectively while maintaining a single-threaded execution model.
