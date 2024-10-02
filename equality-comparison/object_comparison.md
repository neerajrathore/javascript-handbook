# Object Comparison in JavaScript

In JavaScript, objects (including arrays and functions) are compared by reference, not by value.

## Comparing Objects:
Even if two objects have the same properties and values, they are not considered equal unless they reference the same object.

```javascript
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Alice' };

console.log(obj1 == obj2);  // false
console.log(obj1 === obj2); // false
```

Here, `obj1` and `obj2` are different objects in memory, so both `==` and `===` return `false`.

## Array Comparison Example:
Arrays are also objects, so they follow the same reference-based comparison rules:

```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2);  // false
```

---
[Next: Deep Comparison](./deep_comparison.md)  
[Previous: Loose vs Strict Equality](./loose_vs_strict.md)  
[Back to README](./README.md)