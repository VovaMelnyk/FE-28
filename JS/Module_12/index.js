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

class News {
  constructor(url) {
    this.counter = 1;
    this.url = url;
    this.button = document.querySelector("#refresh");
    this.list = document.querySelector("#list");
    this.nextButton = document.querySelector("#next");
    this.prevButton = document.querySelector("#prev");
    this.input = document.querySelector("input");
  }
  renderNews = arr => {
    this.list.innerHTML = "";
    const liCollection = arr.map(el => {
      const li = document.createElement("li");
      const content = document.createElement("div");
      content.classList.add("content");
      li.textContent = el.webTitle;
      li.dataset.apiUrl = el.apiUrl;
      li.append(content);
      return li;
    });
    this.list.append(...liCollection);
  };
  renderPagination = response => {
    const p = document.querySelector(".page-amount");
    p.textContent = `of ${response.pages} pages`;
    this.input.value = response.currentPage;
  };
  renderErrorMessage = () => {
    const title = document.createElement("h3");
    title.textContent = "Sorry, service is not working now. Try again later";
    this.list.append(title);
  };
  renderContent = (item, arr) => {
    const string = arr.reduce((acc, el) => el.bodyHtml + acc, "");
    const container = item.querySelector(".content");
    container.classList.toggle("open");
    container.insertAdjacentHTML("beforeend", string);
  };

  fetchNews = () => {
    fetch(this.url + this.counter)
      .then(res => res.json())
      .then(data => {
        this.renderNews(data.response.results);
        this.renderPagination(data.response);
      })
      .catch(() => this.renderErrorMessage());
  };

  fetchDetails = ({ target }) => {
    const content = target.querySelector(".open");
    if (content) {
      content.classList.toggle("open");
      content.addEventListener("transitionend", () => (content.innerHTML = ""));
      return;
    }
    const entryPoint = target.dataset.apiUrl;
    const URL = `${entryPoint}?show-blocks=body&api-key=eb8d594b-2b39-402a-bd31-61602b02185a`;
    fetch(URL)
      .then(res => res.json())
      .then(data =>
        this.renderContent(target, data.response.content.blocks.body)
      )
      .catch(err => console.log(err));
  };

  nextPage = () => {
    this.counter++;
    this.fetchNews();
  };

  pevPage = () => {
    if (this.counter === 1) {
      return;
    }
    this.counter--;
    this.fetchNews();
  };
  inputChange = e => {
    const inputValue = e.target.value;
    if (!Number(inputValue)) {
      return;
    }
    this.counter = inputValue;
    this.fetchNews();
  };
  addListeners = () => {
    this.input.addEventListener("input", this.inputChange);
    this.nextButton.addEventListener("click", this.nextPage);
    this.prevButton.addEventListener("click", this.pevPage);
    this.list.addEventListener("click", this.fetchDetails);
    this.button.addEventListener("click", this.fetchNews);
  };

  init = () => {
    this.addListeners();
    window.addEventListener("DOMContentLoaded", this.fetchNews);
  };
}

new News(
  `https://content.guardianapis.com/search?api-key=eb8d594b-2b39-402a-bd31-61602b02185a&page=`
).init();
