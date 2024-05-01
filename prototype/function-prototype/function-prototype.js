const log = console.log
function Cat() {
  // constructor 
}

let kitty = new Cat();
console.log(kitty, typeof kitty, Cat, new Cat(), Cat === kitty.constructor);

log(kitty.constructor.prototype, typeof kitty.constructor.prototype)   // ƒ () { [native code] }

log(kitty.__proto__ === Cat.prototype)  // true

log(kitty.constructor.prototype === Cat.prototype)  // true

console.log(kitty.__proto__, Object.getPrototypeOf(kitty), typeof kitty, kitty.__proto__);

console.log(kitty.__proto__.__proto__, {}.__proto__);
console.log(myObj.__proto__);
// console.log( (new Object).constructor.prototype); === console.log( (new Object()).constructor.prototype);
console.log( new Object().__proto__);

console.log({}, new Object, new Object()); // just before root object  
// it is just same as root object but has [[Prototype]] property which has proto as Root-Object
