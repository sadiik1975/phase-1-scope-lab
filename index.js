// Write your solution in this file!
// Declare a variable in global scope called `customerName` using the `var` keyword and assign it the value `'bob'`.
var customerName = 'bob';

// Write a function that accesses that global `customerName` variable, and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called `bestCustomer` in global scope and assigns it to be `'not bob'`.
function setBestCustomer() {
  bestCustomer = 'not bob'; // This will create a global variable
}

// Write a function called `overwriteBestCustomer()` that changes that `bestCustomer` variable to `'maybe bob'`.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called `leastFavoriteCustomer`; be sure to assign it some initial value.
const leastFavoriteCustomer = 'someone';

// Write a function called `changeLeastFavoriteCustomer()` that attempts to change that constant - notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another person'; // This will throw an error because `leastFavoriteCustomer` is a constant
}
