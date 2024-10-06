// Functional Discount Calculator

function applyDiscount(discount) {
    return function(price) {
        return price - (price * discount);
    };
}

const apply10PercentDiscount = applyDiscount(0.10);
const apply20PercentDiscount = applyDiscount(0.20);

const productPrice = 100;

console.log("Original Price: $100");
console.log("Price after 10% discount:", apply10PercentDiscount(productPrice));  // Output: 90
console.log("Price after 20% discount:", apply20PercentDiscount(productPrice));  // Output: 80
