//Задание 1
let i = 0;

while (i < 2) {
    console.log('Привет');
    i++;
}

//Задание 2
let c = 1;

while (c <= 5) {
    console.log(c);
    c++;
}

//Задание 3
for (let b = 7; b <= 22; b++) {
    console.log(b);
}

//Задание 4
let obj = {
    'Коля' : 200,
    'Вася' : 300,
    'Петя' : 400
}

for (const key in obj) {
    alert(`${key} - зарплата ${obj[key]}`);
}

//Задание 5
let n = 1000;
let num = 0;

 do {
    n = n / 2;
    num++;
 } while (n > 50);

console.log(n);
console.log(num);

//Задание 6
let friday = 1;

for (friday = 1; friday <= 31; friday++) {
    if (friday % 7 === 1) {
        console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
      }
}