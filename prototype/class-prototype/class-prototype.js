class xyz {
    constructor(name) {
        this.name = name;
    }
}

const newXyz = new xyz("name")

console.log(xyz);
console.log(newXyz);
console.log(newXyz.__proto__); // same Object.getPrototypeOf(newXyz)
console.log(newXyz.__proto__.__proto__); // root-object

// Do not do object.prototype or edit object prototype

//edit your own prototype 
xyz.prototype.addSomeMethod = () => {}  // this will add this method to prototype
xyz.prototype.grades = "A"
