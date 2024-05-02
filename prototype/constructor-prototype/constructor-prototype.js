// constructor function to build other objects & constructor always get prototype object.
  
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
  