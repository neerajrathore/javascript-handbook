## var

- var is used to declare function scoped or globally scoped variables.
- var is automatically initialized with undefined when it declared.
- var can be declared again.

```javascript
log = console.log
log(x) // undefined hoisted with undefined 
var x;
log(x) // undefined
var x  // reassignment not throw error
log(y) // undefined hoisted with undefined
var y = 12
log(y) // 12

function func() {
    if (true) {
        var tmp = 123;
    }
    console.log(tmp); // 123
}

if (true) { // enter new scope, TDZ starts
    // Uninitialized binding for `tmp` is created
    tmp = 'abc'; 
    console.log(tmp); // abc
    
    var tmp; // TDZ ends, `tmp` is initialized with `undefined`
    console.log(tmp); // abc
    
    tmp = 123;
    console.log(tmp); // 123
}
```

