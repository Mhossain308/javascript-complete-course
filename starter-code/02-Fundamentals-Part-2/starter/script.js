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



function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntillRetirement = function (birthYear, 
    firstName)  {
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
            console.log(`${firstName} has already retired`);
            return -1;
    }
}
console.log(yearsUntillRetirement(1991, 'Mohamed'))
console.log(yearsUntillRetirement(1950, 'james'))




// Arrays 

const friends = ['Michael', 'james',"john"]
console.log(friends)

//const years = [1991, 1992, 1993]


console.log(friends[0]) // indexes start at 0
console.log(friends[2])
console.log(friends.length)
console.log(friends[friends.length - 1]) // 3-1 = 2 which is the index of 2 

friends[2] = "Mohamed" //replaced index of 2
console.log(friends);

const firstName = 'Mohamed'

const mohamed = [firstName, 'Hossain', 2021 - 1995, 'student', friends]
console.log(mohamed)
console.log(mohamed.length)


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1991, 1992, 1994, 2000]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])

console.log(age1, age2, age3)
*/
//array methods
//push to end of array
//unshift to the beginning of the array

const friends = ['Michael', 'james',"john"]

friends.push("jay");

friends.unshift('bob')
console.log(friends)

friends.pop() //remove elements from the last
console.log(friends)

friends.shift() // removees element from the first of the array
console.log(friends)

console.log(friends.indexOf('james'))

