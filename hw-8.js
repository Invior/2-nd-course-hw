//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 function Age(a, b) {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  }
 // Допишите колбэк для sort, изучите, как работает колбэк, в документации
 console.log(people.sort(Age));
 // код выше должен вывеcти =>
 // [
 //  { name: 'Олег', age: 7 },
 //  { name: 'Анна', age: 17 },
 //  { name: 'Глеб', age: 29 },
 //  { name: 'Оксана', age: 47 }
 // ]

 //Задание 2
 function isPositive(num) {
    // писать код тут
    return num > 0;
    }
    function isMale(person) {
    // писать код тут
    return person.gender === "male";
    }
    function filter(arr, ruleFunction) {
    // писать код тут
        let arrResult = [];
        for (let i = 0; i < arr.length; i++) {
            if (ruleFunction(arr[i])) {
              arrResult.push(arr[i]);
            }
          }
          return arrResult;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people1 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people1, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//Задание 3
function currentDate() {
    console.log(new Date());
}
      
function seconds() {
    let counter = 0;
    let intervalId = setInterval(() => {
    currentDate();
    counter += 3;
    if (counter >= 30) {
        clearInterval(intervalId);
        console.log('30 секунд прошло');
    }
    }, 1000 * 3);
}
      
seconds();

//Задание 4
function delayForSecond(callback) {
// Код писать можно только внутри этой функции
    setTimeout(callback, 1000);       
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSeconds(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSeconds(() => sayHi('Глеб'));