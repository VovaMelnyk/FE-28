// function Phone (model, price, currency, color) {
//     // this = {}
//     this.model = model
//     this.price = price
//     this.currency = currency,
//     this.color = color,
//     this.power = '5000mA'
//     this.changePower = function(number) {
//         this.power = number
//     }
//     this.showInfo = function () {
//         return `${this.model}/${this.color}/${this.power}`
//     }
//     // return this
// }

// const LG = new Phone ('I3', 12000, 'UAH', 'black')
// const Nokia = new Phone ('Nokia', 10453, 'UAH', 'red')
// console.log(LG);
// console.log(Nokia);

// console.log(Nokia.showInfo());
// console.log(LG.showInfo());


// let arr = [1,2,4]
// let arr = new Array (1,2,4)

// let user = {
//     name: 'User',
//     age: 23
// }

// console.log(user);

// let arr = [1,2,3,4];
// console.log(arr);

// let animal = {
//     canEat:true,
//     canSleep:true,
// }

// let dog = Object.create(animal)
// console.log(dog);
// dog.canBark = true

// console.log(dog);

// console.log(dog.canBark);
// console.log(dog.canEat);
// console.log(dog.canSleep);



// let dog = {
//     canBark: true
// }

// console.log(animal);
// console.log(dog);

function Phone (model, price, currency, color) {
    // this = {}
    this.model = model
    this.price = price
    this.currency = currency,
    this.color = color,
    this.power = '5000mA'
    // this.changePower = function(number) {
    //     this.power = number
    // }
    // this.showInfo = function () {
    //     return `${this.model}/${this.color}/${this.power}`
    // }
    // return this
}

//Phone.prototype = {constructor: template} // new Object

// Phone.prototype === LG.__proto__

Phone.prototype.changePower = function (number) {
    this.power = number
}

Phone.prototype.showInfo = function () {
    return `${this.model}/${this.color}/${this.power}`
}

// const LG = new Phone ('I3', 12000, 'UAH', 'black')
// const Nokia = new Phone ('Nokia', 10453, 'UAH', 'red')

function SmartPhone (model, price, currency, color, wifi = true ,bluetooht, camera) {
    // this = {}
    Phone.call(this, model, price, currency, color)
    // this = {model = model, price = price, currency = currency,color = color,power = '5000mA'}
    this.wifi = wifi,
    this.bluetooht = bluetooht,
    this.camera = camera
}

SmartPhone.prototype = Object.create(Phone.prototype)

SmartPhone.prototype.toggleCamera = function (bool) {
    this.camera = bool
}

const Iphone = new SmartPhone('I4', 12000, 'UAH', 'black',false, true, '5MP')

console.log(Iphone.showInfo());
console.log(Iphone);