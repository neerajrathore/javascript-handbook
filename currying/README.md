# Currying in JavaScript

## Topics Covered:

- **Currying**: Breaking a function into smaller functions that take one argument at a time.
- **Partial Application**: Fixing some arguments of a function and returning a new function for the remaining arguments.
- **Real-World Example**: A functional discount calculator using currying.

## Why Is Currying in JavaScript Useful?

Currying helps make your functions more reusable by breaking them into smaller, more manageable pieces. This
technique allows you to avoid passing all arguments at once and instead allows function composition.

## Currying vs. Partial Application in JavaScript

Both currying and partial application allow you to pass arguments in steps, but they differ in their approach:

- Currying: A curried function takes one argument at a time and returns a new function
for the next argument.
            
- Partial Application: Partial application pre-fixes some arguments of a function and
returns a new function that takes the remaining arguments.


✅ Open the console to see the demonstration.
### links 
- ✅ [Click here to view script file](./script.js)
- ✅ [Click here to view currying script file](./examples/currying.js)
- ✅ [Click here to view partial file](./examples/partial.js)
- ✅ [Click here to view project script file](./examples/project.js)

| Feature | bind | Currying |
|-|-|-|
| Definition | Partially applies arguments to a function. | Transforms a function into nested functions. |
| Flexibility | Partially fixes arguments once. | Allows sequential function calls for arguments. |
| Example | add.bind(null, 10) | (a) => (b) => (c) => a + b + c |

## Infinite Currying
It refers to a function that keep returning new functions until next function is undefined.

```javascript
function add(a) {
  return function (b) {
    // If b is provided, the returned function recursively calls add with the updated sum (a + b).
    if (b === undefined) {
      return a; 
    } else {
      return add(a + b); 
    }
  };
}

console.log(add(1)(2)(3)()); // Output: 6
console.log(add(10)(20)(30)(40)()); // Output: 100
```