// base
// const data = {
//     name: "User",
//     position: "FE Developer",
//     language: "Javascript"
// }


// const root = document.querySelector('#root')
// const template = document.querySelector('#simpleTemplate').innerHTML.trim()
// console.log(template);
// const templateScript = Handlebars.compile(template)
// // console.log(templateScript);
// const markup = templateScript(data)
// console.log(markup);
// root.innerHTML = markup


// const data = {
//     frameworks: ["React", "Vue", "Angular"],
//     libs: ["moment", "lodash", "axios", "propTypes"]
// }

// const template = document.querySelector('#eachTemplate').innerHTML.trim();
// const templateScript = Handlebars.compile(template);
// const markup = templateScript(data);
// // console.log(markup);
// root.innerHTML = markup;

// const root = document.querySelector('#root');
// const template = document.querySelector('#eachTemplate').innerHTML.trim();
// const templateScript = Handlebars.compile(template);
// const markup = templateScript(data);
// // console.log(markup);
// root.innerHTML = markup;


// const frameworks =  ["React", "Vue", "Angular"];

// const root = document.querySelector('#root');
// const template = document.querySelector('#arrayTemplate').innerHTML.trim();
// const templateScript = Handlebars.compile(template);
// const markup = templateScript(frameworks);
// root.innerHTML = markup;

// const frameworks =  [{id:1, lib: "React"}, {id: 2, lib: "Vue"}, {id: 3, lib: "Angular"}];

// const root = document.querySelector('#root');
// const template = document.querySelector('#arrayTemplate2').innerHTML.trim();
// const templateScript = Handlebars.compile(template);
// const markup = templateScript(frameworks);
// root.innerHTML = markup;

const data = {
  title: "Orders",
  orders: [
    {
      domestic: false,
      domestic_address: "Ukraine, Kyiv",
      international_address: "USA, New-York",
      user: {
        name: "James"
      }
    },
    {
      domestic: true,
      domestic_address: "Ukraine, Kyiv",
      international_address: "USA, New-York",
      user: {
        name: "Petro"
      }
    }
  ]
};

const root = document.querySelector("#root");
const template = document.querySelector("#ifTemplate").innerHTML.trim();
const templateScript = Handlebars.compile(template);
const markup = templateScript(data);
root.innerHTML = markup;
