import data from "./data/gallery";
import galleryTemplate from "./hbs/gallery";

import users from "./data/users";
import galleryItemTemplate from "./hbs/galleryItem";
import userTemplate from "./hbs/user";
import "./styles/base";
import "./styles/user";
// console.log(data);
console.log(galleryTemplate);
// console.log(galleryTemplate(data));

const markup = galleryTemplate(data)

const root = document.querySelector('#root')
root.insertAdjacentHTML('afterbegin', markup)

// function createGalleryItemColection(data){
//   return data.map(el => galleryItemTemplate(el)).join('')
// }

// const markup = createGalleryItemColection(data)
// console.log(markup);

// const root = document.querySelector('.gallery-content')
// root.insertAdjacentHTML('afterbegin', markup)

// const container = document.querySelector(".user-container");
// const createUserList = arr => {
//   return users.map(el => userTemplate(el)).join("");
// };

// const markup = createUserList(users);
// container.insertAdjacentHTML("beforeend", markup);
// //================================
// const settings = document.querySelector(".settings");
// const body = document.querySelector('body')
// const theme = { fontFamily: "sans-serif", fontSize: "14", mode: "day" };
// const createSettingsObj = ({ target }) => {
//   // theme[target.name] = target.value;
//   if (target.value === 'serif') {
//     body.classList.add('serif')
//     body.classList.remove('sans-serif')
//     localStorage.setItem('theme', 'serif')
//   }
//   if (target.value === 'sans-serif') {
//     body.classList.add('sans-serif')
//     body.classList.remove('serif')
//     localStorage.setItem('theme', 'sans-serif')
//   }
// };
// const createSettingsObj= ({target}) => {
//   document.documentElement.style
//     .setProperty(`--${target.name}`, target.value);
// }
// settings.addEventListener("change", createSettingsObj);


// localStorage.setItem('word', 'test')
// console.log(localStorage.getItem('word'));
// localStorage.setItem('word', 'Hello')
// localStorage.removeItem('word')

// const user = {
//     fontSize: '16px',
//     color: '#000',
//     fontFamily: 'Roboto'
// }

// const convertSetting = JSON.stringify(user)
// localStorage.setItem('settings', convertSetting)
// console.log(convertSetting);

const settings = localStorage.getItem('settings')
console.log(settings);
const convertSettings = JSON.parse(settings)
console.log(convertSettings);