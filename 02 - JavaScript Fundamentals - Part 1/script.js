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

const firstName = "Aditya";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const aditya =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old" + job + "!";
  
  console.log(aditya);
  
  const adityaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
  console.log(adityaNew);
  
  console.log(`Just a regular string...`);
  
  console.log("String with \n\
  multiple \n\
  lines");
  
  console.log(`String
  multiple
  lines`);
  const age = 15;
  
if (age >= 18) {
  console.log("Aditya can start driving.");
} else {
  const yearsLeft = 18 - age;
  console.log(`Aditya is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2003;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/////////////////////////////////////////////
// Coding Challenge #2

let weightMark = 78,
  weightJohn = 92,
  heightMark = 1.69,
  heightJohn = 1.95;
  
  bmiMark = weightMark / heightMark ** 2;
  bmiJohn = weightJohn / heightJohn ** 2;
  
  if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark} is higher than John's (${bmiJohn}))`);
  } else {
    console.log(`John's BI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
  }
  
  // Type conversion
const inputYear = "2003";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Aditya"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 123;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is undefined");
}
*/

// Equality operator: == vs ===

const age = 18;
if (age === 18) console.log("You just became an adult");
