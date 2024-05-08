#### [Go Back ↩](../README.md)
## try -catch

The code in try block is executed first. when error occur in try block code, code execution shifts to catch block.

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

