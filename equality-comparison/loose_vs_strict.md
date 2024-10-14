<!-- #### [Go Back ↩](./README.md) -->
# Loose Equality (`==`) vs Strict Equality (`===`)

JavaScript provides two ways to compare values: loose equality (`==`) and strict equality (`===`).

## Loose Equality (`==`)
The `==` operator allows type coercion, meaning it tries to convert one value to match the other before making the comparison.

```javascript
console.log(5 == '5');  // true
```

In this example, the string `'5'` is coerced to a number before the comparison, resulting in `true`.

### Type Coercion Examples:
```javascript
console.log(true == 1);  // true
console.log(false == 0); // true
console.log(null == undefined); // true
```

## Strict Equality (`===`)
The `===` operator does not perform type coercion. It compares both value and type.

```javascript
console.log(5 === '5');  // false
```

### Strict Equality Comparison:
```javascript
console.log(true === 1);  // false
console.log(null === undefined);  // false
```

---
[Next: Object Comparison](./object_comparison.md)  
[Back to README](./README.md)