const log = console.log

let myObj = {}
console.log(Object.getPrototypeOf(myObj));
console.dir(myObj.prototype) // undefined // myObj.constructor.prototype works
console.dir(myObj.constructor) // gives all predefined methods which have prototype method as well
console.log(myObj.__proto__.toString(),  myObj.__proto__.constructor.prototype, "qwqwqwqw");
log(myObj.constructor.prototype.__proto__)

console.dir(myObj.__proto__.toString())

log(myObj.__proto__ === myObj.constructor.prototype) // both are pointing to prototype object of constructor
