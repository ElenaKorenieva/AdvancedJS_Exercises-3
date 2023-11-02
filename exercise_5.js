// Exercise 5
// Write a function min(a,b) which returns the least of two numbers a and b.
// Use arrow function along with the question mark operator ?

const min = (a, b) => (a < b ? a : b);

console.log(min(5, 3));
console.log(min(2, -6));
console.log(min(7, 7));
