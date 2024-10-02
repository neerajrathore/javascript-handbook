// Example 1: Basic usage - Doubling numbers
// -----------------------------------------

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

// Output:
// Original numbers: [1, 2, 3, 4, 5]
// Doubled numbers: [2, 4, 6, 8, 10]
// Doubled numbers (arrow function): [2, 4, 6, 8, 10]

// In this example, we use map() to create a new array where each number
// is doubled. Note how the original array remains unchanged.



//------------------------------------------------//----------------------------------------------------------




// Example 2: Using index parameter
// --------------------------------

const indexedNumbers = numbers.map((num, index) => {
    return `Index ${index}: ${num}`;
});

console.log("Indexed numbers:", indexedNumbers);

// Output:
// Indexed numbers: ["Index 0: 1", "Index 1: 2", "Index 2: 3", "Index 3: 4", "Index 4: 5"]

// Here, we use the optional index parameter to create strings that include
// both the index and value of each element.



//------------------------------------------------//----------------------------------------------------------




// Example 3: Transforming an array of objects
// -------------------------------------------

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

// Output:
// Names: ["Alice", "Bob", "Charlie", "David"]
// Ages next year: [26, 31, 36, 41]

// In this example, we use map() to extract specific properties from an array of objects
// and to perform calculations on those properties.



//------------------------------------------------//----------------------------------------------------------




// Example 4: Chaining map() with other array methods
// --------------------------------------------------

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfSquaresOfEvenNumbers = numbers2
    .filter(num => num % 2 === 0)  // Keep only even numbers
    .map(num => num * num)         // Square each number
    .reduce((sum, num) => sum + num, 0);  // Sum all squared numbers

console.log("Sum of squares of even numbers:", sumOfSquaresOfEvenNumbers);

// Output:
// Sum of squares of even numbers: 220

// This example demonstrates how map() can be chained with other array methods
// like filter() and reduce() to perform complex operations in a readable way.



//------------------------------------------------//----------------------------------------------------------




// Example 5: Using map() with Strings
// -----------------------------------

const sentence = "Hello, World!";
const charCodes = Array.from(sentence).map(char => char.charCodeAt(0));

console.log("Original sentence:", sentence);
console.log("Character codes:", charCodes);

// Output:
// Original sentence: Hello, World!
// Character codes: [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]

// Here, we convert a string to an array using Array.from(), then use map()
// to transform each character into its ASCII code.



//------------------------------------------------//----------------------------------------------------------




// Example 6: Handling undefined and null values
// ---------------------------------------------

const mixedArray = [1, undefined, 2, null, 3, 4, undefined, 5];

const cleanedArray = mixedArray.map(item => {
    if (item === undefined) return 'Undefined';
    if (item === null) return 'Null';
    return item;
});

console.log("Mixed array:", mixedArray);
console.log("Cleaned array:", cleanedArray);

// Output:
// Mixed array: [1, undefined, 2, null, 3, 4, undefined, 5]
// Cleaned array: [1, "Undefined", 2, "Null", 3, 4, "Undefined", 5]

// This example shows how map() can be used to handle and transform
// undefined and null values in an array.

// Example 7: Using thisArg parameter
// ----------------------------------

const multipler = {
    factor: 2,
    multiply: function(num) {
        return num * this.factor;
    }
};

const numbers3 = [1, 2, 3, 4, 5];
const multipliedNumbers = numbers3.map(multipler.multiply, multipler);

console.log("Original numbers:", numbers3);
console.log("Multiplied numbers:", multipliedNumbers);

// Output:
// Original numbers: [1, 2, 3, 4, 5]
// Multiplied numbers: [2, 4, 6, 8, 10]

// In this example, we use the thisArg parameter to specify the context
// in which the callback function should be executed. This allows us to
// use methods of an object as the callback function.



//------------------------------------------------//----------------------------------------------------------




// Example 8: Creating a reusable mapping function
// -----------------------------------------------

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

// Output:
// Original numbers: [1, 2, 3, 4, 5]
// Squared: [1, 4, 9, 16, 25]
// Halved: [0.5, 1, 1.5, 2, 2.5]
// As strings: ["1", "2", "3", "4", "5"]

// This example demonstrates how to create a reusable function that applies
// map() with different operations, promoting code reusability.
