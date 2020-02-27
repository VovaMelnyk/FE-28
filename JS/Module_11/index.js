// sync code
// function add(a, b) {
//   return a + b;
// }
// console.log("object");
// console.log("Hello");
// // alert("sfdfsdf");
// add(1, 3);

// let arr = [];
// for (let i = 0; i < 10000000; i++) {
//   arr.push(i);
// }

// //async

// async function loop() {
//   let arr = [];
//   for (let i = 0; i < 10000000; i++) {
//     arr.push(i);
//   }
//   console.log(arr);
// }

// loop()

// console.log('next code');
// console.log('next code');

// console.log('next code');

// console.log('next code');

// console.log('next code');

// setTimeout(() => console.log('async'), 2000)

// async code
// setTimeout clearTimeout
// function hello() {
//   console.log("Hello");
// }
// const timeoutId = setTimeout(hello, 1000);
// const intervalId = setInterval(hello, 1000);
// console.log(timeoutId);
// console.log(intervalId);
// const btn = document.querySelector("#stop");
// function stopInterval() {
//   clearInterval(intervalId);
// }
// btn.addEventListener('click', stopInterval)
// clearTimeout()

// setInterval clearInterval
// timeout and interval delay

// let arr = [];
// for (let i = 0; i < 10000000; i++) {
//     arr.push(i);
// };
// console.log(arr);
// const stop = document.querySelector('button');
// function sayHello() {
//     console.log('Hello');
// }

// const id = setTimeout(sayHello, 2000);
// console.log(id);
// console.log('Test');

// function greet() {
//     console.log("Hello");
// }

// const id = setInterval(greet, 1);

// function stopInterval() {
//     clearInterval(id);
// };
// stop.addEventListener('click', stopInterval)

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// date (new Date() getDate, getMonth, getFullYear, getDay, getTime, getHours, getMinutes, getSeconds, getMileseconds, now)
// const today = new Date()
// console.log(today);
// console.log(today.getDate());
// console.log(today.getMonth());
// console.log(today.getFullYear());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());
// console.log(today.getTime());
// console.log(Date.now());

// timer

// stopwatch

// class Stopwatch {
//   constructor() {
//     this.timerId = null;
//     this.dateStart = null;
//     this.startBtn = document.querySelector("#start");
//     this.stopBtn = document.querySelector("#stop");
//     this.sec = document.querySelector(".seconds");
//     this.min = document.querySelector(".minutes");
//     this.hours = document.querySelector('.hours')

//     this.action = this.action.bind(this);
//     this.start = this.start.bind(this);
//     this.stop = this.stop.bind(this);
//   }

//   action() {
//     const delta = Date.now() - this.dateStart;
//     //   console.log(delta);
//     const sec = Math.floor((delta / 1000) % 60);
//     const minutes = Math.floor((delta / 1000 / 60) % 60);
//     const hours = Math.floor((delta / 1000 / 60 / 60) % 24);

//     this.sec.textContent = sec < 10 ? `0${sec}` : sec;
//     this.min.textContent = minutes < 10 ? `0${minutes}`: minutes;
//     this.hours.textContent = hours < 10 ? `0${hours}` : hours
//   }

//   start() {
//     this.timerId = setInterval(this.action, 500);
//     this.dateStart = Date.now();
//   }

//   stop() {
//     clearInterval(this.timerId);
//   }

//   init() {
//     this.startBtn.addEventListener("click", this.start);
//     this.stopBtn.addEventListener("click", this.stop);
//   }
// }

// const watch = new Stopwatch();
// watch.init();
//  ===============================
// Promises

// pending - Очікування
// resolve - Виконано
// rejected - помилка

// template

// const firstPromise = new Promise((ok, err) =>{
// })

// const promise = new Promise((resolve, reject) => {
//   const arr = [];
//   for (let i = 0; i < 100000000; i++) {
//     arr.push(i);
//   }
//   const sum = arr.reduce((acc, el) => acc + el);

//   if (sum % 2 !== 0) {
//     resolve(sum);
//   } else {
//     reject("Error");
//   }
// });

// promise.then(
//   response => console.log(response),
//   err => console.log(err)
// );

// promise
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// function asyncLoop(count) {
//   return new Promise((resolve, reject) => {
//     const arr = [];
//     for (let i = 0; i < count; i++) {
//       arr.push(i);
//     }
//     const sum = arr.reduce((acc, el) => acc + el);

//     if (sum % 2 !== 0) {
//       resolve(sum);
//     } else {
//       reject("Error");
//     }
//   });
// }

// let thenResult = null;

// asyncLoop(100000034)
//   .then(num => num / 2)
//   .then(result => (thenResult = result))
//   .then(() => console.log(object))
//   .catch(err => console.log(err))
//   .finally(() => console.log("hello"));

// console.log(thenResult);

// Promise.all([asyncLoop(12), asyncLoop(26), asyncLoop(15)])
// .then(res =>
//   console.log(res)
// );

// Promise.race([asyncLoop(35), asyncLoop(10)])
// .then(data => console.log(data))

// Promise.all([asyncLoop(10), asyncLoop(100000), asyncLoop(1000000)])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// Promise.allSettled([asyncLoop(12), asyncLoop(100000), asyncLoop(1000000)])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// function userAsk(callback) {
//     const answer = prompt('How are you')

//     callback(answer)
// }

// const log = text => console.log(text);

// userAsk(log)

// function userAsk() {
//     const answer = prompt('How are you')

//    return Promise.resolve(answer)
// }

// userAsk().then(data => console.log(data))
