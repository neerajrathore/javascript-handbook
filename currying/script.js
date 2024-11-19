// Basic currying example:
function multiply(a) {
    return function(b) {
        return a * b;
    }
}

// Usage
const multiplyBy2 = multiply(2);
console.log("2 * 5 =", multiplyBy2(5));  // Output: 10

// ----------------------------
// Why Is Currying Useful?

// Example: URL builder function using currying
function buildUrl(baseUrl) {
    return function(path) {
        return function(queryParam) {
            return `${baseUrl}${path}?${queryParam}`;
        };
    }
}

const urlWithBase = buildUrl("https://example.com");
const userProfileUrl = urlWithBase("/user");
console.log(userProfileUrl("id=123"));  // Output: https://example.com/user?id=123

// ----------------------------
// Currying vs. Partial Application
// Partial Application: Prefill a few arguments
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

// Example function
function add(a, b, c) {
    return a + b + c;
}

const add5 = partial(add, 5);  // Pre-filling first argument
console.log("5 + 10 + 20 =", add5(10, 20));  // Output: 35

// Currying: Each argument is passed one by one
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

const curriedAdd = curry(add);
console.log("5 + 10 + 20 (curried) =", curriedAdd(5)(10)(20));  // Output: 35

// ----------------------------
// Simple Project: Functional Discount Calculator using Currying

function applyDiscount(discount) {
    return function(price) {
        return price - (price * discount);
    };
}

const apply10PercentDiscount = applyDiscount(0.10);
const apply20PercentDiscount = applyDiscount(0.20);

const itemPrice = 100;

console.log("Price after 10% discount:", apply10PercentDiscount(itemPrice));  // Output: 90
console.log("Price after 20% discount:", apply20PercentDiscount(itemPrice));  // Output: 80


// Infinite currying 
function add(a) {
    return function (b) {
      // If b is provided, the returned function recursively calls add with the updated sum (a + b).
      if (b === undefined) {
        console.log({a, b}, "inif");
        return a; 
      } else {
        console.log({a, b}, "inelse");
        return add(a + b); 
      }
    };
  }
  
console.log(add(1)(5)(8)()); // Output: 6