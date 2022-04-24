/* 

let js = "amazing";
console.log(48 + 8 + 23 - 10);

console.log("Aditya");
console.log(23);

let firstName = "Aditya";
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascript);
console.log(typeof 23);
console.log(typeof "Aditya");

javascriptIsFun = "Yes!!!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2000;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 2003;
// birthYear = 2002;

// const job;

var job = "programmer";
job = "teacher";


const now = 2035;

const ageAditya = now - 2003;
const ageJohn = now - 2018;
console.log(ageAditya, ageJohn);

console.log(ageAditya * 2, ageAditya / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Aditya";
const lastName = "Upadhye";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
// >, <, >=, <=
console.log(ageAditya > ageJohn);
console.log(ageAditya >= 18);

const isFullAge = ageJohn >= 18;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const now = 2035;

const ageAditya = now - 2003;
const ageJohn = now - 2018;
console.log(ageAditya, ageJohn);

const averageAge = (ageAditya + ageJohn) / 2;
console.log(ageAditya, ageJohn, averageAge);
*/

////////////////////////////////////////////
// Coding Challenge #1

let weightMark = 78,
  weightJohn = 92,
  heightMark = 1.69,
  heightJohn = 1.95;

bmiMark = weightMark / heightMark ** 2;
bmiJohn = weightJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

weightMark = 95;
weightJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

bmiMark = weightMark / heightMark ** 2;
bmiJohn = weightJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
