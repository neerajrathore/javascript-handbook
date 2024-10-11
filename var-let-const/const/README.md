##  const

- const is used to declare block scoped variables and cannot be reassigned to new value.
- const does not automatically initialized accessing before it throws reference error due to the temporal dead zone.

```javascript
log = console.log
log(x) // Uncaught ReferenceError: Cannot access 'x' before initialization
const x // error const declarations must be initialized
log(x) // undefined
const y = 12
log(y) // 12
y = 13 //  error Assignment to constant variable.
```