// const auto = {
//     maxSpeed: 300,
//     color: 'red',
//     engineType: 'electro',
//     model: 'X9',
//     mark: 'bmw',
//     price: 100000,
//     currency: 'USD',
//     isAutomat: false,
//     isEngineOn: false,
//     // startEngine: function() {
//     //     car.isEngineOn = true
//     // }
//     startEngine() {
//         this.isEngineOn = true
//     },

//     changePrice(newPrice) {
//         this.price = newPrice
//     },

//     showModel() {
//         return this.model
//     },

//     showMark() {
//         return this.mark
//     },

//     showInfo() {
//         // this = auto
//         return `${this.showMark()} ${this.showModel()}`
//     }
// }

// console.log(car.color);
// console.log(car['price']);

// function showKey (obj, key) {
//     return obj[key]
// }

// console.log(showKey(car, 'color'));
// console.log(showKey(car, 'price'));
// console.log(showKey(car, 'model'));
// console.log(showKey(car, 'engineType'));


// let result = car.price;
// car.maxSpeed = 120000
// console.log(car);
// car.color = 'blue'
// console.log(car);

// console.log(car);

// delete car.color

// console.log(car.test);

// function inputHandler(value, name) {
//     const obj = {
//         [name]: value
//     }
//     return obj;
// }

// let passwordObj = inputHandler('skfhsdkhfs', 'password');
// let userObj  = inputHandler('user@gmail.com', 'email');
// let loginObj =  inputHandler('user', 'login');

// console.log(passwordObj);
// console.log(userObj);
// console.log(loginObj);


// const user = {
//     password : passwordObj,
//     user: userObj,
//     login: loginObj
// }

// console.log(user);

// let arr1 = [1, 3, 5];
// let arr2 = [6, 8, 0];

// let arr3 = [].concat(arr1, arr2);

// let arr3 = [...arr1, ...arr2]


// let passwordObj = inputHandler('skfhsdkhfs', 'password');
// // dfsdfkdshfsdfs
// // dfsdfkdshfsdfssdfsdhfkdshf
// passwordObj = inputHandler('user@gmail.com', 'email');
// // fndsfdfksh
// // dfsdhkfsfhsd
// // sdfsdfsjhg
// passwordObj =  inputHandler('user', 'login');

// console.log(passwordObj);

// let password = 'fsfsdfsd';
// let email = 'email@gmail.com'
// let login = "user"

// let user = {
//     login: login,
//     email: email,
//     password: password
// }

// let user = {
//     login, // login: login
//     email, // email: email
//     password // password: password
// }

// console.log(user);


// auto.startEngine();
// auto.changePrice(12000)
// console.log(auto);

// console.log(showInfo());


// function a () {

// }

// const b = function () {

// }


// const c = () => {

// }

// for (let key in auto) {
//     console.log(`${key}: ${auto[key]}`);
// }

// console.log(Object.keys(auto));
// console.log(Object.values(auto));
// console.log(Object.entries(auto));


// let a = {
//     x: 'b',
//     y: 'c'
// }

// let b = {
//     key1: 'x',
//     key2: 'y'
// }

// let arr = [1,2,3,4,5];
// // let newArr = arr.slice()
// let newArr = [...arr];

// let arr = [] // link1

// let i = 0;
// while (i < 3) {
//     let userString = prompt('Enter string');
//     arr = [...arr, userString] // link2
//     i++
// }

// console.log(arr);

// let a = {
//     x: 1,
//     y: 2
// }

// let b = {
//     z: 5,
//     y: 4
// }

// let c = {
//     w: 7,
//     z: 8
// }

// let final = {
//     ...a,
//     ...b,
//     ...c
// }

// console.log(final);

// const sum = (a,...args) => {
//     console.log(args);
// }

// sum(1,2,3,4,5)

// let user = {
//     name: 'User',
//     age: 23,
//     isFrontend: true
// }

// let a = user.name;
// let b = user.age;
// let c = user.isFrontend;

// console.log(a);
// console.log(b);
// console.log(c);

// const  {age} = user;

// console.log(surname); // const name = user.name
// console.log(age); // const age = user.age
// console.log(isFrontend); // const isFrontend = user.isFrontend
// // console.log(gender);

// function userInfo(name, lastName, age) {
//     return `${name} ${lastName} ${age}`
// }

// console.log(userInfo('surname','34', 'name'));

// function userInfo(userObject) {
//     return `${userObject.name} ${userObject.lastName} ${userObject.age}`
// }
// console.log(userInfo({lastName: 'surname', age: '34', name: 'user'}));

// function userInfo ({name, age}) {
//     return `${name} ${age}`
// }

// console.log(userInfo({lastName: 'surname', age: '34', name: 'user'}));

// let arr = [1,4,6];

// // let a = arr[0];
// // let b = arr[1];
// // let c = arr[2];

// const [b, a, c] = arr;

