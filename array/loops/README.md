## loops

### Definition
- Loops allow us to run our code repeatedly.

### Types of Loops

#### 1. While Loop
- A `while` loop runs as long as the specified condition is true.

```javascript
// while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i = i + 1; // Increment the counter
}
```

### 2. For Loop
- A `for` loop is typically used when the number of iterations is known.

```javascript
// For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i); // Output: 1, 2, 3, 4, 5
}
```
### Looping Through an array

- Go through each value of an array one by one
- Do something with each value

``` javascript
const todoList = [
    'make dinner',
    'wash dishes',
    'watch youtube'
];

// Iterating through the todoList array
for (let i = 0; i < todoList.length; i++) {
		const value =  todoList[i]; // Access the current value
	  console.log(value);  // Output the current todo item
}
```
### Explanation:
1. Array Declaration: `todoList` is an array containing three string items.
2. For Loop: The loop iterates through each index of the `todoList` array:
    - `i` is initialized to 0 and increments until it reaches the length of the array.
    - `todoList[i]` accesses the current todo item at index `i`.
    - `console.log(value)` outputs the current todo item to the console.


## Calculating Total and Doubling an Array in JavaScript

### Problem Statement
Given an array of numbers `[1, 1, 3]`, we want to calculate the total and create a new array where each number is doubled.

### Example Code

```javascript
const nums = [1, 1, 3];
let total = 0;

// Calculating the total
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num; // Adding each number to the total
}
console.log(total); // Output: 5

// Doubling the array
const numsDoubled = [];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2); // Doubling each number and adding to the new array
}
console.log(numsDoubled); // Output: [2, 2, 6]
```

### Create a Todo List Project Version 2
Steps(Algorithm):
- Loop through the array
- Create some HTML code for each todo
- Put the HTML code on web page

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

    <div class="js-todo-list"></div>

    <script>
		const todoList = ['make dinner', 'wash dishes'];
		
		function renderTodoList() {
		    let todoListHTML = '';
		
		    for(let i = 0; i < todoList.length; i++) {
		        const todo = todoList[i];
		        const html = `<p>${todo}</p>`;
		        todoListHTML += html;
		    }
		
		    document.querySelector('.js-todo-list')
		        .innerHTML = todoListHTML;  
		}
		function addTodo() {
		    const inputElement = document.querySelector('.js-name-input')
		
		    const name = inputElement.value;
		    
		    todoList.push(name)
		    console.log(todoList)
		
		    inputElement.value = '';
		
		    renderTodoList();
		}
    </script>

  </body>
</html> 
```


### Main Idea of JavaScript
1. Save the data
2. Generate the HTML
3. Make it interactive


[🔼 Back to top](#loops)