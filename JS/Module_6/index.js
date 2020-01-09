// async function getData () {
//     let result = null
//     let response = await fetch('https://restcountries.eu/rest/v2/all')
//     result = await response.json()
//     return result
// }

// getData().then(data => localStorage.setItem('arr', JSON.stringify(data)));

// const arr = JSON.parse(localStorage.getItem('arr'))
// console.log(arr);
// let numbers = [1,4,6,7,8,9]
// console.log(numbers);

// // function numberInclude (arr, num) {
// //     for (let number of arr) {
// //         if (number === num) {
// //             return true
// //         }
// //     }

// //     return false
// // }

// // console.log(numberInclude(numbers, 8))
// // console.log(numberInclude(numbers, 12))

// console.log(numbers.includes(8));
// console.log(numbers.includes(12));
// let users = ['admin', 'user']
// function addUser (user) {
//     let copyArr = [...users]
//     copyArr.push(user)
//     return copyArr
// }

// console.log(addUser('tester'))
// console.log(addUser('tester'))
// console.log(addUser('tester'))

// console.log(users);


// arr.method(function(el, index, arr))

// let newNumbers = []
// for (let number of numbers) {
//     newNumbers.push(number*2)
// }

// console.log(newNumbers);

// const newNumbers = numbers.map(function(number) {
//     return number * 2;
// })

// const newNumbers = numbers.map(el => el *2)

// const newNumbers = numbers.forEach(el => el *2 )

// console.log(newNumbers);
// console.log(numbers);

// let filteredArr = []
// for(let number of numbers) {
//     if(number < 10) {
//         filteredArr.push(number)
//     }
// }

// console.log(filteredArr);

// const filteredArr = numbers.filter(function(el) {
//     if (el < 10) {
//         return el
//     }
// })

// const filteredArr = numbers.filter(el => el < 10)

// console.log(filteredArr);

// let numbers = [1,3,45,6,7]

// const checkNumbers = numbers.some(function(el) {
//     return el > 40
// })

// const checkNumbers = numbers.some(el => el > 40)

// const checkNumbers = numbers.every(el => el < 100)

// console.log(checkNumbers);

// let numbers = [1,3,45,6,7,45]

// const findNumber = numbers.find(el => el === 45)
// const findNumbers = numbers.filter(el => el === 45)

// console.log(findNumber);
// console.log(findNumbers);

// let cart = [
//     {
//         name: 'Phone',
//         price: 1500
//     },
//     {
//         name: 'Tv',
//         price: 30000
//     },
//     {
//         name: 'PC',
//         price: 50000
//     }
// ]

// let total = 0

// for (let item of cart) {
//     total += item.price
// }

// console.log(total);

// const result = cart.reduce((acc, el) => acc + el.price, 0)

// console.log(result);

// let numbers = [1,7,45,2,9];

// let users = ['tester', 'admin', 'user']

// // numbers.sort((a, b) => a < b ? -1 : 1)
// // numbers.sort((a,b) => a - b)
// users.sort()
// console.log(users);

// a = 2 (1)
// b = 7 (3)

// let cart = [
//     {
//         name: 'Phone',
//         price: 1500,
//         type: 'electronic'
//     },
//     {
//         name: 'Tv',
//         price: 30000,
//         type: 'electronic'

//     },
//     {
//         name: 'PC',
//         price: 50000,
//         type: 'electronic'
//     },
//     {
//         name: 'Paper',
//         price: 25,
//         type: 'Other'
//     },
//     {
//         name: 'Tent',
//         price: 250,
//         type: 'Other'
//     }
// ]

// const totalElectronicPrice = cart
//     .filter(el => el.type === 'electronic')
//     .reduce((acc , el) => acc + el.price, 0)
// console.log(totalElectronicPrice);
