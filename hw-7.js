//Задание 1
let a = "строка";

console.log(a.toUpperCase());

//Задание 2
function searchStart(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

//Задание 3
let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4
let numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//Задание 5
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(11));

//Задание 6
function getRandomArrNumbers(num) {
    let arrayLength = Math.floor(num / 2);
    let randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
      randomArray.push(Math.floor(Math.random()* num));
    }
    return randomArray;
  }

  console.log(getRandomArrNumbers(12));

//Задание 7
function randomNum(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(randomNum(4, 15));

//Задание 8
let thisDate = new Date();

console.log(thisDate);

//Задание 9
let currentDate = new Date;
let futureDate = new Date;

futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate);

//Задание 10
function formatDateTime(date) {
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dayOfWeek = daysOfWeek[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dateFormat = `Дата: ${day} ${month} ${year} - это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
    return dateFormat;
  }

console.log(formatDateTime(new Date));

//Задание 11
function fruitGame() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let randomFruit = fruit.sort(() => Math.random() - 0.5);
    let strRandomFruit = randomFruit.join(' ').toLowerCase();
    alert(randomFruit.join(' '));
    let firstFruit = prompt("Чему равнялся первый элемент массива?").toLowerCase();
    let lastFruit = prompt("Чему равнялся последний элемент массива?").toLowerCase();
    if (strRandomFruit.startsWith(firstFruit) && strRandomFruit.endsWith(lastFruit)) {
        alert('Поздравляем! Вы угадали оба элемента');
    } else if (strRandomFruit.startsWith(firstFruit) || strRandomFruit.endsWith(lastFruit)) {
        alert("Вы были близки к победе!")
    } else {
        alert("Вы не угадали ни одного элемента");
    }    
}