

// Example 1: Basic usage - Filtering even numbers
// -----------------------------------------------

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

// Output:
// Original numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Even numbers: [2, 4, 6, 8, 10]
// Odd numbers: [1, 3, 5, 7, 9]

// In this example, we use filter() to create new arrays containing only even or odd numbers.
// The callback function returns true for elements we want to keep, and false for others.



//------------------------------------------------//----------------------------------------------------------



// Example 2: Using index parameter
// --------------------------------

const indexedFilter = numbers.filter((num, index) => {
    console.log(`Element ${num} at index ${index}`);
    return index % 2 === 0;
});

console.log("Elements at even indexes:", indexedFilter);

// Output:
// Element 1 at index 0
// Element 2 at index 1
// Element 3 at index 2
// ...
// Elements at even indexes: [1, 3, 5, 7, 9]

// Here, we use the optional index parameter to filter elements based on their position in the array.
// We also demonstrate that the callback is called for every element, logging each call.



//------------------------------------------------//----------------------------------------------------------



// Example 3: Filtering an array of objects
// ----------------------------------------

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

// Output:
// People from New York: [{ name: "Alice", age: 25, city: "New York" }, { name: "Charlie", age: 35, city: "New York" }]
// People over 30: [{ name: "Charlie", age: 35, city: "New York" }, { name: "David", age: 40, city: "London" }]

// This example shows how to use filter() with an array of objects,
// allowing us to select objects based on their properties.



//------------------------------------------------//----------------------------------------------------------



// Example 4: Chaining filter() with other array methods
// -----------------------------------------------------

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfSquaresOfEvenNumbers = numbers2
    .filter(num => num % 2 === 0)  // Keep only even numbers
    .map(num => num * num)         // Square each number
    .reduce((sum, num) => sum + num, 0);  // Sum all squared numbers

console.log("Sum of squares of even numbers:", sumOfSquaresOfEvenNumbers);

// Output:
// Sum of squares of even numbers: 220

// This example demonstrates how filter() can be chained with other array methods
// like map() and reduce() to perform complex operations in a readable way.



//------------------------------------------------//----------------------------------------------------------



// Example 5: Filtering out falsy values
// -------------------------------------

const mixedArray = [0, 1, false, 2, '', 3, null, undefined, 4, NaN];

const truthyValues = mixedArray.filter(Boolean);

console.log("Original array:", mixedArray);
console.log("Truthy values:", truthyValues);

// Output:
// Original array: [0, 1, false, 2, "", 3, null, undefined, 4, NaN]
// Truthy values: [1, 2, 3, 4]

// Here, we use the Boolean function as the callback to filter out all falsy values.
// This is a concise way to remove falsy values from an array.



//------------------------------------------------//----------------------------------------------------------



// Example 6: Creating a search function
// -------------------------------------

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(arr, query) {
    return arr.filter(el => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'ap'));  // ["apple"]
console.log(filterItems(fruits, 'an'));  // ["banana", "mango", "orange"]

// This example shows how to create a simple search function using filter().
// It's case-insensitive and returns all items that include the search query.



//------------------------------------------------//----------------------------------------------------------



// Example 7: Using thisArg parameter
// ----------------------------------

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

// Output:
// Filtered numbers: [2, 3, 4]

// In this example, we use the thisArg parameter to specify the context
// in which the callback function should be executed. This allows us to
// use methods of an object as the callback function.



//------------------------------------------------//----------------------------------------------------------



// Example 8: Removing duplicate values from an array
// --------------------------------------------------

const numbers3 = [1, 2, 2, 3, 4, 4, 5, 5, 5];

const uniqueNumbers = numbers3.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

console.log("Original array:", numbers3);
console.log("Array with unique values:", uniqueNumbers);

// Output:
// Original array: [1, 2, 2, 3, 4, 4, 5, 5, 5]
// Array with unique values: [1, 2, 3, 4, 5]

// This example uses filter() to remove duplicate values from an array.
// It keeps only the first occurrence of each value.



//------------------------------------------------//----------------------------------------------------------



// Example 9: Implementing pagination
// ----------------------------------

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

// Output:
// Page 1: ["Item 1", "Item 2", ..., "Item 10"]
// Page 5: ["Item 41", "Item 42", ..., "Item 50"]

// This example demonstrates how to use filter() to implement basic pagination functionality.

