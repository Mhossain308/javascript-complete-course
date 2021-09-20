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

// conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18)

console.log('i am '  +  23 + ' years old')
console.log('23' - '10' - 2)

console.log(String(23), 23)

// type coercien

console.log(' I am ' +  23  + ' years old ')

console.log('23' - '10' - 3)
console.log('23' > '18')


// truthy and falsey values

//falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('jonas'))
console.log(Boolean({}))


const money = 0;

if(money) {
    console.log("Dont spend it all ;) ")
} else {
    console.log("You should get a job!");
}

let height = 0
if(height) {
    console.log("Yay height is defined")
} else {
    console.log("height is undefined")
}



// Equality Operators 
const age = 18;
if(age === 18) console.log("you just became an adult")

const favourite =  Number(prompt("whats your favorite number?"));

if(favourite === 23){
    console.log('Cool! 23 is an amazing number ')
} else if(favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('number is not 23 or 7')
}

if(favourite !== 23) console.log("why not 23")


// boolean logic 

const hasDriversLicense = true ; // A
const hasGoodVision = true; // B 

console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision

//if(shouldDrive) {
  //  console.log('Sarah can drive')
//} else {
  //  console.log('Someone else should drive ...')
//}


const isTired = true;
if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('sarah is able to drive')
} else {
    console.log('Someone else should drive...')
}
*/

// switch statement 



















