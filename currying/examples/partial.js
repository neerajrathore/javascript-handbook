// Partial Application Example

function add(a, b, c) {
    return a + b + c;
}

// Partial Application (fix first argument)
const addWith10 = add.bind(null, 10);

// bind(thisArg, arg1, arg2, /* …, */ argN)
// The null argument means the this context of the function isn't relevant here (since add doesn't use this)

console.log(addWith10(20, 30));  // Output: 60

// Compare with currying
const curriedAdd = (a) => (b) => (c) => a + b + c;
console.log(curriedAdd(10)(20)(30));  // Output: 60
