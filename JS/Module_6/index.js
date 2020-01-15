
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

// const scientist = [
//   {
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955,
//     id: 1
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727,
//     id: 2
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642,
//     id: 3
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934,
//     id: 4
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630,
//     id: 5
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543,
//     id: 6
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947,
//     id: 7
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979,
//     id: 8
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852,
//     id: 9
//   },
//   {
//     name: "Sarah E.",
//     surname: "Goode",
//     born: 1855,
//     dead: 1905,
//     id: 10
//   },
//   {
//     name: "Lise",
//     surname: "Meitner",
//     born: 1878,
//     dead: 1968,
//     id: 11
//   },
//   {
//     name: "Hanna",
//     surname: "Hammarström",
//     born: 1829,
//     dead: 1909,
//     id: 12
//   }
// ];

// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A
// 11) Знайти вченого який прожив найбільше і вченого який прожив найменьше
// 12) Знайти вчених в яких співпадають перші літери імені і прізвища
// 13) Дізнатися чи всі вченні працювали в 19 столітті

// const  task1 = scientist.filter(obj => obj.born > 1800 && obj.born <= 1899)
// console.log(task1);

// // const sum = scientist.map(item => item.dead - item.born)
// // .reduce((acc, item) => acc + item)

// const sum1 = scientist.reduce ((arr, item) => arr +(item.dead - item.born), 0)
// // console.log(sum);
// console.log(sum1);

// const sortTechOnAl = [...scientist].sort((a,b) => a.name < b.name ? -1 : 1);
// console.log(sortTechOnAl);

// const sortScientistLife = [...scientist].sort((a,b) => (b.dead - b.born) - (a.dead - a.born))
// console.log(sortScientistLife);

// const delScientist = scientist.filter(obj => obj.born <=1400 || obj.born>1800)
// console.log(delScientist);

// const youngestSc = [...scientist].sort((a,b)=>b.born - a.born)[0].name;
// console.log(youngestSc);

// const albertFind = scientist.find(obj => obj.name === 'Albert' && obj.surname==='Einstein').born 
// console.log(albertFind)

// const surnameC = scientist.filter(el => el.surname[0] === 'C');
// console.log(surnameC);

// const deleteA = scientist.filter(el => el.name[0] !== "A")

// console.log(deleteA);

// const oldAndYoung = [...scientist].sort((a, b) => (a.dead - a.born) - (b.dead - b.born))
// const arr =[];
// arr.push(oldAndYoung[0], oldAndYoung[oldAndYoung.length-1])

// const isWork = scientist.every(el => el.dead < 1800)
// console.log(isWork);

// async function getData () {
//     let result = null
//     let response = await fetch('https://restcountries.eu/rest/v2/all')
//     result = await response.json()
//     return result
// }

// getData().then(data => localStorage.setItem('arr', JSON.stringify(data)));

// const arr = JSON.parse(localStorage.getItem('arr'))
// console.log(arr);

// function findBorders (countryName, countryArray) {
//     const countryCode = countryArray.find(el => el.name === countryName).alpha3Code
//     const result = countryArray
//         .filter(el => el.borders.includes(countryCode))
//         .map(el => el.name)
//     return result
// }

// console.log(findBorders('Switzerland', arr));


