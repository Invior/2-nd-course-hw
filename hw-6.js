//Задание 1
const arr1 = [1, 5, 4, 10, 0, 3];

for (let a of arr1) {
    console.log(a);
    if (a === 10) {
        break;
    }
}

//Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.indexOf(4));

//Задание 3
const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join([' ']));

//Задание 4
const arr4 = [];
for (let i = 0; i < 3; i++) {
  arr4[i] = [];
  for (let j = 0; j < 3; j++) {
    arr4[i][j] = 1;
  }
}

console.log(arr4);

//Задание 5
const arr5 = [1, 1, 1];

for (let i = 0; i < 3; i++) {
    arr5.push(2);
}

console.log(arr5);

//Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();

console.log(arr6);

//Задание 7
const arr7 = [9, 8, 7, 6, 5];

let num = Number(prompt("Введите число"));

if (arr7.includes(num) === true) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8
let str = 'abcdef';
const arr8 = Array.from(str);
arr8.reverse();

console.log(arr8.join(''));

//Задание 9
const arr9 = [[1, 2, 3,],[4, 5, 6]];

console.log(arr9[0].concat(arr9[1]));

//Задание 10
const arr10 = [3, 5, 2, 8, 1, 6, 4, 9, 7, 10];

for (let i = 0; i < arr10.length - 1; i++) {
    let sum = arr10[i] + arr10[i + 1];
    console.log(arr10[i] + ' + ' + arr10[i + 1] + " = " + sum);
}

//Задание 11
const arr11 = [2, 4, 6, 8, 10];

function squareArray(arr){
    const squareArr = arr.map(item => item ** 2);
    return squareArr;
}

const squareNum = squareArray(arr11);

console.log(squareNum);

//Задание 12
function wordLength(arr) {
    const wordLengthArr = arr.map(word => word.length);
    return wordLengthArr;
}

console.log(wordLength(['слово', '', 'слог', 'длинное предложение', 'буква']));

//Задание 13
function filterPositive(array) {
    const negativeNum = array.filter(num => num < 0);
    return negativeNum;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));