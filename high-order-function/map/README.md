<!-- #### [Go Back ↩](../README.md) -->
# JavaScript map() Function Explained

The `map()` function is a built-in method on JavaScript arrays that allows you to transform each element of an array using a provided function. It creates a new array with the results of calling the provided function on every element in the original array.

## Syntax

```javascript
let newArray = array.map(callback(currentValue[, index[, array]])[, thisArg])
```

### Parameters
- `callback`: Function that produces an element of the new array
  - `currentValue`: The current element being processed in the array
  - `index` (optional): The index of the current element being processed
  - `array` (optional): The array map() was called upon
- `thisArg` (optional): Value to use as 'this' when executing callback

### Return Value

A new array with each element being the result of the callback function.

## Key Points

1. `map()` does not modify the original array
2. `map()` creates a new array
3. The callback function is called for each element in the array
4. `map()` waits for the callback to finish before moving to the next element

## Examples

### Example 1: Basic Usage - Doubling Numbers

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using a regular function
const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);

// Using an arrow function (more concise)
const doubledNumbersArrow = numbers.map(num => num * 2);

console.log("Doubled numbers (arrow function):", doubledNumbersArrow);
```

Output:
```
Original numbers: [1, 2, 3, 4, 5]
Doubled numbers: [2, 4, 6, 8, 10]
Doubled numbers (arrow function): [2, 4, 6, 8, 10]
```



### Example 2: Using Index Parameter

```javascript
const indexedNumbers = numbers.map((num, index) => {
    return `Index ${index}: ${num}`;
});

console.log("Indexed numbers:", indexedNumbers);
```

Output:
```
Indexed numbers: ["Index 0: 1", "Index 1: 2", "Index 2: 3", "Index 3: 4", "Index 4: 5"]
```




### Example 3: Transforming an Array of Objects

```javascript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
];

const names = people.map(person => person.name);
const agesNextYear = people.map(person => person.age + 1);

console.log("Names:", names);
console.log("Ages next year:", agesNextYear);
```

Output:
```
Names: ["Alice", "Bob", "Charlie", "David"]
Ages next year: [26, 31, 36, 41]
```




### Example 4: Chaining map() with Other Array Methods

```javascript
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfSquaresOfEvenNumbers = numbers2
    .filter(num => num % 2 === 0)  // Keep only even numbers
    .map(num => num * num)         // Square each number
    .reduce((sum, num) => sum + num, 0);  // Sum all squared numbers

console.log("Sum of squares of even numbers:", sumOfSquaresOfEvenNumbers);
```

Output:
```
Sum of squares of even numbers: 220
```

### Example 5: Using map() with Strings

```javascript
const sentence = "Hello, World!";
const charCodes = Array.from(sentence).map(char => char.charCodeAt(0));

console.log("Original sentence:", sentence);
console.log("Character codes:", charCodes);
```

Output:
```
Original sentence: Hello, World!
Character codes: [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]
```


### Example 6: Creating a Reusable Mapping Function

```javascript
function mapWithOperation(arr, operation) {
    return arr.map(operation);
}

const numbers4 = [1, 2, 3, 4, 5];

const squared = mapWithOperation(numbers4, num => num ** 2);
const halved = mapWithOperation(numbers4, num => num / 2);
const asString = mapWithOperation(numbers4, num => num.toString());

console.log("Original numbers:", numbers4);
console.log("Squared:", squared);
console.log("Halved:", halved);
console.log("As strings:", asString);
```

Output:
```
Original numbers: [1, 2, 3, 4, 5]
Squared: [1, 4, 9, 16, 25]
Halved: [0.5, 1, 1.5, 2, 2.5]
As strings: ["1", "2", "3", "4", "5"]
```



## Conclusion

The `map()` function is a powerful and flexible tool in JavaScript for transforming arrays. It allows you to apply a function to each element of an array, creating a new array with the results. This makes it ideal for data transformation tasks, and it's often used in combination with other array methods for more complex operations.

### Key Benefits of Using map()

1. Declarative code: It clearly expresses the intent of the transformation.
2. Immutability: It doesn't modify the original array, promoting safer code.
3. Chainability: It can be easily combined with other array methods.
4. Readability: It often leads to more readable and maintainable code compared to loops.

### Remember

- Always return a value from the callback function to avoid undefined elements.
- Be mindful of performance with large arrays or complex operations.
- Consider using other methods like `forEach()` if you don't need a new array.

Practice using `map()` in various scenarios to become proficient with this powerful method!