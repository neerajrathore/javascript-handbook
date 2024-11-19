#### [Go Back ↩](../README.md)

# Variable Scoping in JavaScript

## Overview

Variable scoping determines the visibility and lifetime of variables in your code. In JavaScript, there are three main types of variable scopes: **Global**, **Function**, and **Block** scope. Understanding these scopes is essential for effective programming.

## Types of Scopes

### 1. Global Scope
Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.

### Example:
```javascript
var globalVar = 'I am a global variable';

function displayGlobal() {
    console.log(globalVar); // Accessible here
}

displayGlobal(); // Outputs: I am a global variable
console.log(globalVar); // Outputs: I am a global variable
```

### 2. Function Scope
Variables declared within a function are in the function scope and can only be accessed within that function.

Example:
```javascript
function myFunction() {
    var functionVar = 'I am a function-scoped variable';
    console.log(functionVar); // Accessible here
}

myFunction(); // Outputs: I am a function-scoped variable
console.log(functionVar); // ReferenceError: functionVar is not defined
```

### 3. Block Scope
ES6 introduced the let and const keywords, which allow variables to have block scope. Variables declared with let and const within a block (e.g., inside {}, if statement, for loop) are block-scoped and cannot be accessed outside that block.

Example:
```javascript
if (true) {
    let blockVar = 'I am a block-scoped variable';
    console.log(blockVar); // Accessible here
}

console.log(blockVar); // ReferenceError: blockVar is not defined
```

### Conclusion

Understanding variable scoping is crucial for managing the accessibility and lifetime of variables in your code. Properly utilizing scope helps prevent errors and enhances code maintainability