// get
// import axios from axios
// const URL = "https://jsonplaceholder.typicode.com/users";
// const key = "sdfnfsdfs";

// fetch(URL)
//   .then(res => res.json())
//   .then(data => console.log("fetch", data))
//   .catch(err => console.log(err));

// axios
//   .get(URL)
//   .then(data => console.log("axios", data))
//   .catch(err => console.log(err));

// const getConfig = {
//   method: "get",
//   url: URL
// };

// axios(getConfig)
//   .then(data => console.log("config", data))
//   .catch(err => console.log(err));

// fetch(URL)
//   .then(res => res.json())
//   .then(data => console.log("fetch", data))
//   .catch(err => console.log(err));

// axios
//   .get(URL)
//   .then(res => console.log("axios", res))
//   .catch(err => console.log(err));

// axios answer
// data - данні
// status - http код
// statusText - текст статусу
// headers - заголовки що прийшли з сервера
// config - налаштування запиту
// request - обєкт запиту

// const getConfig = {
//   url: "https://jsonplaceholder.typicode.com/users",
//   method: "get"
// };

// axios(getConfig).then(res => console.log("config", res));
const user = { name: "Bob", age: 22 };
// const user2 = { name: "Ted", age: 12 };
const headers = {
  "Content-Type": "application/json"
};
// post
// fetch("https://todotest-d27d7.firebaseio.com/items.json", {
//   method: "post",
//   body: JSON.stringify({ name: "Bob", age: 12 }),
//   headers = {
//     "Content-Type": "application/json"
//   }
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// fetch("https://todotest-d27d7.firebaseio.com/items.json", {
//   method: "post",
//   body: JSON.stringify(user),
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

// axios
//   .post("https://todotest-d27d7.firebaseio.com/items.json", user, {
//     headers
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// const postConfig = {
//   method: "post",
//   url: "https://todotest-d27d7.firebaseio.com/items.json",
//   data: user,
//   headers
// };

// axios(postConfig)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// const postConfig = {
//   method: "post",
//   url: "https://todotest-d27d7.firebaseio.com/items.json",
//   data: user2,
//   headers
// };

// axios(postConfig).then(res => console.log(res));

// delete

// fetch("https://todotest-d27d7.firebaseio.com/items/-M2dgtGt0gvbmj9aP-yk.json", {
//   method: "delete"
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// axios
//   .delete(
//     "https://todotest-d27d7.firebaseio.com/items.json",
//     '-M2dgtGt0gvbmj9aP - yk',
//     { headers }
//   )
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// const deleteConfig = {
//   method: "delete",
//   url: "https://todotest-d27d7.firebaseio.com/items/-M2dgtGt0gvbmj9aP-yk.json"
// };

// axios(deleteConfig)
//   .then(response => console.log(response.data))
//   .catch(err => console.log(err));

// function helperFetch(config) {
//   return axios(config)
//     .then(response => response.data)
//     .catch(err => console.log(err));
// }

// helperFetch(deleteConfig).then(answer => console.log(answer));

// fetch("https://todotest-d27d7.firebaseio.com/items/-M2_GUSd7x83Y2qS8tbp.json", {
//   method: "Delete",
//   headers
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

// axios
//   .delete(
//     "https://todotest-d27d7.firebaseio.com/items/-M2_GUSd7x83Y2qS8tbp.json",
//     { headers }
//   )
//   .then(data => console.log(data));

// const deleteConfig = {
//   url: "https://todotest-d27d7.firebaseio.com/items/-M2_GUSd7x83Y2qS8tbp.json",
//   method: "delete",
//   headers
// };

// axios(deleteConfig).then(data => console.log(data));

// async await
function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

// 1) get promise data and call function for result

// const makeRequest = () => {
//   getUsers()
//     .then(response => {
//       console.log(response);
//       return filterUsers(response);
//     })
//     .catch(err => console.log(err));
// };

// const makeRequest = async () => {
//   const response = await getUsers();
//   const admin = await getAdmin();
//   console.log(response);
//   return filterUsers(response);
// };

// async function makeRequest() {}

// common function
// const makeRequest = () => {
//   getUsers().then(data => {
//     console.log(data);
//     return "done";
//   });
// };

// async await

// const makeRequest = async () => {
//   const result = await getUsers();
//   console.log(result);
//   return "done";
// };

// async function makeRequest() {
//   const result = await getUsers();
//   console.log(result);
//   return "done";
// }

// makeRequest();

// Так не працює, Лише всередині async  await makeRequest()

// 2) error handling

// const makeRequest = () => {
//   try {
//     const isValid = validatePassword(password);
//     getUsers()
//       .then(data => console.log(object))
//       .catch(err => console.log(err));
//     getAdmin()
//       .then(data => console.log(object))
//       .catch(err => console.log(err));
//     getCheck()
//       .then(data => console.log(object))
//       .catch(err => console.log(err));
//   } catch (error) {
//     console.log(error);
//   }
// };

// function validatePassword(password) {
//   if (password.validate) {
//     return true;
//   } else {
//     throw new Error("password is not valid");
//   }
// }

// const makeRequest = async () => {
//   try {
//     const isValid = validatePassword(password);
//     const users = await getUsers();
//     const admin = await getAdmin();
//     const check = await getCheck();
//     console.log(users);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const makeRequest = () => {
//   try {
//     const isValid = validatePassword();
//     getUsers()
//       .then(data => console.log(data))
//       .catch(console.log(error));
//   } catch (error) {
//     console.log(error);
//   }
// };

// const makeRequest = async () => {
//   try {
//     const isValid = validatePassword();
//     const data = getUsers();
//     console.log(data);
//   } catch (error) {}
// };

// 3) conditions and promises
// const makeRequest = () => {
//   return getUsers().then(data => {
//     if (data.status !== 200) {
//       return getUsers(newUrl).then(extraData => {
//         console.log(extraData);
//         return extraData;
//       });
//     } else {
//       console.log(data);
//       return data;
//     }
//   });
// };

// const makeRequest = async () => {
//   const result = await getUsers();
//   if (result.status !== 200) {
//     const extraData = await getUsers(newUrl);
//     console.log(extraData);
//     return extraData;
//   } else {
//     console.log(result);
//     return result;
//   }
// };

// 4) nested promises

// const makeRequest = () => {
//   return getUsers().then(users => {
//     // some logic
//     return getAdmin(users).then(admin => {
//       // some logic
//       return getAdminFriends(users, admin);
//     });
//   });
// };

// const makeRequest = async () => {
//   const users = await getUsers();
//   const admin = await getAdmin(users);

//   return getAdminFriends(users, admin);
// };

// 5) await anything combine sync and async code

// const makeRequest = () => {
//     const users  = await getUsers()
//     const random = Math.floor(Math.random() * users.length)
//     const randomUser = users[random];
//     return randomUser;
// }

// github api and axios and async await

const btn = document.querySelector("#send");

const getUserFromGithub = () => {
  return axios
    .get("https://api.github.com/users/VovaMelnyk/repos?per_page=100&type=all")
    .then(response => response.data)
    .catch(err => console.log(err));
};

const clickHandler = () => {
  getUserFromGithub()
    .then(reposArr => {
      const markUp = reposArr.reduce(
        (acc, el) => acc + `<li>${el.name}</li>`,
        ""
      );
      return markUp;
    })
    .then(markUp => {
      const list = document.querySelector("ul");
      list.insertAdjacentHTML("beforeend", markUp);
    });
};

// const clickHandler = async () => {
//   const reposArr = await getUserFromGithub();
//   const markUp = reposArr.reduce((acc, el) => acc + `<li>${el.name}</li>`, "");
//   const list = document.querySelector("ul");
//   list.insertAdjacentHTML("beforeend", markUp);
// };

btn.addEventListener("click", clickHandler);

function axios() {
  return fetch(
    "https://api.github.com/users/VovaMelnyk/repos?per_page=100&type=all"
  )
    .then(res => res.json())
    .then(arr => ({
      data: arr,
      status: 200,
      statusText: "OK"
    }));
}

// const getReposNumber = async () => {
//   const repos = await axios.get(
//     "https://api.github.com/users/VovaMelnyk/repos?per_page=100&type=all"
//   );
//   console.log(repos);
// };
// getReposNumber();

// owner member all
