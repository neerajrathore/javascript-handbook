// Currying Example

// Function to multiply numbers (curried)
function multiply(a) {
    return function(b) {
        return a * b;
    }
}

const multiplyBy3 = multiply(3);
console.log(multiplyBy3(5));  // Output: 15

// URL builder using currying
const buildUrl = (baseUrl) => (path) => (query) => `${baseUrl}${path}?${query}`;

const createUrl = buildUrl('https://mysite.com');
const userUrl = createUrl('/user');
console.log(userUrl('id=42'));  // Output: https://mysite.com/user?id=42
