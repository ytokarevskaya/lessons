
// 1 Задание


x = +prompt();

console.log(x);

console.log(typeof x);

if (isNaN(x)){
    console.log('Упс, кажется, вы ошиблись');
} else if(x% 2 === 0) {
console.log('Четное число');
} else {
    console.log('Нечетное число');
}

// 2 Задание

x = 5 > 3

if(typeof(x) === 'number') {
    console.log('X — число')
}
else if(typeof(x) === 'string'){
    console.log(`Тип x не определён`)
}
else if(typeof(x) === 'boolean') {
    console.log(`Тип x не определён`)
}



// 3 Задание

let str = "Hello"

console.log(`${str[4]}${str[3]}${str[2]}${str[1]}${str[0]}`)

// 4 Задание

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(101));

// 5 Задание

const array = [1, 3, 5, 9, 12, 18];

console.log(array.length);

for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Задание 6 Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let array1 = [1, 3, 4, 7, 9, 11];

for (let i=0; i < array1.length; i++) {
    function unique(array1) {
        if (unique(array1))  {
            console.log(true)
        }else {
            console.log(false)
        }
    }
}
func(array1);

// Задание 7

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
function isNumber (element){
    return typeof element === 'number';
};

console.log('Evens', evens);
console.log('Odds', odds);
console.log('Nans', nans);


// Задание 8

let myMap = new Map();
myMap.set("Name", "Artiom");
myMap.set("Surname", "Percev");
let result

myMap.forEach((value, key, map) => {
    console.log(`Ключ - ${key}, значение - ${value}`)

})



