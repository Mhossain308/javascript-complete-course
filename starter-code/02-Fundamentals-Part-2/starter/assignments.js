'use strict';
// coding challenge #1
const calcAverage = (a, b, c,) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5))

// test 1
const scoreDolphin = calcAverage(100, 100, 100);
const scoreKoalas = calcAverage(5, 54, 49);
console.log(scoreDolphin, scoreKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins win(${avgDolphins} vs. ${avgKoalas})` );
} else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win(${avgKoalas} vs. ${avgDophins})` );
} else {
        console.log("no one wins")
    }
}
checkWinner(scoreDolphin, scoreKoalas)
checkWinner(576, 111)