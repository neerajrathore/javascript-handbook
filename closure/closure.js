console.clear()

// **1st example **
function firstName() {
  var firstName = 'mozilla'
  return function second() {
    var lastName = 'firefox'
    return firstName + " " + lastName
  }
}
let fullName = firstName()
console.log(fullName()) // mozilla firefox

// ** 2nd example **
function outer(outerValue) {
  return function inner(innerValue) {
    console.log(outerValue + " " + innerValue);
  }
}
const newFunc = outer("hello");
newFunc("bye"); // hello bye

// ** 3rd example **
let createCounter = (n) => {
  let count = n
  return () => {
    let currentCount = count
    count = count + 1
    return currentCount
  }
}
let counter = createCounter(10)
console.log(counter()); // 10
console.log(counter()); // 11

