#### [Go Back ↩](../README.md)
# JavaScript Promises: A Comprehensive Guide

## Introduction
JavaScript promises are a way to handle asynchronous operations. A `Promise` is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Promise States
A promise can be in one of the following three states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

## Basic Syntax

A promise is created using the `new Promise` constructor, which takes a function as its argument. This function is called with two arguments: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  const success = true; // Simulating success/failure

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});
```

## Consuming a Promise

You consume a promise using the `.then()` and `.catch()` methods.

- `.then()` is used to handle a fulfilled promise.
- `.catch()` is used to handle a rejected promise.

```javascript
myPromise
  .then(result => {
    console.log(result); // Output: "Operation Successful"
  })
  .catch(error => {
    console.log(error);  // If rejected, would output: "Operation Failed"
  });
```

### `finally()` Method

The `finally()` method is executed once the promise is settled, regardless of whether it was resolved or rejected.

```javascript
myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise completed");
  });
```

## Example: A Simple Asynchronous Operation

```javascript
const asyncTask = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task finished after 2 seconds");
    }, 2000);
  });
};

asyncTask()
  .then(result => console.log(result)) // Output after 2 seconds: "Task finished after 2 seconds"
  .catch(error => console.log(error));
```

## Chaining Promises

You can chain multiple `.then()` calls to handle multiple asynchronous operations sequentially.

```javascript
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
};

const processData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${data} and processed`), 1000);
  });
};

fetchData()
  .then(data => processData(data))
  .then(result => console.log(result)) // Output after 2 seconds: "Data fetched and processed"
  .catch(error => console.log(error));
```

## Promise API Methods

### `Promise.all()`

`Promise.all()` takes an array of promises and returns a new promise that resolves when all the input promises are resolved, or rejects as soon as one of the promises is rejected.

```javascript
const p1 = Promise.resolve("Promise 1 resolved");
const p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), 1000));
const p3 = Promise.resolve("Promise 3 resolved");

Promise.all([p1, p2, p3])
  .then(results => console.log(results))  // Output after 1 second: ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
  .catch(error => console.log(error));
```

### `Promise.race()`

`Promise.race()` returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

```javascript
const p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 finished first"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 finished second"), 2000));

Promise.race([p1, p2])
  .then(result => console.log(result))  // Output after 1 second: "Promise 1 finished first"
  .catch(error => console.log(error));
```

### `Promise.allSettled()`

`Promise.allSettled()` returns a promise that resolves after all of the given promises have either resolved or rejected, and returns an array of objects describing the outcome of each promise.

```javascript
const p1 = Promise.resolve("Resolved");
const p2 = Promise.reject("Rejected");

Promise.allSettled([p1, p2])
  .then(results => console.log(results));
  // Output:
  // [
  //   { status: "fulfilled", value: "Resolved" },
  //   { status: "rejected", reason: "Rejected" }
  // ]
```

### `Promise.any()`

`Promise.any()` returns the first fulfilled promise, ignoring rejected ones. It rejects only if all promises are rejected.

```javascript
const p1 = Promise.reject("Promise 1 rejected");
const p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), 1000));

Promise.any([p1, p2])
  .then(result => console.log(result))  // Output after 1 second: "Promise 2 resolved"
  .catch(error => console.log(error));  // This will not run because p2 resolves.
```

## Using Promises in Async/Await:

The async/await syntax is built on top of promises and allows for even cleaner code when handling asynchronous operations.

```javascript
async function handleData() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    console.log(processedData);
  } catch (error) {
    console.error(error);
  }
}
handleData();
```

## Using `Promise.resolve()` and `Promise.reject()`:

These static methods quickly create resolved or rejected promises, often useful in testing or forcing specific promise states.

```javascript
Promise.resolve("Quick resolve").then(console.log);  // Output: Quick resolve
Promise.reject("Quick reject").catch(console.log);   // Output: Quick reject
```

## Handling Errors in Promises

Errors in promises can be handled by the `.catch()` method, or by passing an error handler to the `.then()` method.

```javascript
const errorProneTask = () => {
  return new Promise((resolve, reject) => {
    reject("Something went wrong");
  });
};

errorProneTask()
  .then(result => console.log(result))
  .catch(error => console.log(error));  // Output: "Something went wrong"
```

Alternatively, you can add an error handler inside `.then()`:

```javascript
errorProneTask()
  .then(result => console.log(result), error => console.log(error));  // Output: "Something went wrong"
```

## Conclusion

Promises provide a clean and efficient way to handle asynchronous tasks in JavaScript. By using promises, you can avoid the infamous "callback hell" and write more readable, maintainable code.
