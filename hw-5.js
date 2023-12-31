//Задание 1
const comparison = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(comparison(3, 3));

//Задание 2
const definition = (a) => a % 2 === 0 ? console.log('Число четное') : console.log('Число нечетное');

definition(24);

//Задание 3
//3.1
const squareConclusion = (a) => console.log(a**= 2);

squareConclusion(5);

//3.2
const squareReturn = (a) =>{ return a**= 2 };
console.log(squareReturn(7));

//Задание 4
function answer() {
    let age = prompt('Сколько тебе лет?');
    if (age >= 13) {
        alert('Добро пожаловать!');
    } else if (age <= -0) {
        alert('Вы ввели неправильное значение');
    } else {
        alert('Привет, друг!');
    }
}

//answer();

//Задание 5
const isNumber = (a, b) => {
    if (Number(a) && Number(b)) {
        return a * b;
    } else {
        return 'Одно или оба значения не являются числом';
    }
}

console.log(isNumber(5, 'три'));

//Задание 6
const cube = () => {
    //let num = prompt('Введите число');
    if (Number(num)) {
        return `n в кубе равняется ${num**=3}`;
    } else {
        return 'Переданный параметр не является числом';
    }
}

//console.log(cube());

//Задание 7
function getArea () {
    let areaResult = (this.radius**=2) * 3.14;
    return areaResult;
};

function getPerimeter() {
    let perimeterResult = 2 * 3.14 * this.radius;
    return perimeterResult;
};

let circle1 = {
    radius: 30,
    area: getArea,
    perimeter: getPerimeter
};

let circle2 = {
    radius: 40,
    area: getArea,
    perimeter: getPerimeter
};

console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());

//Задание 8
function month() {
    let monthNumber = Number(prompt('Введите номер месяца'));
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        return "Зима";
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return "Весна";
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        return "Лето";
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        return "Осень";
    } else {
        return "Вы ввели неправильное значение, начните игру заново!"
    }
}