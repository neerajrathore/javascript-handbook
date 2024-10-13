## Todo-List Project

### In this project, we're enhancing our Todo List application with the following features:

- Styled UI: Using CSS for a clean layout.
- Add Tasks: Users can enter a task name and due date.
- Display Tasks: Tasks are dynamically listed with their due dates.
- Delete Functionality: Users can remove tasks from the list easily.


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Todo List</title>  
    <style>
	    body {
			    font-family: Arial;
			}
			
			.todo-grid,
			.todo-input-grid {
			    display: grid;
			    grid-template-columns: 200px 150px 100px;
			    margin-top: 20px;
			    column-gap: 10px;
			    row-gap: 10px;
			    align-items: center;
			}
			
			.todo-input-grid {
			    margin-bottom: 10px;
			    align-items: stretch;
			}
			
			.name-input,
			.due-date-input {
			    font-size: 15px;
			    padding: 6px;
			}
			
			.add-todo-button {
			    background-color: green;
			    color: white;
			    border: none;
			    font-size: 15px;
			    cursor: pointer;
			}
			
			.delete-todo-button {
			    background-color: darkred;
			    color: white;
			    border: none;
			    font-size: 15px;
			    cursor: pointer;
			    padding: 10px 10px;
			}
    </style>
  </head>   
  <body>
    <p>Todo List Practice 1</p>

    <div class="todo-input-grid">
      <input placeholder="Todo name" class="js-name-input name-input"> 

      <input type="date" class="js-due-date-input due-date-input">

      <button onclick="addTodo()" class="add-todo-button">Add</button>

    </div>

    <div class="js-todo-list todo-grid"></div>

    <script>
	    const todoList = [{
			                    name: 'make dinner',
			                    dueDate: '09-24-2024'
			                 }, { 
			                    name: 'wash dishes',
			                    dueDate: '09-24-2024'
			                 }];


			function renderTodoList() {
			    let todoListHTML = '';
			
			    for(let i = 0; i < todoList.length; i++) {
						  const todoObject = todoList[i];
			        //const name = todoObject.name;
			        //const dueDate = todoObject.dueDate;
			        const {name, dueDate} = todoObject;  // destructuring
			        const html = `
			        <div>${name}</div>
			        <div>${dueDate}</div>
			        <button onclick="
			            todoList.splice(${i}, 1);
			            renderTodoList();
			        " class="delete-todo-button">delete</button>
			        `;
			        todoListHTML += html;
			    }
			
			    document.querySelector('.js-todo-list')
			        .innerHTML = todoListHTML;  
			}
			function addTodo() {
			    const inputElement = document.querySelector('.js-name-input')
			
			    const name = inputElement.value;
			    
			    const dateInputElement = document.querySelector('.js-due-date-input');
			    
			    const dueDate = dateInputElement.value;    

			    todoList.push({
			        //name: name, 
			        //dueDate: dueDate
			        name, // does the same thing above
			        dueDate // shorthand property
			    })
			    console.log(todoList)
			
			    inputElement.value = '';
			
			    renderTodoList();
			}
    </script>

  </body>
</html> 
```

[🔼 Back to top](#todo-list-project)