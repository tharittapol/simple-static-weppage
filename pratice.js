// Use const when don't want to reassign the variable
const pi = 3.14159;
// pi = 3.14; // ❌ Error: Assignment to constant variable.

// Use let when the value will change
let counter = 0;
counter = counter + 1;  // ✅ OK
counter++;              // ✅ OK

// Block scope example
if (true) {
    let x = 10;   // x exists only inside this if-block
    const y = 20; // y also exists only inside this block
    console.log(x, y); // 10 20
}
// console.log(x, y); // ❌ Error: x is not defined

/*
Rule of thumb:
- Default to const
- Use let only when you know it will change.
*/

// ----------------------------------------------------------

// Function declaration
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5

// Function as a value (Function expression)
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(2, 5)); // 10

// Basic arrow function
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4)); // 6

// If the function has just ONE expression, can omit {} and return
const square = x => x * x;

console.log(square(5)); // 25

// No parameters → use ()
const sayHello = () => console.log("Hello!");
sayHello(); // "Hello!"

/*
 Normal function and arrow function = similar, just different syntax.
*/

// ------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

// Create a new array with each number * 2
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

// Keep only even numbers
const evens = numbers.filter(n => n % 2 === 0);

console.log(evens); // [2, 4]

// Sum all numbers in the array
const sum = numbers.reduce((accumulator, current) => {
    // accumulator = value we carry
    // current = current element from array
    return accumulator + current;
}, 0); // 0 is the initial value of accumulator

console.log(sum); // 15

// ---------------------------------------------------------------
