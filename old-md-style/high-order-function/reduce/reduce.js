//Example 1: Sum of Array Elements


const num = [1, 2, 3, 4, 5];

// Using reduce to sum up all num
const sum = num.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
});

console.log("Sum:", sum);

// Using reduce with an initial value
const sumWithInitial = num.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 10);

console.log("Sum with initial value:", sumWithInitial);

/*
Output:

Accumulator: 1, Current Value: 2
Accumulator: 3, Current Value: 3
Accumulator: 6, Current Value: 4
Accumulator: 10, Current Value: 5
Sum: 15
Accumulator: 10, Current Value: 1
Accumulator: 11, Current Value: 2
Accumulator: 13, Current Value: 3
Accumulator: 16, Current Value: 4
Accumulator: 20, Current Value: 5
Sum with initial value: 25
*/

//This example demonstrates how `reduce()` can be used to sum up all elements in an array. It also shows the difference when an initial value is provided.



//Example 2: Flattening an Array of Arrays


const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = arrayOfArrays.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: [${accumulator}], Current Value: [${currentValue}]`);
    return accumulator.concat(currentValue);
});

console.log("Flattened array:", flattenedArray);

/*
Output:

Accumulator: [1,2], Current Value: [3,4]
Accumulator: [1,2,3,4], Current Value: [5,6]
Flattened array: [1, 2, 3, 4, 5, 6]
```

This example shows how `reduce()` can be used to flatten an array of arrays into a single array.
*/



//Example 3: Counting Occurrences of Array Elements


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, currentFruit) => {
    console.log(`Accumulator:`, accumulator, `Current Fruit: ${currentFruit}`);
    accumulator[currentFruit] = (accumulator[currentFruit] || 0) + 1;
    return accumulator;
}, {});

console.log("Fruit count:", fruitCount);


/*
Output:
```
Accumulator: {} Current Fruit: apple
Accumulator: { apple: 1 } Current Fruit: banana
Accumulator: { apple: 1, banana: 1 } Current Fruit: apple
Accumulator: { apple: 2, banana: 1 } Current Fruit: orange
Accumulator: { apple: 2, banana: 1, orange: 1 } Current Fruit: banana
Accumulator: { apple: 2, banana: 2, orange: 1 } Current Fruit: apple
Fruit count: { apple: 3, banana: 2, orange: 1 }
```

This example demonstrates how `reduce()` can be used to count occurrences of elements in an array, resulting in an object where keys are the unique elements and values are their counts.
*/


//Example 4: Grouping Objects by a Property


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 30 }
];

const groupedByAge = people.reduce((accumulator, person) => {
    console.log(`Accumulator:`, accumulator, `Current Person:`, person);
    (accumulator[person.age] = accumulator[person.age] || []).push(person);
    return accumulator;
}, {});

console.log("Grouped by age:", groupedByAge);

/*
Output:
```
Accumulator: {} Current Person: { name: 'Alice', age: 25 }
Accumulator: { '25': [ { name: 'Alice', age: 25 } ] } Current Person: { name: 'Bob', age: 30 }
Accumulator: { '25': [ { name: 'Alice', age: 25 } ], '30': [ { name: 'Bob', age: 30 } ] } Current Person: { name: 'Charlie', age: 35 }
Accumulator: { '25': [ { name: 'Alice', age: 25 } ], '30': [ { name: 'Bob', age: 30 } ], '35': [ { name: 'Charlie', age: 35 } ] } Current Person: { name: 'David', age: 25 }
Accumulator: { '25': [ { name: 'Alice', age: 25 }, { name: 'David', age: 25 } ], '30': [ { name: 'Bob', age: 30 } ], '35': [ { name: 'Charlie', age: 35 } ] } Current Person: { name: 'Eve', age: 30 }
Grouped by age: {
  '25': [ { name: 'Alice', age: 25 }, { name: 'David', age: 25 } ],
  '30': [ { name: 'Bob', age: 30 }, { name: 'Eve', age: 30 } ],
  '35': [ { name: 'Charlie', age: 35 } ]
}
```

This example shows how `reduce()` can be used to group an array of objects by a specific property.
*/


//Example 5: Implementing Map and Filter with Reduce


const numbers = [1, 2, 3, 4, 5];

// Map with reduce
const doubled = numbers.reduce((accumulator, current) => {
    console.log(`Accumulator: [${accumulator}], Current: ${current}`);
    accumulator.push(current * 2);
    return accumulator;
}, []);

console.log("Doubled:", doubled);

// Filter with reduce
const evens = numbers.reduce((accumulator, current) => {
    console.log(`Accumulator: [${accumulator}], Current: ${current}`);
    if (current % 2 === 0) {
        accumulator.push(current);
    }
    return accumulator;
}, []);

console.log("Evens:", evens);

/*
Output:
```
Accumulator: [], Current: 1
Accumulator: [2], Current: 2
Accumulator: [2,4], Current: 3
Accumulator: [2,4,6], Current: 4
Accumulator: [2,4,6,8], Current: 5
Doubled: [2, 4, 6, 8, 10]
Accumulator: [], Current: 1
Accumulator: [], Current: 2
Accumulator: [2], Current: 3
Accumulator: [2], Current: 4
Accumulator: [2,4], Current: 5
Evens: [2, 4]
```

This example demonstrates how `reduce()` can be used to implement the functionality of `map()` and `filter()`.

*/
//Example 6: Piping Functions


function pipe(...functions) {
    return functions.reduce((acc, fn) => (...args) => fn(acc(...args)));
}

const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

const compute = pipe(double, increment, square);

console.log("Result of piped functions:", compute(3));

/*
Output:
```
Result of piped functions: 49
```
This advanced example shows how `reduce()` can be used to create a function composition utility. It demonstrates the power of `reduce()` in functional programming paradigms.
*/