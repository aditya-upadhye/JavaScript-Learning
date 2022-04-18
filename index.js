// VARIABLES:

let name = "Aditya";
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen(-)
// Are case-sensitive

// CONTANTS

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// In this case, 1 will be printed.
// Using `let`, the variable value can be changed later by decaring it again.
// If you want to make the variable that should not change later, use `const`.

// PRIMITIVE DATA TYPES
// consists of string, number, boolean, undefined, null

let myName = "Aditya"; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedNum = null;
// null and undefined are actually the same thing

// DYNAMIC TYPING
console.log(typeof name);
name = 1;
console.log(typeof name);

// OBJECTS
let person = {
  hisName: "John",
  hisAge: 30,
};

// Dot Notation
person.hisName = "Bravo";

// Bracket Notation
person["hisName"] = "Mary";

// Most preferred is Dot Notaton but Bracket Notation has its own benefits in some cases

console.log(person);

// ARRAYS
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);
