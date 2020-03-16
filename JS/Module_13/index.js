// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function(ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }
// const a = { text: "Item 1", complete: false };
// const b = { text: "Item 0-0000nnnn", complete: true };
// const options = {
//   headers: { "Content-Type": "application/json" }
// };

// fetch("https://todotest-d27d7.firebaseio.com/items.json", {
//   method: "POST",
//   body: JSON.stringify(a)
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// fetch("https://todotest-d27d7.firebaseio.com/items/-M1bggs0ejEijChsJhDC.json", {
//   method: "delete"
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch("https://todotest-d27d7.firebaseio.com/items/-M1biWE9GyePyjNWQ-kV.json", {
//   method: "PUT",
//   body: JSON.stringify(b),
//   headers: { "Content-Type": "application/json" }
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// axios
//   .post("https://todotest-d27d7.firebaseio.com/items.json", a, options)
//   .then(data => console.log(data));
// axios
//   .delete(
//     "https://todotest-d27d7.firebaseio.com/items/-M1bljovsdwRBAfC4ONZ.json"
//   )
//   .then(data => console.log(data));
// axios
//   .put(
//     "https://todotest-d27d7.firebaseio.com/items/-M1biWE9GyePyjNWQ-kV.json",
//     b,
//     options
//   )
//   .then(data => console.log(data));

const body = document.querySelector("body");

const addLi = (text, id) => {
  const list = document.querySelector("#myUL");
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const editBtn = document.createElement("button");
  btn.textContent = "DELETE";
  editBtn.textContent = "EDIT";
  li.textContent = text;
  li.dataset.id = id;
  li.append(btn, editBtn);
  list.append(li);
};

const submit = () => {
  console.log("fdsfdf");
  const input = document.querySelector("#myInput");
  const value = input.value;
  const task = { compleat: false, text: value };
  fetch("https://todotest-d27d7.firebaseio.com/items.json", {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.name) {
        addLi(value, data.name);
      }
    })
    .catch(err => console.log(err));
};

const deleteLi = e => {
  const target = e.target;
  if (target.textContent === "DELETE") {
    const liContainer = target.closest("li");
    const id = liContainer.dataset.id;
    fetch(`https://todotest-d27d7.firebaseio.com/items/${id}.json`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (!data) {
          liContainer.remove();
        }
      });
  }
};

const editLiFront = (li, response) => {
  li.textContent = response.text;
  li.classList.add("checked");
};

const editLi = e => {
  const target = e.target;
  if (target.textContent === "EDIT") {
    const liContainer = target.closest("li");
    const id = liContainer.dataset.id;
    fetch(`https://todotest-d27d7.firebaseio.com/items/${id}.json`, {
      method: "PUT",
      body: JSON.stringify({ text: "newString", compleat: true }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => editLiFront(liContainer, data));
  }
};

// ("post");
// ("get");
// ("delete");
// ("put");
// ("putch");
// ("option");
const key = "AIzaSyAtR-uzgB5FOk0lQom6Oa23nX-wFQDnphQ";
function createForm(container) {
  const form = `<form id="form">
  <input type="email" placeholder="Email" id="email" required/>
  <input type="password" placeholder="Password" id='password' required/>
  <button class="addBtn" id="submit">Submit</button>
</form>`;
  container.insertAdjacentHTML("beforeend", form);
  const registerForm = document.querySelector("form");
  registerForm.addEventListener("submit", registerUser);
}

createForm(body);

function renderTodo(container) {
  const todo = ` <div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>
    <input type="text" id="myInput" placeholder="Title..." />
    <span class="addBtn">Add</span>
  </div>
  <ul id="myUL"></ul>`;
  container.insertAdjacentHTML("beforeend", todo);
  const btn = document.querySelector(".addBtn");
  const list = document.querySelector("#myUL");
  btn.addEventListener("click", submit);
  list.addEventListener("click", deleteLi);
  list.addEventListener("click", editLi);
}

const errors = {
  EMAIL_EXISTS: "Sorry, this email already exist"
};

function renderError({ error }) {
  const p = document.createElement("p");
  p.textContent = errors[error.message];
  p.id = "error";
  body.append(p);
}

function registerUser(e) {
  e.preventDefault();
  const error = document.querySelector("#error");
  if (error) {
    error.remove();
  }
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const submit = document.querySelector("#submit");
  submit.disabled = true;
  const user = { email, password, returnSecureToken: true };
  fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        renderError(data);
        return;
      }
      localStorage.setItem("token", data.idToken);
      document.querySelector("form").remove();
      renderTodo(body);
    })
    .catch(err => console.log(err))
    .finally(() => (submit.disabled = false));
}
