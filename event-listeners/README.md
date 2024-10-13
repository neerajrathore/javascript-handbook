
# Event Listeners in JavaScript

## Overview

Event listeners are a fundamental part of web development in JavaScript, allowing developers to create interactive web applications. An event listener is a procedure in JavaScript that waits for an event to occur and executes a specified function when that event occurs. Understanding event listeners and how to use them effectively is crucial for enhancing user experiences and creating dynamic web pages.

## What is an Event?

An event is an action or occurrence that can be detected by the browser. Common types of events include:

- **Mouse events**: 
  - `'click'`: Triggered when an element is clicked.
  - `'dblclick'`: Triggered when an element is double-clicked.
  - `'mouseover'`: Triggered when the mouse pointer moves over an element.
  - `'mouseout'`: Triggered when the mouse pointer leaves an element.

- **Keyboard events**: 
  - `'keydown'`: Triggered when a key is pressed down.
  - `'keyup'`: Triggered when a key is released.
  - `'keypress'`: Triggered when a key is pressed and held.

- **Form events**: 
  - `'submit'`: Triggered when a form is submitted.
  - `'change'`: Triggered when the value of an input changes.
  - `'input'`: Triggered when the value of an input element is modified.

- **Window events**: 
  - `'load'`: Triggered when the page has fully loaded.
  - `'resize'`: Triggered when the window is resized.
  - `'scroll'`: Triggered when the user scrolls.

- **Touch events**: 
  - `'touchstart'`: Triggered when a touch point is placed on the touch surface.
  - `'touchend'`: Triggered when a touch point is removed from the touch surface.
  - `'touchmove'`: Triggered when a touch point is moved along the touch surface.

## Adding Event Listeners

Event listeners can be added to HTML elements using the `addEventListener` method. This method is part of the DOM (Document Object Model) and allows multiple event listeners to be attached to the same element.

### Syntax
```javascript
element.addEventListener(event, function, useCapture);
```

- **Parameters**:
  - `'event'`: A string representing the event type. Examples include:

  - `'click'`: Triggered when an element is clicked.
  - `'keydown'` : Triggered when a key is pressed down.


function 
the function to execute when the event is triggered. This can be either:

### An anonymous function:
``` javascript

element.addEventListener('click', function() {
    // Code to execute on click
});
```

 ### A named function:
```javascript

function handleClick() {
    // Code to execute on click
}
element.addEventListener('click', handleClick);
```

## useCapture: 
An optional boolean indicating whether to use event capturing or bubbling. The default value is false, which means the event uses bubbling.

If set to true, the event listener will be triggered during the capturing phase:
``` javascript

element.addEventListener('click', handleClick, true); // Capturing phase
```

## Example: Adding a Click Event Listener

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Event Listener Example</title>
</head>
<body>
    <button id="myButton">Click Me!</button>

    <script>
        const button = document.getElementById('myButton');

        button.addEventListener('click', function() {
            alert('Button was clicked!');
        });
    </script>
</body>
</html>
```
## Removing an Event Listener
You can remove an event listener using the removeEventListener method, provided you reference the same function that was used to add it.

```javascript

function handleClick() {
    alert('Button was clicked!');
}

button.addEventListener('click', handleClick);

// Later in the code, you can remove the listener
button.removeEventListener('click', handleClick);
```

## Event Propagation
When an event occurs, it follows a path known as the event propagation path. This includes two phases:

- **Capturing Phase** : The event starts from the top of the DOM and travels down to the target element.
- **Bubbling Phase**: The event bubbles back up from the target element to the top of the DOM.

## Example: Understanding Event Propagation
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Event Propagation Example</title>
</head>
<body>
    <div id="outer" style="padding: 50px; background-color: lightblue;">
        Outer Div
        <div id="inner" style="padding: 50px; background-color: lightcoral;">
            Inner Div
        </div>
    </div>

    <script>
        document.getElementById('outer').addEventListener('click', function() {
            alert('Outer div clicked!');
        }, false); // Capturing phase

        document.getElementById('inner').addEventListener('click', function(event) {
            alert('Inner div clicked!');
            event.stopPropagation(); // Stops the event from bubbling up to the outer div
        });
    </script>
</body>
</html>
```

## The Event Object

When an event occurs, an event object is created and passed to the event handler. This object contains information about the event, including the type of event, the target element, and additional properties specific to the event.

Accessing the Event Object

```javascript
button.addEventListener('click', function(event) {
    console.log(event.target); // Logs the button element
    console.log(event.type); // Logs the type of event (e.g., 'click')
    console.log(event.clientX, event.clientY); // Logs the mouse position when clicked
});
```

## Common Properties of the Event Object
- **type**: The type of event (e.g., 'click', 'keypress').
- **target**: The element that triggered the event.
- **currentTarget**: The element to which the event handler is attached.
- **preventDefault()**: Prevents the default