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

class Stopwatch {
  constructor() {
    this.timerId = null;
    this.dateStart = null;
    this.startBtn = document.querySelector("#start");
    this.stopBtn = document.querySelector("#stop");
    this.sec = document.querySelector(".seconds");
    this.min = document.querySelector(".minutes");
    this.hours = document.querySelector('.hours')

    this.action = this.action.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  action() {
    const delta = Date.now() - this.dateStart;
    //   console.log(delta);
    const sec = Math.floor((delta / 1000) % 60);
    const minutes = Math.floor((delta / 1000 / 60) % 60);
    const hours = Math.floor((delta / 1000 / 60 / 60) % 24);

    this.sec.textContent = sec < 10 ? `0${sec}` : sec;
    this.min.textContent = minutes < 10 ? `0${minutes}`: minutes;
    this.hours.textContent = hours < 10 ? `0${hours}` : hours
  }

  start() {
    this.timerId = setInterval(this.action, 500);
    this.dateStart = Date.now();
  }

  stop() {
    clearInterval(this.timerId);
  }

  init() {
    this.startBtn.addEventListener("click", this.start);
    this.stopBtn.addEventListener("click", this.stop);
  }
}

const watch = new Stopwatch();
watch.init();

// let secText = document.querySelector('.seconds');
// let minText = document.querySelector('.minutes');
// let hoursText = document.querySelector('.hours');
// let daysText = document.querySelector('.days');

// const deadline = new Date(2020, 0, 1, 0, 0, 0);

// function timer() {
//     const today = new Date();

//     const delta = deadline - today;

//     const sec = Math.floor(delta / 1000) % 60;
//     const min = Math.floor(delta / 1000 / 60) % 60;
//     const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
//     const day = Math.floor(delta / 1000 / 60 / 60 / 24);

//     secText.textContent = sec < 10 ? `0${sec}` : sec;
//     minText.textContent = min < 10 ? `0${min}` : min;
//     hoursText.textContent = hours < 10 ? `0${hours}` : hours;
//     daysText.textContent = day < 10 ? `0${day}` : day;
//     // console.log(day);
// }

// setInterval(timer, 1000);

// class Timer {
//     constructor(secClassName, minClassName, hoursClassName, daysClassName, deadline) {
//         this.secText = document.querySelector(secClassName);
//         this.minText = document.querySelector(minClassName);
//         this.hoursText = document.querySelector(hoursClassName);
//         this.daysText = document.querySelector(daysClassName);
//         this.deadline = new Date(deadline.year, deadline.month, deadline.date, deadline.hour, deadline.minute, deadline.sec)

//         this.logic = this.logic.bind(this);
//     }

//     logic() {
//         const today = new Date();
//         const delta = this.deadline - today;
//         const sec = Math.floor(delta / 1000) % 60;
//         const min = Math.floor(delta / 1000 / 60) % 60;
//         const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
//         const day = Math.floor(delta / 1000 / 60 / 60 / 24);

//         this.secText.textContent = sec < 10 ? `0${sec}` : sec;
//         this.minText.textContent = min < 10 ? `0${min}` : min;
//         this.hoursText.textContent = hours < 10 ? `0${hours}` : hours;
//         this.daysText.textContent = day < 10 ? `0${day}` : day;
//     }

//     start() {
//         setInterval(this.logic, 1000);
//     }
// }

// const result = new Timer('.seconds', '.minutes', '.hours', '.days', {
//     year: 2020,
//     month: 0,
//     date: 1,
//     hour: 0,
//     minute: 0,
//     sec: 0
// });
// result.start();
// console.log(result);

// const deadline = new Date(2019, 8, 29)
// let secText = document.querySelector('.seconds');
// let minText = document.querySelector('.minutes');
// let hoursText = document.querySelector('.hours');
// let daysText = document.querySelector('.days');
// function timer() {
//     const today = new Date();
//     let result = deadline - today;
//     let sec = Math.floor(result / 1000);
//     let min = Math.floor(sec / 60);
//     let hours = Math.floor(min / 60);
//     let days = Math.floor(hours / 24);
//     sec = sec % 60;
//     min = min % 60;
//     hours = hours % 24;
//     // days = days;

//     secText.textContent = sec < 10 ? `0${sec}`: sec;
//     minText.textContent = min < 10 ? `0${min}`: min;
//     hoursText.textContent = hours < 10 ? `0${hours}`: hours;
//     daysText.textContent = days < 10 ? `0${days}`: days;
// }

// setInterval(timer, 1000)
