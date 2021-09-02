/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

// variable name conventions 
let firstName = 'Matilda';
console.log(firstName);

//Data types
-------------------------------------------------
//boolean
let javascriptIsFun = true; 

//type of 
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

//dynamic typing 
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//undefined 
let year;
console.log(year)


//Let const and var 

let age = 30; 
age = 31;

// use const most of the time 
const birthYear =1991;
// birthYear = 1990;
//const job;

//dont use var
var job = 'programmer';
job = 'teacher';

//bad practice 
lastName = 'Hossain';
console.log(lastName);



// Operator practice 
const now = 2037
const ageJonas = 2037 - 1991;
const ageSarah = now -2018
console.log(ageJonas);
console.log(ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

// "**" is exponents

const firstName = "Mohamed"
const lastName = "Hossain"
console.log(firstName + ' ' + lastName)

// assignment operaters 

let x = 10 + 5; // 15
console.log(x)

x += 10; // x= x +10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);


//Comparison operators 

console.log(ageJonas > ageSarah) // >, <, >=. <=
console.log(ageSarah >= 18)

console.log(now - 1991 > now - 2018);

let m, y;
m = y = 25 - 10 -5;
console.log(m,y);


// strings and template literals 

const firstName =  'Mohamed';
const job = 'progammer';
const birthYear = 1995;
const year = 2021;

const mohamed = "I'm " + firstName + ', a ' +  (year - birthYear) + ' years old ' + job + '!';
console.log(mohamed);
//  template string using string interpolation Es6
const mohamedNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(mohamedNew)

// multi line string

console.log(`string
multiple
lines`);

*/


// if else statements 
const age = 15;

const isOldEnough =  age >= 18;

if(age >= 18) {
    console.log('Sarah can start driving ')

} else {
    const yearsLeft = 18 - age; 
//    console.log(`Sarah is too young. wait another ${yearsLeft} years`)
}


const birthYear = 2015;

let century; 
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
// console.log(century)

// type conversion and coercion





























