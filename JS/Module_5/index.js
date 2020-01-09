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

// function Phone (model, price, currency, color) {
//     // this = {}
//     this.model = model
//     this.price = price
//     this.currency = currency,
//     this.color = color,
//     this.power = '5000mA'
//     // this.changePower = function(number) {
//     //     this.power = number
//     // }
//     // this.showInfo = function () {
//     //     return `${this.model}/${this.color}/${this.power}`
//     // }
//     // return this
// }

// //Phone.prototype = {constructor: template} // new Object

// // Phone.prototype === LG.__proto__

// Phone.prototype.changePower = function (number) {
//     this.power = number
// }

// Phone.prototype.showInfo = function () {
//     return `${this.model}/${this.color}/${this.power}`
// }

// // const LG = new Phone ('I3', 12000, 'UAH', 'black')
// // const Nokia = new Phone ('Nokia', 10453, 'UAH', 'red')

// function SmartPhone (model, price, currency, color, wifi = true ,bluetooht, camera) {
//     // this = {}
//     Phone.call(this, model, price, currency, color)
//     // this = {model = model, price = price, currency = currency,color = color,power = '5000mA'}
//     this.wifi = wifi,
//     this.bluetooht = bluetooht,
//     this.camera = camera
// }

// SmartPhone.prototype = Object.create(Phone.prototype)

// SmartPhone.prototype.toggleCamera = function (bool) {
//     this.camera = bool
// }

// const Iphone = new SmartPhone('I4', 12000, 'UAH', 'black',false, true, '5MP')

// console.log(Iphone.showInfo());
// console.log(Iphone);


// class Counter {
    // constructor (value) {
    //     this.value = value
    // }
    // #value = 0
    // inc() {
    //     this.value++
    // }

    // inc = () => {
    //     this.value++
    // }

    // dec() {
    //     this.value--
    // }

    // get newValue () {
    //     return this.value / 2
    // }

    // set newValue (number) {
    //     this.value = number * 2
    // }
// }

// const c = new Counter (0)
// c.inc()
// c.inc()
// c.dec()
// // c.newValue = 10
// // console.log(c.newValue);
// console.log(c);


// function listener (action) {
//     action()
// }

// listener(c.inc)
// console.log(c);


// function Tank (x, y, armor, ammunition, color) {
    // this.hp = 100;
    // this.x = x;
    // this.y = y;
    // this.armor = armor;
    // this.ammunition = ammunition;
    // this.color = color;
    // this.isBroken = false;
// }

// Tank.prototype.move = function (x, y) {
    //  if (this.canMove()) {
    //     this.x = x;
    //     this.y = y;
    // }
// }

// Tank.prototype.canFire = function () {
//     return this.ammunition > 0
// }

// Tank.prototype.fire = function() {
//     if(this.canFire()) {
//         this.ammunition--
//     }
    
// }
// Tank.prototype.canHeal = function () {
//     return this.hp < 100
// }

// Tank.prototype.heal = function(extraHp) {
//     if(this.canHeal()) {
//         if(this.hp + extraHp <= 100) {
//             this.hp += extraHp
//         } else {
//             this.hp = 100
//         }
//     }
// }

// Tank.prototype.canMove = function() {
//     if (this.hp <= 0) {
//         this.isBroken = true
//         return false
//     } else {
//         return true
//     }
// }

// Tank.prototype.damage = function(damage) {
//     this.hp -= damage
// }

class Tank {
    constructor(x, y, armor, ammunition, color) {
        // this {}
        this.hp = 100;
        this.x = x;
        this.y = y;
        this.armor = armor;
        this.ammunition = ammunition;
        this.color = color;
        this.isBroken = false;
        // this = {}

        this.fire = this.fire.bind(this)
    }

    static showInfo () {
        console.log(this);
    }

    move(x ,y) {
        if (this.canMove()) {
            this.x = x;
            this.y = y;
        }
    }

    canFire = () => {
        return this.ammunition > 0
    }

    // fire =() => {
    //     console.log('context', this);
    //     if(this.canFire()) {
    //         this.ammunition--
    //     }
        
    // }

    fire () {
        console.log('context', this);
        if(this.canFire()) {
            this.ammunition--
        }
        
    }
// km => m
    get ammunitionProgress () {
        return this.ammunition * 100 / 10
    }
// m => km
    set ammunitionProgress (value) {
        this.ammunition = this.ammunition * value / 100
    }

    // calcProgres () {
    //     return this.ammunition * 100 / 10
    // }
}


// 100 - 10 
// 80 - x

// function listener (event, cb) {
//     cb()
// }


const player1 = new Tank(0, 0, 50, 10, 'red');

// listener('click', player1.fire)

// const player2 = new Tank(10, 10, 60, 8, 'black');

// player1.move(50, 50)
// player1.fire()
// player2.damage(23)
// player1.move(100, 100)
// let result = player1.calcProgres()
// console.log(player1.ammunitionProgress);
// player1.ammunitionProgress = 300
// console.log(player1);
// Tank.showInfo()

// console.log(result);


// class Calculator {
//     constructor() {
//         this.a = null
//         this.b = null
//     }

//     start() {
//         this.a = Number(prompt())
//         this.b = Number(prompt())
//     }

//     showResult(value) {
//         console.log(`Результат операції ${value}`);
//     }

//     plus() {
//         const result = this.a + this.b
//         this.showResult(result)
//     }

//     minus() {
//         const result = this.a - this.b
//         this.showResult(result)
//     }

//     multiply () {
//         const result = this.a * this.b
//         this.showResult(result)
//     }

//     divide () {
//         const result = this.a / this.b
//         this.showResult(result)
//     }

//     learn(cb, key) {
//         console.log(cb);
//         this[key] = cb
//     }
// }

// function pow() {
//     const result = Math.pow(this.a, this.b);
//     this.showResult(result)
// }

// const calculator = new Calculator();

// calculator.start();
// calculator.learn(pow, 'pow')
// calculator.pow();


class Library {
    constructor(){
        this.books= []
        this.favoriteBooks=[]
    }
    buy(book){
        if(!this.books.includes(book)){
            this.books.push(book)
        }
    }
    sell(title) {


          let searchRes;
        for (const book of this.books) {
            if(book.title === title) {
                searchRes = book;
            }
        }
        let bookIndex = this.books.indexOf(searchRes);
        this.books.splice(bookIndex, 1);
    }
    addFavorite(title){
        for(const book of this.books){
            if (book.title===title){
                this.favoriteBooks.push(book);
            }
        }
    }

    removeFavorite(title){
        let serchedBook;
        for(const book of this.favoriteBooks){
            if(book.title === title){
                serchedBook = book;
            }
        }
        let indexOfBook = this.favoriteBooks.indexOf(serchedBook);
        this.favoriteBooks.splice(indexOfBook,1)
    }
    get сountFavouriteBooks(){
        return this.favoriteBooks.length;
    }
    get finishedBook(){
        const finshedBooks=[];
        for(const book of this.books){
            if(book.totalPages === book.currentPage){
               finshedBooks.push(book);
            }
        }
        return finshedBooks;
    }
    totalCost(){
        let total
        for(const book of this.books){
            total += book.price
        }
        return total
    }
}
