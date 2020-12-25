// 1 Переменные
// camelCase - sposob napisanija v JS

const firstName = 'Artiom'
// const lastName = 'Percev' // string
// let age = 28 //number
const isProgrammer = true // boolean

// age = 28

// console.log(age)

const _private = 'private'
const $ = 'some value'

// const if = 'mkef' // error
const withNum5 = '5'
// const 5withNum = 5 // error

// Мутирование
// console.log('Имя человека: ' + firstName + ' , а возраст человека: ' + age )
// alert('Имя человека: ' + firstName + ' , а возраст человека: ' + age )

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
let currentYear = 2020
const birthYear = 1992

const age = currentYear - birthYear

console.log(age)

const a = 10
const b = 5

let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
//  c += a
//  c -= a
//  c *= a
//  c /= a

console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
console.log(++currentYear)
console.log(--currentYear)

//4 Типы данных

//5 приоритет операторов
// mdn

// 6 условные операторы

const isReady = true

// if(isReady) {
//   console.log('Все готово!')
// } else {
// console.log('Все не готово')
// }

//Тернарное выражение
isReady ? console.log('Все готово') : console.log('Все не готово')

// 7 Булевоя логика
    // mdn logical operators
// 8  Функции

function calculatorAge(year) {
    return 2020 - year
}

// const myAge = calculatorAge(1993)
// console.log(myAge)

// or

console.log(calculatorAge(1993))
console.log(calculatorAge(1994))
console.log(calculatorAge(1995))

// 9 Массивы
// const cars = ['Mazda', "Merc", 'Ford'] - pravilnij variant
//console.log(cars)

//or

// const cars = new Array('Mazda', "Merc", 'Ford') rezhe variant
// console.log(cars)

//const cars = ['Mazda', "Merc", 'Ford'] - pravilnij variant
//console.log(cars)

// const cars = ['Mazda', "Merc", 'Ford']

//console.log(cars[1])
//console.log(cars. length)

//cars[0] = 'Porche'
//console.log(cars)
//cars[3] = 'Mazda'
//console.log(cars)

// 10 Циклы

const cars = ['Mazda', "Merc", 'Ford']

//for (let i = 0; i < cars.length; i++) { - starij sposob
 //   const car = cars[i]
 //   console.log(car)
//}

//for (let car of cars) {
 //   console.log(car)
//}

// 11 Объекты
const person = {
    first1Name: 'Artiom',
    last1Name: 'Percev',
    year: 1993,
    languages: ['Ru','Eng','Ukr'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.first1Name)
console.log(person. last1Name)
const key = 'year'
console.log(person[key])
person.hasWife = true
console.log(person)

person.greet()