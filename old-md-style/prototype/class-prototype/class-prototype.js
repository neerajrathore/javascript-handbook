let xyz = function () {
    this.value = 123
    this.innerFunction = function () {
      console.log('innerFunction called');
    } 
  }
  xyz.prototype.someMethod = function () {
    console.log("this is xyz some method");
  }
  
  // xyz.__proto__.someMethod = function () {
  //   console.log("this is xyz some method");
  // }
  
  // line 1 to 10 can also be written as latest ES2015 class
  // class xyz {
  //     constructor() {
  //         this.value = 456;
  //         this.innerFunction = function () {
  //             console.log("innerFunction called");
  //         };
  //     }
  //     someMethod() {
  //         console.log("this is xyz some method");
  //     }
  // }
  
  console.dir(xyz.prototype); // same down obj.__proto__
  console.dir(xyz.prototype.__proto__); // Root-Object
  console.dir(xyz.__proto__);
  console.dir(xyz.__proto__.toString());
  console.dir(xyz.prototype.toString());
  
  // new keyword indicates that xyz is not regular function 
  // function gets executed in different way as a constructor function when we use new keyword 
  // & make a new object and assign bind the code inside of function to this keyword 
  let obj = new xyz();
  console.log(obj);
  console.log(obj.__proto__.__proto__); // root-object
  console.log(obj.value); // exist in obj and innerFunction 
  console.log(obj.someMethod()); // xyz.prototype
  console.log(obj.toString());  // object.prototype
  
  // obj.__proto__ // will give me its prototype
  // console.log( obj.__proto__.innerFunction()) // not work 
  console.log( obj.__proto__.someMethod()) //  someMethod will work
  // Object.getPrototypeOf(obj).someMethod() // this is here xyz.prototype
  
  // ***** can say obj.__proto__ === Object.getPrototypeOf(obj) *******


// *******************
class xyz2 {
    constructor(name) {
        this.name = name;
    }
}

const newXyz = new xyz2("name")

console.log(xyz2);
console.log(newXyz);
console.log(newXyz.__proto__); // same Object.getPrototypeOf(newXyz)
console.log(newXyz.__proto__.__proto__); // root-object

// Do not do object.prototype or edit object prototype

//edit your own prototype 
xyz2.prototype.addSomeMethod = () => {}  // this will add this method to prototype
xyz2.prototype.grades = "A"
