#### [Go Back ↩](../README.md)

# Variable Shadowing

## Overview

Variable shadowing is when a variable with the same name is declared in an inner scope as a variable in an outer scope. In such cases, the variable in the inner scope hides the variable in the outer scope.

```javascript
var a = 100
let b = 100
const c = 100

{
    var a = 10
    let b = 20
    const c = 30
    console.log(a) // 10
    console.log(b) // 20
    console.log(c) // 30
}
console.log(a) // 10
console.log(b) // 100
console.log(c) // 100

// shadowing in functions
const d = 500
function x() {
    const d = 50
    console.log(d) // 50
}
x();
console.log(d) // 500

// we can shadow a let variable with var only if we are declaring it in a function  function's syntax.
let a = 10; 
{
    var a = 20;
}
// will not work throws that a is already declared
// var is function scope and its crossing its scope boundaries {} here 

// below will not give error
let a = 10; 
function func(){
    var a = 20;
}

// vice versa of it works
var a = 10; 
{
    let a = 20;
}

// lexical scope chain pattern 
const a = 20;
{
    const a = 100;
    {
        const a = 500
        console.log(a)
    }
    console.log(a)
}
console.log(a)
```

1. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
2. var value is stored in nearest outer function and hence can be accessed outside block as well whereas same is not the case with let and const.

Block :- {} It is used to combine multiple statement into one statement so that we can use it at those places where javascript expects to have single statement.
Scope :- scope of a variable or a function is the place where these are accessible.
Block scope :-  The variables and function present within the scope of a block section. And block follows the lexical scope chain pattern while accessing the variable.
Shadowing :-  Providing same name to the variable as of those variable which are present in outer scope. The shadow should not cross the scope of original otherwise it will give error.
