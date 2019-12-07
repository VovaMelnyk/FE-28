// 1) Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.
// capitalize('the quick brown fox') // 'The Quick Brown Fox'

// 1) зробити з строки масив (split)
// 2) перебрати масив циклом (for of)
// 3) отримати доступ до першої літери і зробити її великою (string[0] toUppercase)
// 4) видалити з слова першу літеру і додати до неї велику (slice i +)

// function capitalize (string) {
//     const arr = string.split(' ')
//     const finalArray =[]
//     for(let word of arr) {
//         const firstLetter = word[0].toUpperCase()
//         const restString = word.slice(1)
//         const result = firstLetter + restString;
//         finalArray.push(result)
//     }
//     const finalString = finalArray.join(' ')
//     return finalString
// }

// const capitalizedString = capitalize('the quick brown fox');
// console.log(capitalizedString);

// 2) Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер
// aeiouAEIOU - checkString
// ‘the quick brown fox’ // 5

// 1) Зробити з строки масив (split())
// 2) створити цикл (for of)
// 3) Зробити з слова масив (split())
// 3.1) Створити цикл який буде перевіряти літери (for of)
// 4) зробити перевірку чи літера входить в набір checkString (includes)
// 5) будемо збільшувати суму голосних літер якщо перевірка дала true (total++)
// 6) вертаємо суму (return)

// const checkString = function (string){
//     const checkString = 'aeiouAEIOU';
//     const arrWords = string.split(" ");
// let total = 0;
//     for (let word of arrWords) {
//         const arrLetters = word.split('');
//         for (let letters of arrLetters) { 
//             let symbol = checkString.includes(letters) 
//             if (symbol){
//                 total++;
//             }
//         }
    
//     }
// return total;
// }
// console.log(checkString('the quick brown fox'))

// 3) Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах

// const farangeit = function (number){
//  return 9/5 * number +32;
// };

// console.log(farangeit(36));

// 2) Написати ф-ю rgbToHex яка приймає колір в форматі rgb і повертає колір в форматі hex
// rgbToHex(‘255,255,255’) // #FFFFFF

// 1) З строки робимо масив
// 2) Створимо цикл для роботи з кожним кольором окремо
// 3) перевести строку в число
// 4) перевести число в 16 систему
// 5) обєднати строки в одну

// function rgbToHex(string){
//     const colors = string.split(',');
//     let hex = "#";
//     for (let el of colors){
//         let color = Number(el).toString(16);
//         hex += color;
//     }
//     return hex;
// }

// console.log(rgbToHex('255,255,255'));


// Написати гру камінь ножиці папір. Де компютер загадує своє значення потім користувач вводить свій варіант і далі ми 
// бачимо результат на екпані хто Виграв

// 1) створити масив з трьома варіантами (const)
// 2) Вибрати випадковий елемент масива (це буде варіант компютера) (function(arr) Math.random)
// 3) Просимо в користувача ввести його варіант (promp)
// 4) зробити перевірку хто виграв (if)
// 5) Показати результат

// game() {
//     computerChoise(arr)
//     prompt()
//     checkResult(userVariant, computerVariant)
// }