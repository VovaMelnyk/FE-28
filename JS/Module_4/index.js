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

