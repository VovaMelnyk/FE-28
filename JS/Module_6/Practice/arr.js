export default [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12
  }
];

// Написати ф-ю яка приймає розмір екрана і розраховує ширину кожної колонки в таблиці
// На розширені 1440 колонки мають бути такого значення 215, 400, 135, 135, 135, 210, 210

// const columnsSize = [215, 400, 135, 135, 135, 210, 210];
// // function proportion (screenSize, columnArr) {
// //   return columnArr.map(el => screenSize * (el/ 1440))
// // }

// const proportion = (screenSize, columnArr) => columnArr.map(el => screenSize * (el/ 1440))

function median(arr) {
  const sortArr = [...arr].sort((a, b) => a - b);
  if (sortArr.length % 2 === 0) {
    const index = sortArr.length / 2;
    return (sortArr[index] + sortArr[index - 1]) / 2;
  } else {
    const index = Math.floor(sortArr.length / 2);
    return sortArr[index];
  }
}
console.log(median([3, 5, 4, 2, 1])); // 3
console.log(median([10, 3, 6, 99, 20, 15])); // 12.5

// Написати ф-ю яка приймає аргументом назву компанії. І конвертує її видаляючи непотрібні слова
// Список слів які потрібно видалити:
// ltd
// ltd.
// LTD
// LTD.
// (PTE)
// (pte)

// Список компаній які потрібно перевірити
// DBS BANK LTD.
// OVERSEA-CHINESE BANKING CORPORATION LIMITED ltd.
// CAPITALAND LIMITED ltd
// WILMAR INTERNATIONAL LIMITED LTD
// CLA REAL ESTATE HOLDINGS (PTE)
// IHS GLOBAL (pte)
// SHELL EASTERN PETROLEUM (PTE) LTD
// Наприклад :
// formatTitle('DBS BANK LTD.') //DBS BANK

// const spam = ["ltd", "ltd.", "LTD", "LTD.", "(PTE)", "(pte)"];
// function formatTitle(companyName) {
//   return companyName
//     .split(" ")
//     .filter(el => !spam.includes(el))
//     .join(" ");
// }
// console.log(formatTitle('SHELL EASTERN PETROLEUM (PTE) LTD'));
//  //DBS BANK
