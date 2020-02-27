// fetch("https://api.github.com/users/VovaMelnyk/repos?per_page=100&type=all")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// 1) Entry point
// 2) Resource name
// 3) parameters

// const URL =
//   "https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=latest&per_page=9";

//   fetch(URL)
//     .then(response => response.json())
//     .then (data => renderGallery(data.hits))
//     .catch(err => console.log(err))

//   const root = document.querySelector('#root')

//   function createImg(objImg) {
//       return `<img src=${objImg.webformatURL} alt=${objImg.tags}>`
//   }

//   function renderGallery(imgArr) {
//       const markup = imgArr
//         .reduce((acc, el) => createImg(el) + acc ,'')
//       root.insertAdjacentHTML('beforeend', markup)
//   }

//   CRUD

// C - create - POST
// R - read - GET
// U - update - PUT
// D = delete - DELETE

// const form = document.querySelector('.search');
// const input = document.querySelector('.search__input');
// function readInputValue(e) {
//     e.preventDefault();
//     const url = `https://api.github.com/users/${input.value}/repos?type=all&per_page=100`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//         .finally(() => form.reset())
// }

// form.addEventListener('submit', readInputValue)
// fetch(
//   "http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fe54e78640174c269f1b558d40009301"
// )
//   .then(res => res.json())
//   .then(data => console.log(data));

const renderNews = arr => {
  const list = document.querySelector("#list");
  list.innerHTML = "";
  const liCollection = arr.map(el => {
    const li = document.createElement("li");
    const content = document.createElement("div");
    content.classList.add("content");
    li.textContent = el.webTitle;
    li.dataset.apiUrl = el.apiUrl;
    li.append(content);
    return li;
  });
  list.append(...liCollection);
};

const renderErrorMessage = () => {
  const list = document.querySelector("#list");
  const title = document.createElement("h3");
  title.textContent = "Sorry, service is not working now. Try again later";
  list.append(title);
};

const renderContent = (item, arr) => {
  const string = arr.reduce((acc, el) => el.bodyHtml + acc, "");
  const container = item.querySelector(".content");
  container.insertAdjacentHTML("beforeend", string);
};

const fetchNews = () => {
  fetch(
    "https://content.guardianapis.com/search?api-key=eb8d594b-2b39-402a-bd31-61602b02185a"
  )
    .then(res => res.json())
    .then(data => renderNews(data.response.results))
    .catch(() => renderErrorMessage());
};

const fetchDetails = ({ target }) => {
  console.log(target);
  const entryPoint = target.dataset.apiUrl;
  const URL = `${entryPoint}?show-blocks=body&api-key=eb8d594b-2b39-402a-bd31-61602b02185a`;
  fetch(URL)
    .then(res => res.json())
    .then(data => renderContent(target, data.response.content.blocks.body))
    .catch(err => console.log(err));
};

const button = document.querySelector("#refresh");
const list = document.querySelector("#list");
list.addEventListener("click", fetchDetails);
button.addEventListener("click", fetchNews);

window.addEventListener("DOMContentLoaded", fetchNews);
