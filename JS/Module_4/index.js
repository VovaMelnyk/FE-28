// const parsing = [
//     {
//         "priority": 0,
//         "start": false,
//         "percent": 25
//     },
//     {
//         "priority": -1,
//         "start": true,
//         "percent": 100
//     },
//     {
//         "priority": -2,
//         "start": false,
//         "percent": 50
//     }
// ]

// const HOF = (next) => {
//     next();
// }

// const b = () => {
//     console.log('callback');
// }

// const c = () => {
//     console.log('another callback');
// }

// HOF(b);

// HOF(c)


// const filter = (arr, checkFunction) => { // arr => parsing; checkFunction => percentCheck
//     const filteredArr = [];
//     for (let el of arr) {
//         const result = checkFunction(el) // percentCheck(el)
//         if(result) {
//             filteredArr.push(el)
//         }
//     }
//     return filteredArr
// }

// const percentCheck = obj => obj.percent < 100

// const statusCheck = obj => obj.start


// const percentFilter = filter(parsing, percentCheck);
// const statusFilter = filter(parsing, statusCheck);

// const percentFilter = filter(parsing, obj => obj.percent < 100);
// const statusFilter = filter(parsing, obj => obj.start);

// console.log(percentFilter);
// console.log(statusFilter);

// function first () {
//     console.log('first');
// }

// function second() {
//     console.log('second');
// }

// function start () {
//     console.log('start');
//     first();
//     second();
// }

// console.log('start function finished');

// global: {value, message, first}


// let value = 5;
// let message = 'Hello'


// const first = () => {
//     // firstEnv : {value, second, envLink: global}
//     const value = 12

//     const second = () => {
//         // second : {envLink: firstEnv}
//         console.log(message);
//         console.log(value);
//     }

//     second()

//     console.log(message);
//     console.log(value);
// }

// first()

// const a = 4545;
// // global: {value, message, first, a}

// first()


// function wrapper () {
//     let count = 0
//     function countChange () {
//         count++
//         console.log(count);
//     }
//     return countChange
// }

// const user = wrapper(); // { count: 0, countChange}
// const user2 = wrapper(); // { count: 0, countChange}

// console.log(user);
// user() // {count: 0, countChange} 
// user() // {count: 1, countChange} 
// user() // {count: 2, countChange} 
// console.log(user2);
// user2() // {count: 0, countChange} 
// user2() // {count: 1, countChange}
// user2() // {count: 2, countChange}
// user2() // {count: 3, countChange}
// user2() // {count: 4, countChange}

// 'use strict'

// function a () {
//     console.log(this);
// }

// a()

// const b = () => {
//     console.log(this);
// }

// b()
// window.a()

// let user = {
//     name: 'User',
//     age: 45,
//     showThis() {
//         console.log('showThis', this);

//         const showArrowThis = () => {
//             console.log('nested this', this);
//         }

//         showArrowThis();
//     },

//     // showArrowThis : () => {
//     //     console.log(this);
//     // }
// }

// user.showThis();

// // user.showArrowThis();

// call apply bind

// const hotel = {
//     name: 'Resort Hotel',
//     price: 2500,
// };
// const hotel2 = {
//     name: '4 Seasons Hotel',
//     price: 500,
// };
// const hotel3 = {
//     name: '7 days Hotel',
//     price: 700,
// };

// hotel.showHotelInfo = function () {
//     return `${this.name} ${this.price}`
// }

// console.log(hotel.showHotelInfo())

// call apply

// function showHotelInfo (name, period) {
//     return `Hello ${name} ${this.name} ${this.price} total cost ${period * this.price}`
// }

// console.log(showHotelInfo.call(hotel,'Homer', 5));
// console.log(showHotelInfo.call(hotel3, 'Bender', 10));

// console.log(showHotelInfo.apply(hotel2,['Fry', 2]));

// showHotelInfo = showHotelInfo.bind(hotel);

// console.log(showHotelInfo('Homer', 3));

// find([1,2,4,5], callback(5)) //5
// find([1,2,4,5], callback(7)) // undefined
// find([{name: 'User', age: 23}, {name: 'Tester', age: 34}], callback({obj.name === 'User'})) // {name: 'User', age: 23}

// 1) Перебирати вхідний масив
// 2) Робимо перевірку на обєкт (перевіряємо елемент масива на відповідність обєкту)
// 3) передаємо елемент в наш callback
// 4) callback робить перевірку і якщо елемент який нам потрібен то ми його повертаємо

// const find = (arr, callback) => {
//     for (let el of arr) {
//         let result = callback(el)
//         if (result) {
//             return el
//         }
//     }
// }

// const checkNumber = number => number === 5


// const checkNewNumber = (number) => {
//     return number === 7
// }

// const findObj = (obj) => {
//     return obj.name === 'User'
// }

// console.log(find([1,2,4,5],checkNumber));
// console.log(find([1,2,4,5],checkNewNumber));

// console.log(find([1,2,4,5], number => number === 5));
// console.log(find([1,2,4,5],checkNewNumber));

// console.log(find([{name: 'User', age: 23}, {name: 'Tester', age: 34}], findObj));


// create find method
// create every method
// create some method
// create reduce method
// create compact method //delete falsy values
// parsing task

// const every = (arr, cb) => {
//     for(let element of arr) {
//       let result = cb(element)
//       if (result === false) {
//           return false
//       }
//     }
//     return true
// }



// const checkNumber = (number) => {
//     if (number < 10 ) {
//         return true
//     } else {
//         return false
//     }
// }

// every([1,20,3,4,5], checkNumber)

// const some = (arr, cb) => {
//     for(let element of arr) {
//         let  result = cb(element)
//         if(result === true) {
//             return true
//         }
//     }
//     return false
// }

// const checkSomeNumber = (num) => {
//     // if (num > 10) {
//     //     return true
//     // } else {
//     //     return false
//     // }

//     return num > 10
// }

// some([1,2,3,23,5], checkSomeNumber) // number > 10 // true

// reduce([1,2,3,4,5], callback) // 15

// 1) Перебрати масив (reduce)
// 2) Створити змінну в яку буде накопичуватися сума (reduce)
// 3) Сумуємо елемент і змінну з пункту 2 (callback)
// 4) Повернути фінальний результат (акумулятор) (reduce)

// const reduce = (arr, cb) => {
//     let accum = 0

//     for (let el of arr){
//         accum = cb(accum, el)
//     }
//     return accum
// }
// const sumOfEls = (accum, el) =>{
//     return accum += el

// }
// console.log(reduce([1,2,3,4,5], sumOfEls)) // 15

compact([1,0,'', null, 'Hello']) // [1,'Hello']

// 0) Створимо пустий масив
// 1) Перебираємо масив
// 2)Перевіряємо чи елементи масива дорівнюють true
// 3) Якщо елемент = true тоді додаємо його в масив з пункта 0 
// 4) Показати відповідь



