// import "./styles/base.css";
import "@/styles/base"; // with resolve and alias

// import imgSource from "./assets/img/javascript.jpg";
import imgSource from "@/assets/img/javascript"; // with resolve and alias

// console.log("Webpack works");
// const image = document.createElement("img");
// const div = document.querySelector("div");
// image.src = imgSource;
// div.append(image);
// console.log("object2");

// plugin exapmle

class Util {
  static id = Date.now();
}

console.log("Util Id:", Util.id);
