#### [Go Back ↩](../README.md)

## Async JavaScript

JavaScript is single-threaded, meaning it can only do one thing at a time. However, with asynchronous programming, JavaScript can perform non-blocking operations, allowing other code to run while waiting for long-running tasks to complete. Below are examples and detailed explanations of different async patterns in JavaScript.

1. **Synchronous vs Asynchronous Execution**:
   
    Synchronous code executes line by line, meaning each line waits for the previous one to finish before executing. Asynchronous code, however, allows certain tasks (like network requests) to happen in the background without blocking the execution of other code.

    ```javascript
    console.log("Start");

    setTimeout(() => {
        console.log("Async Operation");
    }, 2000);  // This executes after 2 seconds

    console.log("End");
    ```

    **Explanation**:
    - `Start` is logged first.
    - The `setTimeout` is asynchronous, so it schedules the operation to run in 2 seconds and allows the program to continue.
    - `End` is logged immediately after `Start`.
    - After 2 seconds, the `Async Operation` is logged.

2. **Callbacks**:
   
    A callback function is a function passed as an argument to another function and is executed once the asynchronous operation completes.

    ```javascript
    function fetchData(callback) {
        setTimeout(() => {
            console.log("Data fetched");
            callback();  // Callback executed after async operation
        }, 2000);
    }

    function processData() {
        console.log("Processing data");
    }

    fetchData(processData);
    ```

    **Explanation**:
    - `fetchData` simulates an async operation (like fetching data) using `setTimeout`.
    - After 2 seconds, `Data fetched` is logged, and the `processData` function (the callback) is executed, which logs `Processing data`.

3. **Promises**:
   
    Promises provide a cleaner, more powerful way to handle asynchronous code compared to callbacks. A promise represents a value that may be available now, or in the future, or never.

    ```javascript
    let fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;  // Simulating success or failure
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Data fetching failed");
            }
        }, 2000);
    });

    fetchData
        .then((message) => {
            console.log(message);  // Logs if the promise is resolved
        })
        .catch((error) => {
            console.log(error);  // Logs if the promise is rejected
        });
    ```

    **Explanation**:
    - A promise is created with two states: `resolve` for success and `reject` for failure.
    - If the operation succeeds, `resolve` is called, and the `.then()` method logs the success message.
    - If the operation fails, `reject` is called, and the `.catch()` method logs the error.

4. **Async/Await**:
   
    `async/await` is a modern approach to handle promises and write cleaner, synchronous-looking asynchronous code. `await` pauses the execution of an `async` function until the promise is resolved or rejected.

    ```javascript
    async function fetchData() {
        try {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("Data fetched"), 2000);
            });
            let result = await promise;  // Pauses until the promise is resolved
            console.log(result);  // Logs "Data fetched"
        } catch (error) {
            console.log(error);  // Handles rejection
        }
    }

    fetchData();
    ```

    **Explanation**:
    - The `async` keyword is used to define an asynchronous function.
    - Inside the function, `await` waits for the promise to be resolved and stores the result in `result`.
    - If the promise is rejected, the `catch` block handles the error.

5. **Example Breakdown**:
   
    - **Callback Example**:
      
        ```javascript
        function getUserData(callback) {
            setTimeout(() => {
                callback("User data fetched");
            }, 2000);
        }

        getUserData((data) => {
            console.log(data);  // Logs "User data fetched"
        });
        ```

    - **Promise Example**:

        ```javascript
        function getUserData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("User data fetched via Promise");
                }, 2000);
            });
        }

        getUserData().then((data) => {
            console.log(data);  // Logs "User data fetched via Promise"
        });
        ```

    - **Async/Await Example**:

        ```javascript
        async function getUserData() {
            let data = await new Promise((resolve) => {
                setTimeout(() => resolve("User data fetched via Async/Await"), 2000);
            });
            console.log(data);  // Logs "User data fetched via Async/Await"
        }

        getUserData();
        ```

6. **Key Difference**:

    - **Callbacks**: They lead to callback hell when nesting multiple asynchronous operations.
    
    - **Promises**: They provide better readability, but chaining many `.then()` can still make the code hard to follow.
    
    - **Async/Await**: The most readable and maintainable method to write asynchronous code, but must be used inside `async` functions.

7. **Best Practice**:

    - Use `async/await` for handling asynchronous code as it makes the code cleaner and easier to read.
    - Promises are still useful in cases where you need to handle multiple promises simultaneously, like with `Promise.all()`.

    ```javascript
    async function fetchAllData() {
        let promise1 = new Promise((resolve) => setTimeout(() => resolve("Data 1 fetched"), 1000));
        let promise2 = new Promise((resolve) => setTimeout(() => resolve("Data 2 fetched"), 2000));
        
        let [data1, data2] = await Promise.all([promise1, promise2]);
        
        console.log(data1);  // Logs "Data 1 fetched"
        console.log(data2);  // Logs "Data 2 fetched"
    }

    fetchAllData();
    ```

    **Explanation**: 
    - `Promise.all()` waits for all promises in the array to resolve and returns their results as an array.
    - This is particularly useful for fetching multiple resources in parallel.

---


