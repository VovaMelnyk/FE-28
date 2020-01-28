// console.log(document);
// const list = document.querySelector('.list')
// console.log(list);
// console.log(list.parentNode);
// console.log([...list.children]);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);
// parentNode,
// children,
// firstElementChild,
// lastElementChild,
// previousElementSibling,
// nextElementSibling

// const liCollection = document.querySelectorAll('.list__item')
// console.log(liCollection);
// console.log(list.querySelectorAll('.list__item'));

// const title =  document.querySelector('h1');
// console.log(title);
// console.log(title.classList.length);
// console.log(title.classList.contains('caption'));
// title.classList.add('red', 'big-text');
// // console.log(title.classList.contains('red'));
// // title.classList.remove('red');
// title.classList.toggle('green');

// elem.hasAttribute(name)
// elem.getAttribute(name)
// elem.setAttribute(name, value)
// elem.removeAttribute(name)

// const img = document.querySelector('img');
// console.log(img.hasAttribute('src'));
// console.log(img.getAttribute('src'));
// img.setAttribute('src', 'data:image/png;base64,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')
// img.removeAttribute('src')
// img.alt = 'image'
// console.log(img.src);
// console.log(img.title);
// console.log(img);
// img.style.display = 'block'
// img.style.width = '100px'
// title.style.fontSize = '23px'

// const par = document.querySelector('p');
// console.log(par.dataset);

// const link = document.createElement('a');
// link.href = 'https://www.google.com';
// link.target = '_blank';
// link.textContent = 'GOOGLE'
// link.classList.add('block')
// console.log(link);
// const article = document.querySelector('article');
// article.append(link)
// article.prepend(link)
// article.before(link)
// article.after(link)
// const cloneLink = link.cloneNode(true)
// console.log(cloneLink);
// container.append(element)
// container.prepend(element)
// container.after(element)
// container.before(element)

// const title = document.querySelector('h1');
// title.remove()

// creteElement

// const list = document.querySelector('.list')
// const newLi = '<li class="list__item">Item 4</li>';
// list.innerHTML += newLi
// elem.insertAdjacentHTML(position, string)
// beforebegin - перед елементом
// afterend - після елемента
// afterbegin - Всередині елемента спочатку
// beforeend - Всередині елемента вкінці
// list.insertAdjacentHTML('beforeend', newLi)
// fetch("https://servertest-e045e.firebaseio.com/decks.json")
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch("https://servertest-e045e.firebaseio.com/test.json", {
//   method: "POST",
//   body: JSON.stringify([1, 2, 4, 5])
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch("https://news-9cced.firebaseio.com/post.json")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     console.log(Object.keys(data));
//     const result = Object.keys(data).map(post => ({
//       ...data[post],
//       id: post
//     }));
//     console.log(result);
//   })
// click
// dbclick
// contexmenu
// scroll
// onchange
// input
// keyup
// keydown
// keypress
// DOMcontentLoaded
// dragEnd
// dragStart
// mouseover
// tarnsintionend

// const btn = document.querySelector("button");
// const hello = () => {
//   alert('Hello user')
//   btn.removeEventListener('click', start)
//   // btn.addEventListener('click', buy)
// }
// const buy = () => {
//   alert('Another click')
// }

// const start = () => {
//   hello()
//   buy()
// }
// console.log(btn);
// const eventInfo = (e) => {
//   console.log(e.target);
// }
// btn.addEventListener('click', eventInfo)
// btn.addEventListener('click', buy)
// btn.addEventListener('click', function() {
//   alert('Hello')
// })

// const box1 = (e) => {
//   e.stopPropagation()
//   e.preventDefault()
//   alert("box 1");
//   console.log(e);
// };

// const boxCollection = document.querySelectorAll(".box");
// console.log(boxCollection);
// boxCollection.forEach(el => el.addEventListener("click", box1));

// let price = document.querySelector('#price');
// let quantity = document.querySelector('#quantity');
// let totalP = document.querySelector('.total');
// let amount = document.querySelector('.amount');
// let form = document.querySelector('.form');

// function calc() {
//     let total = price.value * quantity.value;
//     totalP.textContent = total.toFixed(2) + 'грн';
//     amount.textContent = quantity.value;
// }
// form.addEventListener('input', calc);
// window.addEventListener('DOMContentLoaded', calc);

// const price = document.querySelector("#price");
// const amount = document.querySelector("#quantity");
// const form = document.querySelector(".form");
// const total = document.querySelector(".total");
// const span = document.querySelector('.amount');

// function calc(price, amount, total, span) {
//   const result = price.value * amount.value;
//   total.textContent = `${result.toFixed(2)} грн`;
//   span.textContent = amount.value
//   console.log(result);
// }

// form.addEventListener('input', function (e) {
//   console.log(e);
//   calc(price, amount,total, span)
// })
// window.addEventListener('DOMContentLoaded', function () {
//   calc(price, amount,total, span)
// })


// input
// onchange
// submit
// const items = ['Home', 'Company', 'About us', 'Help']
// const root = document.querySelector('#root')
// const btn = document.querySelector('button')
// const list = document.createElement('ul');
// list.classList.add('hide')
// function createLi(text) {
//     const li = document.createElement('li');
//     const a  = document.createElement('a');

//     li.classList.add('item')
//     a.classList.add('link')

//     a.href='#';

//     a.textContent = text

//     li.append(a)

//     return li
// }
// const menu = items.map(menuItem => createLi(menuItem))
// list.append(...menu)
// root.append(list)

// function toggleMenu () {
//     list.classList.toggle('show')
// }

// btn.addEventListener('click',toggleMenu)

