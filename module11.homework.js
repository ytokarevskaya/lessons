// 1 Задание

function GetNansEvensOddsFromArray(){
    const array5 = [0, 5, 13, 17, 20, 25, 30, 35, 40, 45, 50, NaN, '', 'dasda', null];
let evens = 0;
let odds = 0;
let nans = 0;

array5.forEach((element) => {
    if (isNumber(element)) {
        if (isNaN(element)) {
            nans++;
        } else {
            if (element % 2 === 0) {
                evens++;
            } else if (element % 2 !== 0) {
                odds++;
            }
        }
    }
});

function isNumber(element) {
    return typeof element === 'number';
};

console.log('Evens', evens);
console.log('Odds', odds);
console.log('Nans', nans);
};

GetNansEvensOddsFromArray();

