<!-- #### [Go Back ↩](../README.md) -->

# JavaScript Arrays

Arrays in JavaScript are a collection of elements, which can be of any type, including numbers, strings, objects, or even other arrays. They are ordered, mutable, and provide numerous built-in methods to manipulate and interact with the data. Here we will discuss about the various methods that can be used in Javascript arrays


### Creating Arrays

You can create an array using the array literal notation or the `Array` constructor.

#### Example:

```javascript
// Using array literal notation
const fruits = ['apple', 'banana', 'cherry'];

// Using the Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
```

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25"> forEach()

The `forEach()` method in JavaScript is used to execute a provided function once for each array element. It is a higher-order function that allows us to iterate over the elements of an array and perform operations on each element without creating a new array.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Using forEach to log each fruit to the console
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});
```
#### Output:
```
Fruit 1: apple
Fruit 2: banana
Fruit 3: cherry
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">concat()

The `concat()` method in JavaScript is used to merge two or more arrays into a new array. This method does not change the existing arrays but instead returns a new array that combines the elements of the provided arrays.

#### Example:

```javascript
const fruits1 = ['apple', 'banana'];
const fruits2 = ['cherry', 'date'];
const fruits3 = ['fig', 'grape'];

// Concatenating
const allFruits = fruits1.concat(fruits2, fruits3);

console.log(allFruits);

```
#### Output:
```
 ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
```
<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">find()

The `find()` method in JavaScript is used to search through an array and return the value of the first element that satisfies a provided testing function. If no elements satisfy the testing function, undefined is returned.

#### Example:

```javascript
const numbers = [4, 9, 16, 25];

// Using find to locate the first number greater than 10
const found = numbers.find(num => num > 10);

console.log(found);

```
#### Output:
```
16
```

Using find() when no mathing elements are present
```javascript
const numbers = [1, 2, 3, 4];

// Attempting to find a number greater than 10
const result = numbers.find(num => num > 10);

console.log(result);
```
#### Output:
```
undefined
```
<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">findIndex()

The `findIndex()` method in JavaScript is used to search through an array and return the index of the first element that satisfies a provided testing function. If no elements satisfy the testing function, -1 is returned.

#### Example:

```javascript
const numbers = [4, 9, 16, 25];

// Using findIndex to locate the index of the first number greater than 10
const index = numbers.findIndex(num => num > 10);

console.log(index);

```
#### Output:
```
2
```

#### Example
Using findIndex() when no mathing elements are present
```javascript
const numbers = [1, 2, 3, 4];

// Attempting to find the index of a number greater than 10
const index = numbers.findIndex(num => num > 10);

console.log(index);
```

#### Output
```
-1
```
<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">indexOf()

The `indexOf()` method in JavaScript is used to search for a specified element in an array and returns its first index. If the element is not found, it returns -1.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry', 'banana'];

// Using indexOf to find the index of 'banana'
const index = fruits.indexOf('banana');

console.log(index);


```
#### Output:
```
1
```

#### Example
Using indexOf() when no mathing elements are present
```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Attempting to find the index of 'grape'
const index = fruits.indexOf('grape');

console.log(index);
```

#### Output
```
-1
```
<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">lastIndexOf()

The `lastIndexOf()` method in JavaScript is used to search for a specified element in an array and returns the index of the last occurrence of that element. If the element is not found, it returns -1.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry', 'banana'];

// Using lastIndexOf to find the last index of 'banana'
const index = fruits.lastIndexOf('banana');

console.log(index);


```
#### Output:
```
3
```

#### Example
Using lastIndexOf() when no mathing elements are present
```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Attempting to find the last index of 'grape'
const index = fruits.lastIndexOf('grape');

console.log(index);
```

#### Output
```
-1
```
<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">some()

The `some()` method in JavaScript tests whether at least one element in the array passes the test implemented by the provided callback function. It returns `true` if it finds an element that satisfies the condition; otherwise, it returns `false`.

#### Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using some to check if there are any numbers greater than 3
const hasGreaterThanThree = numbers.some(num => num > 3);

console.log(hasGreaterThanThree);
```
#### Output:
```
true
```
#### Example
Using some() when no elements satisfy the condition
```javascript
const fruits = ['apple', 'banana', 'cherry'];

const numbers = [1, 2, 3];

// Checking if there are any numbers greater than 5
const hasGreaterThanFive = numbers.some(num => num > 5);

console.log(hasGreaterThanFive);
```

#### Output
```
false
```
<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">every()

The `every()` method in JavaScript tests whether all elements in the array pass the test implemented by the provided callback function. It returns `true` if all elements satisfy the condition; otherwise, it returns `false`.

#### Example:

```javascript
const numbers = [2, 4, 6, 8, 10];

// Using every to check if all numbers are even
const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven);
```
#### Output:
```
true
```
#### Example
Using every() when any element does not satisfy the condition
```javascript
const numbers = [2, 4, 5, 8];

// Checking if all numbers are even
const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven);
```

#### Output
```
false
```
<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">includes()

The `includes()` method in JavaScript is used to determine whether an array contains a certain value among its entries. It returns `true` if the value is found; otherwise, it returns `false`.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Checking if 'banana' is in the array
const hasBanana = fruits.includes('banana');

console.log(hasBanana);
```
#### Output:
```
true
```
#### Example
Using includes() when specified element is not found
```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Checking if 'grape' is in the array
const hasGrape = fruits.includes('grape');

console.log(hasGrape);
```

#### Output
```
false
```
<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">push()

The `push()` method in JavaScript is used to add one or more elements to the end of an array. This method modifies the original array and returns the new length of the array after the elements have been added.

#### Example:

```javascript
const numbers = [1, 2, 3];

// Using push to add 4 and 5
const newLength = numbers.push(4, 5);

console.log(numbers);
console.log(newLength);
```
#### Output:
```
[1, 2, 3, 4, 5]
5
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">unshift()

The `unshift()` method in JavaScript is used to add one or more elements to the beginning of an array. This method modifies the original array and returns the new length of the array after the elements have been added.

#### Example:

```javascript
const numbers = [3, 4, 5];

// Using unshift to add 1 and 2 to the beginning of the array
const newLength = numbers.unshift(1, 2);

console.log(numbers);
console.log(newLength);

```
#### Output:
```
[1, 2, 3, 4, 5]
5
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">pop()

The `pop()` method in JavaScript is used to remove the last element from an array. This method modifies the original array and returns the removed element. If the array is empty, it returns `undefined`.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Using pop to remove the last element
const removedFruit = fruits.pop();

console.log(removedFruit);
console.log(fruits);

```
#### Output:
```
'cherry'
['apple', 'banana']
```

#### Example:
Using pop() on an empty array
```javascript
const emptyArray = [];

// Attempting to pop from an empty array
const removedElement = emptyArray.pop();

console.log(removedElement);
console.log(emptyArray);
```
#### Output:
```
undefined
[]
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">shift()

The `shift()` method in JavaScript is used to remove the first element from an array. This method modifies the original array and returns the removed element. If the array is empty, it returns `undefined`.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Using shift to remove the first element
const removedFruit = fruits.shift();

console.log(removedFruit);
console.log(fruits);
```
#### Output:
```
'apple'
['banana', 'cherry']
```

#### Example:
Using shifht() on an empty array
```javascript
const emptyArray = [];

// Attempting to shift from an empty array
const removedElement = emptyArray.shift();

console.log(removedElement);
console.log(emptyArray);
```
#### Output:
```
undefined
[]
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">toString()

The `toString()` method in JavaScript is used to convert an array to a string representation. It joins all the elements of the array into a single string, separated by commas. This method does not modify the original array.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Using toString to convert the array to a string
const fruitString = fruits.toString();

console.log(fruitString);

```
#### Output:
```
'apple,banana,cherry'
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">join()

The `join()` method in JavaScript is used to concatenate all elements of an array into a single string, with a specified separator between each element. If no separator is specified, the default is a comma.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Using join to convert the array to a string with a hyphen separator
const fruitStringWithHyphen = fruits.join('-');

console.log(fruitStringWithHyphen);
```
#### Output:
```
'apple-banana-cherry'
```

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Using join to convert the array to a string without separator
const fruitStringWithoutSeparator = fruits.join('');

console.log(fruitStringWithoutSeparator);
```
#### Output:
```
'applebananacherry'
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">slice()

The `slice()` method in JavaScript is used to create a shallow copy of a portion of an array into a new array object. This method can take two arguments: the starting index and the ending index (exclusive). It does not modify the original array.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Using slice to create a new array from index 1 to 3 (exclusive)
const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits);
console.log(fruits);
```
#### Output:
```
['banana', 'cherry']
['apple', 'banana', 'cherry', 'date'] 
```
#### Example:
Omitting the end index
```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Using slice to create a new array from index 2 to the end
const slicedFruits = fruits.slice(2);

console.log(slicedFruits);

```
#### Output:
```
['cherry', 'date'] 
```
#### Example:
Using negative indices
```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Using slice with negative indices to get the last two elements
const lastTwoFruits = fruits.slice(-2);

console.log(lastTwoFruits); // Output: ['cherry', 'date']
```
#### Output:
```
['cherry', 'date'] 
```
<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">splice()

The `splice()` method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method modifies the original array and returns an array containing the removed elements.

#### Example:

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Using splice to remove 2 elements starting from index 1
const removedFruits = fruits.splice(1, 2);

console.log(removedFruits);
console.log(fruits);

```
#### Output:
```
['banana', 'cherry']
['apple', 'date']
```

#### Example:
Using splice() to add new elements without removing any existing element.
```javascript
const fruits = ['apple', 'banana', 'date'];

// Using splice to add 'cherry' at index 1 without removing elements
fruits.splice(1, 0, 'cherry');

console.log(fruits);


```
#### Output:
```
['apple', 'cherry', 'banana', 'date']
```

#### Example:
Using splice() to replace existing element.
```javascript
const fruits = ['apple', 'banana', 'date'];

// Using splice to replace 'banana' with 'cherry'
fruits.splice(1, 1, 'cherry');

console.log(fruits);

```
#### Output:
```
['apple', 'cherry', 'date']
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">reverse()

The `reverse()` method in JavaScript is used to reverse the elements of an array in place. This means that the first element becomes the last, the second element becomes the second to last, and so on. The method modifies the original array and returns a reference to the same array.

#### Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Reversing the numeric array
numbers.reverse();

console.log(numbers);
```
#### Output:
```
[5, 4, 3, 2, 1]
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">flat()

The `flat()` method in JavaScript is used to create a new array with all sub-array elements concatenated into it recursively up to a specified depth. This method is useful for flattening nested arrays into a single array.

#### Example:

```javascript
const nestedArray = [1, 2, [3, 4]];

// Flattening the array by one level
const flatArray = nestedArray.flat();

console.log(flatArray);

```
#### Output:
```
[1, 2, 3, 4]
```

#### Example:
We can even specify the depth to flat nested arrays more than one level deep
```javascript
const deeplyNestedArray = [1, [2, [3, 4], 5], 6];

// Flattening the array by two levels
const flatArray = deeplyNestedArray.flat(2);

console.log(flatArray);

```
#### Output:
```
[1, 2, 3, 4, 5, 6]
```

<hr>

### <img src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/javascript.gif" height="25" width="25">flatMap()

The `flatMap()` method in JavaScript is a combination of the `map()` method and the `flat()` method. It first maps each element using a mapping function and then flattens the result into a new array. This method is particularly useful when you want to transform each element of an array and flatten the resulting arrays in a single operation.

#### Example:

```javascript
const numbers = [1, 2, 3];

// Using flatMap to square each number and flatten the result
const result = numbers.flatMap(num => [num, num * num]);

console.log(result);

```
#### Output:
```
[1, 1, 2, 4, 3, 9]
```

#### Example:
flatMap() can also be used to handle nested arrays
```javascript
const nestedArrays = [[1, 2], [3, 4]];

// Using flatMap to flatten and concatenate arrays
const flatResult = nestedArrays.flatMap(arr => arr);

console.log(flatResult);
```
#### Output:
```
[1, 2, 3, 4]
```
<hr>