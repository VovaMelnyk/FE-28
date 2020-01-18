// Create empty
// const set = new Set();
// console.log(set);
// console.log(typeof set);
// Create empty with items
// const confectioneries = new Set(['oreo', 'marshmallow','oreo', 'kitkat', 'gingerbread']);
// console.log(confectioneries);
// Add item
// confectioneries.add('donut')
// console.log(confectioneries);
// add duplicate
// confectioneries.add('kitkat')
// console.log(confectioneries);
//Delete item
// confectioneries.delete('kitkat');
// console.log(confectioneries);
// Clear all 
// confectioneries.clear();
// console.log(confectioneries);
// Size
// console.log(confectioneries.size)
// Search items
// console.log(confectioneries.has('marshmallow'));
// console.log(confectioneries.values());
// console.log(confectioneries.keys());

// for (let confectionery of confectioneries) {
//     console.log(confectionery);
//   }
// convert to arr 
// const arr = [...confectioneries]
// console.log(arr);
// Unique value from arr
// let arr = [ 13, 11, 15, 21, 13, 11, 17, 17, 19, 19, 21 ];
// let collection = new Set (arr)
// console.log(collection);
// let uniqueArr = [...collection]
// console.log(uniqueArr);
// let uniqueArray = [...new Set(arr)];
// console.log(uniqueArray);
// Create Map
// const users = new Map();
// console.log(users);
// Add values to Map
// users.set('John Doe', {
//     email: 'johndoe@example.com',
//   });
  
//   users.set('Jane Jonson', {
//     email: 'janedoe@example.com',
//   });

//   users.set('John Doe', {
//     email: 'johndoe@example77.com',
//   });
  
  // console.log(users);

  // Delete items
  // users.delete('Jane Jonson');
  // console.log(users);

  // console.log(users.size);

  // Clear 
  // users.clear();
  // console.log(users);
// check if exist
// console.log(users.has('John Doe'));
// read value
// console.log(users.get('John Doe'))
// let userKeys = users.keys();
// console.log(userKeys);
// let userValues = users.values();
// console.log(userValues);
// for (let user of users) {
//     console.log('el: ', user);
//   }
// Map size


// const logger = function () {
//   let a = 10

//   function logValue () {
//     console.log(a);
//   }

//   function changeValue () {
//     a++
//   }

//   return {
//     log: logValue,
//     change: changeValue
//   }
// }

// const user = logger()
// const user2 = logger()
// const user3 = logger()
// const user4 = logger()

// (function() {

// })()

// (function() {

// })()

// let user = {
//   name: 'Bob',
//   age: 23
// }

// let skills = {
//   basic: ['HTML, CSS, JS'],
//   advanced: ['React, Angular, Next, Node']
// }

// let result = {
//   ...user,
//   ...skills
// }

// console.log(result);


// [...arr1, ...arr2]

// let message = {
//   author: 'User',
//   date: '12.1.23',
//   content: 'Helo world'
// }

// let newMessage = {
//   ...message,
//   content: 'Hello World'
// }

// console.log(newMessage);

