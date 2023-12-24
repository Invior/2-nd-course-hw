//Задание 1
let password = 'admin123';
//let answer = prompt('Введите пароль');

//answer === password ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

//Задание 2
let c = 2;

c >= 0 && c <= 10 ? console.log('Верно') : console.log('Неверно');

//Задание 3
let d = 56;
let e = 34;

d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');

//Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
//alert(Number(a) + Number(b));

//Задание 5
let monthNumber = 12;

switch (monthNumber) {
    case 12: console.log('зима');    
        break;
    case 1: console.log('зима');    
        break;
    case 2: console.log('зима');    
        break;
    case 3: console.log('весна');    
        break;
    case 4: console.log('весна');    
        break;
    case 5: console.log('весна');    
        break;
    case 6: console.log('лето');    
        break;
    case 7: console.log('лето');    
        break;
    case 8: console.log('лето');    
        break;
    case 9: console.log('осень');    
        break;
    case 10: console.log('осень');    
        break;
    case 11: console.log('осень');    
        break;
    default: console.log('не верное значение');
        break;
};