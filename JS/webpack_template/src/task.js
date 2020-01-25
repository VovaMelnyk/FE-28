export default class Task {
  constructor(title) {
    this.title = title;
    this.date = Date.now();
  }

  taskInfo() {
    console.log(
      `task info: title - ${this.title}, created date - ${this.date}`
    );
  }
}

const a = 5;

class Util {
  static id = Date.now();
}

console.log("Util Id:", Util.id);
