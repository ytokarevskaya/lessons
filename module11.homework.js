// Task 1

// Вы не совсем правильно поняли задание: нужно было подсчитать четные, нечетные элементы и нули (не значения NaN). Однако сам принцип решения задачи правильный, поэтому балл за это снимать не стала :)
function GetNansEvensOddsFromArray(){
    const array5 = [0, 5, 13, 17, 20, 25, 30, 35, 40, 45, 50, NaN, '', 'dasda', null];
let evens = 0, odds = 0, nans = 0; // При объявлении нескольких переменных сразу можно использовать более компактную запись

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

//Task 2 Вопрос обязательно писать let result = '';???
// В данном случае можно было написать только let result;, чтобы объявить переменную на верхнем уровне функции и иметь возможность её использовать в любом месте функции. Но в некоторых случаях может быть необходимость задать переменной изначальное значение.

function prime(num){
    let isPrime = true;
    let result = '';
        if (num > 1 && num <= 1000){
            for(let i = 2; i < num; i++ ){
                if(num % i === 0){
                    isPrime = false; 
                }
            }
            result = isPrime ? `Число ${num} - простое число` : `Число ${num} - не простое число`;
        } else {
            result = `Данные не верны`
        }
        return result
    }
    console.log(prime(2));
// Task 3 Напишите как работает вот эти строки, не совсем разобрался.
// const getSum = getNum(22);
// getSum(21);

// Функция getNum возвращает в качестве результата другую функцию, и, чтобы иметь возможность использовать её в дальнейшем, вы записываете эту вторую функцию в переменную getSum. В следующей строчке функция getSum вызывается, и в неё передается второй аргумент, необходимый для получения суммы.
function getNum(num1){
    return function getNum2(num2){
     console.log(num1 + num2);
    }}

const getSum = getNum(22);
getSum(21);


// Task 4

    let a = prompt()
        a = +a
    let b = prompt()
        b = +b
        
    const getNumber = setInterval(function(){
            if (a <= b) {
                console.log(a);
                a++;
            } else {
                clearInterval(getNumber);
             }}, 1000, a, b);

// Task 5 

const xSquared = function(x, n){
    console.log(x ** n);
    return;
};

xSquared(2, 3);
