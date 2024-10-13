## let 

- let is used to declare block scoped variables.
- let does not automatically initialized accessing before it throws reference error due to the temporal dead zone.

```javascript
log = console.log
log(x) // Uncaught ReferenceError: Cannot access 'x' before initialization
let x
log(x) // undefined
let y = 12
log(y) // 12
y = 13 // reassign done

let tmp; // tmp is initialized with undefined

// if you enter new scope{} the tdz starts

// var are function scoped variable
// let const are block spaced

function func() {
    // function starts 
    if (true) {
        // block starts
        let tmp = 123;
    }
    console.log(tmp); // ReferenceError: tmp is not defined
}

function func() {
    let foo = 5;
    if (true) {
        let foo = 10; // shadows outer `foo`
        console.log(foo); // 10
    }
    console.log(foo); // 5
}

if (true) { // enter new scope, TDZ starts
    // Uninitialized binding for `tmp` is created
    tmp = 'abc'; // ReferenceError Cannot access 'tmp' before initialization
    console.log(tmp); // ReferenceError Cannot access 'tmp' before initialization
    // when comment above two lines the below code executes
    
    let tmp; // TDZ ends, `tmp` is initialized with `undefined`
    console.log(tmp); // undefined
    
    tmp = 123;
    console.log(tmp); // 123
}

```
