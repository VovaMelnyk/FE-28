// const password = prompt("Enter password");
// if (password === "admin") {
//   alert("Welcome admin");
// } else if (password === "user") {
//   alert("Welcome user");
// } else if (password === "batman") {
//   alert("Welcome batman");
// } else {
//   alert("Wrong password");
// }

// switch (password) {
//   case "admin":
//     alert("Welcome admin");
//     break;
//   case "user":
//     alert("Welcome user");
//     break;
//   case "batman":
//     alert("Welcome batman");
//     break;
//   default:
//     alert("Wrong password");
//     break;
// }

// const isDark = false;
// let theme;

// if (isDark) {
//   theme = "dark";
// } else {
//   theme = "light";
// }

// let theme = isDark ? "dark" : "light";
// let theme = isDark === true ? "dark" : isDark === null ? "light" : "blue";

// 1) перевірка на роботу
// 2) лічильник
// 3) тіло циклу
// 4) зміна лічильника

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

// let count = 0;
// do {
//   console.log(count);
//   count++;
// } while (count < 10);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   //   if (i % 2 === 1) {
//   //     continue;
//   //   }
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// const emails = ["user@gmail.com", "tester@gmail.com", "admin@gmail.com"];
// console.log(emails[1]);
// console.log(emails[0]);
// console.log(emails[5]);
// console.log(emails.length); // 3
// console.log(emails[-1]); // undefined
// console.log(emails[emails.length - 1]);
// emails.pop();
// let lastElement = emails.pop();
// console.log(lastElement);
// console.log(emails);
// emails.push("support@gmail.com");
// console.log(emails);
// let firstElement = emails.shift();
// console.log(firstElement);
// emails.unshift("manager@gmail.com");
// console.log(emails);
// emails.splice(2, 3); // delete
// emails.splice(2, 1, "user2@gmail.com"); // replace
// emails.splice(2, 0, "user2@gmail.com"); // add
// console.log(emails);
// const newArr = emails.slice();
// console.log(emails.includes('tester@gmail.com'));

// const checkEmail = 'tester@gmail.com';
// for(let i = 0; i < emails.length; i++) {
//     if(emails[i] === checkEmail) {
//         console.log(true);
//         break;
//     }
//     if( i === emails.length - 1) {
//         console.log(false);
//     }
// }

// for(let element of emails) {
//     console.log(element);
// }

// console.log(emails.indexOf("tester@gmail.com"));

// for (let el of emails) {
//     if (el === "tester@gmail.com") {

//     }
// }

// for (let i = 0, length = emails.length; i < length; i ++) {
//     if (el === "tester@gmail.com") {
//         console.log(i);
//     }
// }
// const logins = ['user', 'tester', 'admin'];

// const newArray = [].concat(emails,logins);

// console.log(emails);
// console.log(logins);
// console.log(newArray);

// const newEmails = emails.slice();
// newEmails.reverse();
// console.log('original',emails);
// console.log('reverse', newEmails);

// const str = "oko";
// const str2 = "Hello";

// const strSplit = str
//   .split("")
//   .reverse()
//   .join("");
// console.log(strSplit);
// console.log(str === strSplit);

// const str2Split = str2.split("");
// const reverseArray = str2Split.reverse();
// const reverseString = reverseArray.join("");
// console.log(str2 === reverseString);

// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);

// a = 45;

// console.log(a);
// console.log(b);

// const numbers = [1, 2, 4, 5, 6];
// const newNumbers = numbers;
// newNumbers = null;

// console.log(numbers);
// console.log(newNumbers);

// numbers.push(10);

// console.log(numbers);
// console.log(newNumbers);
// greet();

// function greet() {
//   alert("Hello");
// }

// const greet = function() {
//   alert("Hello");
// };
// function checkLeapYear(year) {
//   if (year % 4 === 0) {
//     return true;
//   }
//   return false;
// }

// let result = checkLeapYear(2004);
// let result2 = checkLeapYear(2001);

// console.log(result);
// console.log(result2);

// const emails = ["user@gmail.com", "tester@gmail.com", "admin@gmail.com"];
// const anotherEmails = ["user2@gmail.com"];
// const userEmail = "admin@gmail.com";
// function checkEmailsExist(email, emailsArray) {
//   //   if (emailsArray.includes(email)) {
//   //     return true;
//   //   }
//   //   return false;
//   if (typeof email === "string") {
//     return emailsArray.includes(email);
//   }
//   return "Error";
// }

// const result = checkEmailsExist(userEmail, emails);
// const result2 = checkEmailsExist(userEmail, anotherEmails);

// console.log(result);
// console.log(result2);

// function sum () {
//   // console.log(arguments);
//   let arr = Array.from(arguments);
//   let total = 0
//   for (let number of arr) {
//     total += number
//   }

//   return total
// }
// console.log(sum(10,20, 40));
// console.log(sum(12, 34));
// console.log(sum(12,34,56,676,98));


// const sum = function  (a, b) {
//   return a + b
// }

// const sum = (a, b) => {
//   return a + b
// }

// const sum = (a, b) => a + b

// let a = 5
// let b = 20 

// function firstStep () {
//   // let a = 10
//   // let b = 15

//   console.log('first',a);
//   console.log('first',b);

//   function secondStep() {
//     let a = 50;
//     let b = 200

//     console.log('second',a);
//     console.log('second',b);
//   }

//   secondStep()
// }

// firstStep()