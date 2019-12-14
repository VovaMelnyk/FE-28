// 1) Написати  ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару)
// Ця ф-я має повернути ціну замовлення

// const productsPrice = {
//     apple: 20,
//     orange: 5,
//     cheese: 12,
//     pork: 45,
//     bread: 23
// }

// const orderA = {
//     apple: 5,
//     cheese: 1,
//     bread: 3
// }

// const orderB = {
//     orange: 10,
//     pork: 2,
//     bread: 1
// }

// const total=(productsPrice,orders)=>{
//     let totalOrders=0;
//         for(order in orders){
//             totalOrders+= orders[order] * productsPrice[order];
//         }
//         return totalOrders;
// };

// console.log(total(productsPrice,orderA));

// 2) Написати ф-ю яка буде показувати статус вашої бібліотеки на основі данних масива
// libraryStatus(arr) має вивести такий результат :
// Already read 'Bill Gates' by The Road Ahead.
// Already read 'Steve Jobs' by Walter Isaacson.
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

// const library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false
//   }
// ];

// const isRead = array => {
//   for (obj of array) {
//     if (obj.readingStatus) {
//       console.log(` Already read ${obj.title} by ${obj.author}`);
//       continue
//     }
//     console.log(`must to read ${obj.title} by ${obj.author}`);
//   }

// };
// isRead(library)

// 4) Створити обєкт піци з полями і методами
//     В обєкті має бути такі поля  і методи:
//     1) поле  для збереження розміру піци
//     2) поле для збереження списку добавок
//     3) поле  для збереження списку соусів
//     4) метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
//     5) метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати)
//     6) метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
//     7) метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
//     8) метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
//     9) метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
//     10 ) метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
//     11) метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
//     12) метод що показує час приготуванни в хвилинах в залежності від складності піци
//     13) Метод валідації піци який верне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу))
//     (використовувати this)

// const SIZES = {
//   BIG: {
//     price: 25,
//     cal: 100,
//     time: 15,
//     name: "big"
//   },
//   SMALL: {
//     price: 15,
//     cal: 50,
//     time: 7,
//     name: "small"
//   },
//   MEDIUM: {
//     price: 15,
//     cal: 50,
//     time: 7,
//     name: "medium"
//   }
// };

// const STUFFING = {
//   CHEESE: {
//     price: 6.5,
//     cal: 45,
//     time: 2,
//     name: "cheese"
//   },
//   BEACON: {
//     price: 10,
//     cal: 70,
//     time: 6,
//     name: "beacon"
//   },
//   TOMATO: {
//     price: 12.1,
//     cal: 4,
//     time: 5,
//     name: "tomato"
//   },
//   CHICKEN: {
//     price: 9.3,
//     cal: 30,
//     time: 5.1,
//     name: "chicken"
//   }
// };

// const SAUCES = {
//   MUSTARD: {
//     price: 3,
//     cal: 5,
//     time: 1,
//     name: "mustard"
//   },
//   KETCHUP: {
//     price: 4.2,
//     cal: 20,
//     time: 1.5,
//     name: "ketchup"
//   },
//   BOLOGNESE: {
//     price: 7.5,
//     cal: 50,
//     time: 3,
//     name: "bolognese"
//   }
// };

// Для перевірки роботи програми треба:
// 1) Вибрати розмір піци
// 2) Додати добавку
// 3) Додати іншу добавку
// 4) Додати добавку яка вже існує
// 5) Додати соус
// 6) Додати ще один соус
// 7) Додати соус що існує
// 8) Порахувати ціну піци
// 9) Порахувати калорії в піці
// 10) Порахувати час приготування
// 11) Видалити одну добавку
// 12) Видалити соус
// 13) Змінити розмір піци
// 14) Порахувати нову ціну
// 15) Порахувати нову кількість калорій
// 16) Порахувати новий час приготування
// 17) Провести валідацію піци
// 18) Вивести інформацію про сформовану піцу на екран
// 19) Видалити останій соуси
// 20) Провести валідацію піци
// 21) Вивести інформацію про сформовану піцу на екран

// const pizza = {
//   pizzaSize: {},
//   pizzaStuffing: [],
//   pizzaSouse: [],
//   takeSize(size) {
//     if (typeof size === "object") {
//       this.pizzaSize = size;
//     } else {
//       console.log("Size error");
//     }
//   },
//   addStuffing(stuff) {
//     if (this.pizzaStuffing.includes(stuff)) {
//       console.error("Fatal");
//       return;
//     }
//     this.pizzaStuffing.push(stuff);
//   },

//   addSouce(souce) {
//     if (this.pizzaSouse.includes(souce)) {
//       console.error("Fatal");
//       return;
//     }
//     this.pizzaSouse.push(souce);
//   },

//   delStuffing(stuff) {
//     if (!this.pizzaStuffing.includes(stuff)) {
//       console.error("Fatal");
//       return;
//     }
//     let index = this.pizzaStuffing.indexOf(stuff);
//     this.pizzaStuffing.splice(index, 1);
//   },
//   delSouce(souce) {
//     if (!this.pizzaSouse.includes(souce)) {
//       console.error("Fatal");
//       return;
//     }
//     let index = this.pizzaSouse.indexOf(souce);
//     this.pizzaSouse.splice(index, 1);
//   },
//   totalPrice() {
//     let total = 0;
//     total += this.pizzaSize.price;
//     for (const stuff of this.pizzaStuffing) {
//       total += stuff.price;
//     }
//     for (const souce of this.pizzaSouse) {
//       total += souce.price;
//     }
//     console.log(total.toFixed(2));
//     return total;
//   },
//   isValid() {
//      return this.pizzaStuffing.length && this.pizzaSouse.length && Object.keys(this.pizzaSize).length
//   },
//   totalInfo() {
//       if(this.isValid()){
//           let stuffName = '';
//           let souceName = '';
//         for (const stuff of this.pizzaStuffing) {
//             stuffName += stuff.name;
//           }
//           for (const souce of this.pizzaSouse) {
//             souceName += souce.name;
//           }

//           return `Price: ${this.totalPrice()}, ${stuffName}, ${souceName}`
//       }
//       console.error("Fatal");
//   }
// };
// pizza.takeSize(SIZES.BIG);
// pizza.addStuffing(STUFFING.CHEESE);
// pizza.addStuffing(STUFFING.CHICKEN);
// pizza.addSouce(SAUCES.BOLOGNESE);
// // pizza.delStuffing(STUFFING.CHEESE)
// // pizza.addStuffing(STUFFING.CHEESE);
// console.log(pizza);
// pizza.totalPrice();


// console.log(pizza.totalInfo());