// Number
let age = 30;
let price = 9.99;
console.log(typeof age); // Output: "number"
// String 
let fullName = "John Doe";
let greeting = `Hello, ${fullName}!`;
console.log(typeof price); // Output: "number"
// Boolean
let isLogged = true;
let hasError = false;
console.log(typeof isLogged); // Output: "boolean"
// Null and Undefined
let emptyValue = null;
let notDefined = undefined;
console.log(typeof emptyValue); // Output: "object"
console.log(typeof notDefined); // Output: "undefined"
// Object
let person = { name: "Alice", age: 25 };
let car = { brand: "Toyota", model: "Corolla" };
console.log(typeof person); // Output: "object"
// Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
console.log(typeof numbers); // Output: "object"
// Tuple
let employee = ["John", 30]; // tuple [string, number]
console.log(typeof employee); // Output: "object"
// Functions
const multiply = function (a, b) {
    return a * b;
};
const result = multiply(4, 2);
console.log(result); // Output: 8
function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
greet("John"); // Output: Hello, John!
greet("Alice", "Hi"); // Output: Hi, Alice!
// Enum
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
const primaryColor = Color.Red;
console.log(primaryColor); // Output: "RED"
