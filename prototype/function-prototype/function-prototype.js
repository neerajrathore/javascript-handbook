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