let a = 20;
alert(a);

let year = 2007;
alert(`Год выпуска первого iPhone: ${year} год`);

let name = 'Брендан Эйх';
alert(`Имя создателя языка JavaScript - ${name}`);

let num1 = 10;
let num2 = 2;
alert(
    `${num1 + num2} \n ${num1 - num2} \n ${num1 * num2} \n ${num1 / num2}`
);

let result = 2**5;
alert(result);

let b = 9;
let c = 2;
alert(b % c);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

let user = {
    name: 'Андрей',
    age: 28,
    isAdmin: true
}

user['city of residence'] = 'Тольятти';
delete user['city of residence'];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);