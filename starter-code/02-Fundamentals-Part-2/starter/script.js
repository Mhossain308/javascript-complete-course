// using strict mode 
'use strict';
/*
 let hasDriversLicense = false;
 
 const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('i can drive')

//functions 

function logger() {
    console.log('My name is Mohamed');
}

//invoking the function 
logger(); 
                        // parameters
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

    // arguements 
fruitProcessor(5,0)
const appleJuice = fruitProcessor(5,0)
console.log(appleJuice);
console.log(fruitProcessor(5,0))

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice)
*/

// function declaration vs expressions
// function declaration 

function calAge1(birthyear) {
    return 2037 - birthyear
}

const age1 = calAge1(1991)

console.log(age1)

// function expression
//  const calcAge2 =  function (birthYear) {
//     return 2037 - birthYear
// }
// const age2 =  calcAge2(1991);

//  console.log(age1, age2);

// arrow functions 



// arrow functions 
const calcAge3 =  birthYear => 2037 - birthYear
const age3 = calcAge3(1991);
console.log(age3)



const yearsUntillRetirement = (birthYear, firstName) => {
    const age =  2037 - birthYear
    const retirement = 65 - age
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
const retire = yearsUntillRetirement(1991, 'Mohamed')
console.log(retire)