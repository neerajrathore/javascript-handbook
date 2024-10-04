#### [Go Back ↩](../README.md)
## arrays

- List of Values: Arrays store multiple values in a single variable.
- Type: Arrays can contain various types of values (numbers, strings, objects, etc.).
- Purpose: They help manage lists of values efficiently.

```javascript
const myArray = [10, 20, 30];
console.log(myArray); // output : [10, 20, 30]

console.log(myArray[0]) // This represents the values positions EX: 10

myArray[0] = 99; // We can change the values in array 

console.log(myArray); // Output: [99, 20, 30]
```

### Syntax rule of arrays:
```javascript
[1, 'hello', true, {name: 'socks'}, [1, 2, 3]];

console.log(typeof [1, 2])  // Output: object

console.log(Array.isArray([1, 2])) //Output:  true
```

- IMP Note: An array is an Object (Its a special type of object)

### Arrays have properties and methods 
```javascript
console.log(myArray.length) // length of the array this is property  
// Output: 3

//push() Method:
myArray.push(100) // Adds the value to the end of the array
console.log(myArray) // [99, 20, 30, 100] 

//splice() Method:
myArray.splice(0,1);
console.log(myArray) // [20, 30, 100]
	    // This removes a value from an array
        // 1. index we want to remove
        // 2. Number of values to remove
```

### Create a Todo List Project Version 1
Steps(Algorithm):
- Create Array to store Todos
- When we click “Add”,
- Get from the textbox
- Add it to Array
- console.log() the Array

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Todo List</title>  
  </head>   
  <body>
    <p>Todo List Practice 1</p>

    <input placeholder="Todo name" class="js-name-input"> 

    <button onclick="addTodo()">Add</button>

    <script>
		    const todoList = [];

				function addTodo() {
				    const inputElement = document.querySelector('.js-name-input')
				
				    const name = inputElement.value;
				    
				    todoList.push(name)
				    console.log(todoList)
				
				    inputElement.value = '';
				}
    </script>

  </body>
</html> 
```

### Arrays Detail
- Arrays are References
```javascript
    const array1 = [1, 2, 3];
const array2 = array1;
// both of this arrays are pointing to same references

array2.push(4);
console.log(array1); // Both will have same value [1, 2, 3, 4]
console.log(array2); // Both will have same value [1, 2, 3, 4]

//to create a copy of this array
const array1 = [1, 2, 3];
const array2 = array1.slice(); // slice create the copy of values
array2.push(4) // This line will only affect array2
console.log(array1) // This will give you [1, 2, 3]
console.log(array2) // This will give you [1, 2, 3, 4]


//This is shortcut Destructuring to get value out of an array
const [firstValue, secondValue] = [1, 2, 3]
```

[🔼 Back to top](#arrays)