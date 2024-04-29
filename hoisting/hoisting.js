// example 1
function checkHoisting() {
    console.log("2", x); // defining with var gives undefined and declaring with let will give reference error
    var x = 20
    x++
    console.log("3", x); // 21
    if (true) {
        // case 1
        // console.log("4", x); // when lexical scope x is defined then it will not look parent scope x variable
        // Uncaught ReferenceError: Cannot access 'a' before initialization when using let 
        // let x = 30 // lexical or block scoped x 

        // case 2
        console.log("4", x); // 21
        var x = 30 // global scope x
    }
    console.log("5", x); // 21
}
checkHoisting()
console.log("6", x);  // Uncaught ReferenceError: x is not defined


// example 2
// similarly functions are also hoisted to global scope 
function first() {
    second()
    function second() {
        console.log("second function called");
        three();
        function three() {
            console.log("third function called");
        }
    }
}
first()
