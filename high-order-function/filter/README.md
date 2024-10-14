<!-- #### [Go Back ↩](../README.md) -->
# JavaScript filter() Function Explained

The `filter()` function is a built-in method on JavaScript arrays that creates a new array with all elements that pass the test implemented by the provided function. It's a powerful tool for selecting specific elements from an array based on certain criteria.

## Syntax

```javascript
let newArray = array.filter(callback(element[, index[, array]])[, thisArg])
```

### Parameters

- `callback`: Function to test each element of the array
  - `element`: The current element being processed in the array
  - `index` (optional): The index of the current element being processed
  - `array` (optional): The array filter() was called upon
- `thisArg` (optional): Value to use as 'this' when executing callback

### Return Value

A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

## Key Points

1. `filter()` does not modify the original array
2. `filter()` creates a new array
3. The callback function should return true to keep the element, false otherwise
4. `filter()` calls the callback function once for each element in the array

## Examples

### Example 1: Basic Usage - Filtering Even Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using a regular function
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Original numbers:", numbers);
console.log("Even numbers:", evenNumbers);

// Using an arrow function (more concise)
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log("Odd numbers:", oddNumbers);
```

Output:
```
Original numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Even numbers: [2, 4, 6, 8, 10]
Odd numbers: [1, 3, 5, 7, 9]
```

### Example 2: Using Index Parameter

```javascript
const indexedFilter = numbers.filter((num, index) => {
    console.log(`Element ${num} at index ${index}`);
    return index % 2 === 0;
});

console.log("Elements at even indexes:", indexedFilter);
```

Output:
```
Element 1 at index 0
Element 2 at index 1
Element 3 at index 2
...
Elements at even indexes: [1, 3, 5, 7, 9]
```

### Example 3: Filtering an Array of Objects

```javascript
const people = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "San Francisco" },
    { name: "Charlie", age: 35, city: "New York" },
    { name: "David", age: 40, city: "London" }
];

const newYorkers = people.filter(person => person.city === "New York");
const over30 = people.filter(person => person.age > 30);

console.log("People from New York:", newYorkers);
console.log("People over 30:", over30);
```

Output:
```
People from New York: [{ name: "Alice", age: 25, city: "New York" }, { name: "Charlie", age: 35, city: "New York" }]
People over 30: [{ name: "Charlie", age: 35, city: "New York" }, { name: "David", age: 40, city: "London" }]
```

### Example 4: Chaining filter() with Other Array Methods

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

### Example 5: Filtering Out Falsy Values

```javascript
const mixedArray = [0, 1, false, 2, '', 3, null, undefined, 4, NaN];

const truthyValues = mixedArray.filter(Boolean);

console.log("Original array:", mixedArray);
console.log("Truthy values:", truthyValues);
```

Output:
```
Original array: [0, 1, false, 2, "", 3, null, undefined, 4, NaN]
Truthy values: [1, 2, 3, 4]
```

### Example 6: Creating a Search Function

```javascript
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(arr, query) {
    return arr.filter(el => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'ap'));  // ["apple"]
console.log(filterItems(fruits, 'an'));  // ["banana", "mango", "orange"]
```

### Example 7: Using thisArg Parameter

```javascript
const numbersToFilter = [1, 2, 3, 4, 5];

const filterObj = {
    min: 2,
    max: 4,
    filterFunc: function(num) {
        return num >= this.min && num <= this.max;
    }
};

const filteredNumbers = numbersToFilter.filter(filterObj.filterFunc, filterObj);

console.log("Filtered numbers:", filteredNumbers);
```

Output:
```
Filtered numbers: [2, 3, 4]
```

### Example 8: Removing Duplicate Values from an Array

```javascript
const numbers3 = [1, 2, 2, 3, 4, 4, 5, 5, 5];

const uniqueNumbers = numbers3.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

console.log("Original array:", numbers3);
console.log("Array with unique values:", uniqueNumbers);
```

Output:
```
Original array: [1, 2, 2, 3, 4, 4, 5, 5, 5]
Array with unique values: [1, 2, 3, 4, 5]
```

### Example 9: Implementing Pagination

```javascript
const allItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

function getPage(items, pageNumber, itemsPerPage) {
    return items.filter((_, index) => {
        const start = (pageNumber - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return index >= start && index < end;
    });
}

console.log("Page 1:", getPage(allItems, 1, 10));
console.log("Page 5:", getPage(allItems, 5, 10));
```

Output:
```
Page 1: ["Item 1", "Item 2", ..., "Item 10"]
Page 5: ["Item 41", "Item 42", ..., "Item 50"]
```

## Conclusion

The `filter()` function is a powerful tool in JavaScript for creating new arrays based on certain conditions. It's particularly useful for:

1. Removing unwanted elements from an array
2. Selecting specific elements based on complex criteria
3. Creating subsets of arrays
4. Implementing search functionality
5. Data transformation when combined with other array methods

### Key Benefits of Using filter()

1. Declarative code: It clearly expresses the intent of the filtering operation
2. Immutability: It doesn't modify the original array, promoting safer code
3. Chainability: It can be easily combined with other array methods
4. Readability: It often leads to more readable and maintainable code compared to loops

### Remember

- Always return a boolean value from the callback function
- Be mindful of performance with large arrays or complex filtering conditions
- Consider using other methods like `find()` if you only need the first matching element

Practice using `filter()` in various scenarios to become proficient with this versatile method!