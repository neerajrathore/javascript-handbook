## Try & Catch

- The code in try block is executed first. when error occur in try block code, code execution shifts to catch block.
- try...catch can't catch errors in asynchronous code because it itself is a synchronous block.

```javascript
// business / checkNumber logic
function checkNumber(number) {
  if (isNaN(number) || number < 0) {
    // throw "not a valid number" // throw automatically redirect to catch. an't find a catch, the program will simply terminate
    return new Error("not valid please")  // Error is a built-in JavaScript object
  }
  else {
    return true
  }
}

// user Input
window.addEventListener("load", function () {
  console.log("loaded");
  const inputtedNumber = parseInt(this.window.prompt("Enter Number to verify"));

  try {
    // checkNumber(inputtedNumber)  // works with only throw in line 7

    // another way 
    const isNumberValid = checkNumber(inputtedNumber)
    console.log(isNumberValid instanceof Error, "instance of error"); // true or false 

    console.log(Object.getPrototypeOf(isNumberValid))
    /*{
        constructor: ƒ Error()
        message: ""
        name: "Error"
        toString: ƒ toString()
        [[Prototype]]: Object
    }*/

    console.log(Object.getPrototypeOf(isNumberValid).__proto__, Object.getPrototypeOf(new Object));
    // both same result 

    if (isNumberValid instanceof Error) {
      //The instanceof operator is specifically used to check the type of a JavaScript object.
      // It does this by looking at the prototype chain of the object wow
      console.error(isNumberValid.message);
      throw RangeError("Not a valid number!");
    }
    else {
      console.log("Try was successful, so no need to catch!");
    }
  }
  catch (error) {
    console.error(error, "catchError");
  }

  //play with events like input, keyup, keydown, blur a lot more and check their events log.
  // document.getElementById("number").addEventListener('blur', (event) => {
  //   console.log(event, "input");
  // })

  // "end" will log immediately after "loaded" logged cause addEventListener is kind of offloaded to browser.
  // Browser API is handled by browsers that doesn't have to do anything with js execution and when 
  // browser catches event it sends a callback.
  console.log("end");
})
```

```javascript
// below try catch wont work cause setTimeout is an asynchronous function, its callback function is placed in the event queue after the specified delay and executes only after the current execution stack is cleared.

// Therefore, when the setTimeout callback executes and throws an error, try...catch has already finished executing and cannot catch errors from the asynchronous callback.

// handling within asynchronous operations using callback functions, Promises, or async/await combined with try…catch.

// 1st example
try{
  // setTimeout is offloaded to browser API and event loop will get the callback 
  setTimeout(() => {
    throw new Error("error occurred")
  }, 2000)
}
catch {
  console.log("catch")
}

//solution
new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw new Error('err');
    } catch (err) {
      reject(err);
    }
  }, 200);
})
.then(() => {
  // things go as expected
})
.catch((err) => {
  console.log(err); // Error caught here
});

// 2nd example
// Promise object represents the eventual completion (or failure) and its resulting value of an asynchronous operation. A Promise’s status may be Pending, Fulfilled, Rejected 
// Throwing an error in a Promise (e.g., through a throw statement) causes the Promise to be rejected and it moves to catch block.
try {
  Promise.resolve().then(() => {
    throw new Error('err')
  })
} catch (err) {
  console.log(err);
}

// solution
// Method one
Promise.resolve()
  .then(() => {
    throw new Error('err');
  })
  .catch((err) => {
    console.log(err); // Error caught here
  });

// Method two
async function handleError() {
  try {
    await Promise.resolve().then(() => {
      throw new Error('err');
    });
  } catch (err) {
    console.log(err); // Error caught here
  }
}

handleError();

```
> async functions do start to run immediately but pause at the first await point, but their thrown errors are converted to promise rejections even if they do happen immediately.

> An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.
```js

async function () {
  try { 
    await errorTest()
  }
  catch(err) { 
    console.log("OUTSIDE ERROR!" + err)
  }
}
// But behind the scenes, it will appear exactly as below:

errorTest()
    .then(val=> console.log(val))
    .catch(err=> console.error("ERROR OCCURRED"))
```

