// constructor function to build other objects & constructor always get prototype object.

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
  
  // instance || func we run    ||  obj we get we run new func                       
  // obj --> xyz.prototype --> Object.prototype --> null
  
  // **********************************************************************************
  
  // 2. alternate method
  console.clear();
  
  let xyzObj = {
    value: 456,
    someMethod: function () {
        console.log("xyzObj somemethod");
    }
  }
  // same
  //  let xyzObj = new Object() 
  //  xyzObj.value = 456
  
  // xyzObj  is an instance not a function so below wont work
  
  // xyzObj.prototype.otherSomeMethod = function () {
  //     console.log("this is otherSomeMethod");
  // } // not work
  
  xyzObj.__proto__.otherSomeMethod = function () {
    console.log("this is otherSomeMethod");
  }
  Object.getPrototypeOf(xyzObj).otherSomeMethod = function () {
      console.log("this is otherSomeMethod");
  }
  // both will work
  console.log(xyzObj); 
  console.log(xyzObj.__proto__); // root-object
  console.log(xyzObj.__proto__.otherSomeMethod()); // will work 
  // console.log(xyzObj.prototype.otherSomeMethod()); // not  work 
  console.log(xyzObj.constructor.prototype.otherSomeMethod()); // will work 
  
  // ***************************************************************************************
  /**************************************/
  // 3. childObj --> xyzObj --> Object.prototype --> null
  console.clear();
  let childObj = {};
  Object.setPrototypeOf(childObj, xyzObj) // setting xyzObj prototype of childObj 
  console.log(childObj, "childObj");
  console.log(childObj.__proto__.__proto__, "childObj"); // root-object
  console.log(childObj.value, "childObj.value");
  console.log(childObj.otherSomeMethod());
  // that is how a simple object can access various methods from parent Object prototype
  // console.log(childObj.noneObjet());   // not exist because it does not exist in chain
  
  
  /**************************************/
  // 4. childObj2 ---> xyzObj ---> Object.prototype --> null
  console.clear();
  let childObj2 = Object.create(xyzObj)  // === let childObj = {}; Object.setPrototypeOf(childObj, xyzObj) both lines
  console.log(childObj2); 
  console.log(childObj2.__proto__); // === xyzObj
  console.log(childObj2.__proto__.__proto__); // root-object
  console.log(childObj2.value); // we get value from xyzObj
  childObj2.prop1 = 777
  console.log(childObj2.prop1, childObj2.__proto__.value);
  childObj2.someMethod();
  childObj2.someMethod = function () {
      console.log("childObj2 someMethod");
  }
  
  // so
  childObj2.someMethod();
  childObj2.__proto__.someMethod()
  