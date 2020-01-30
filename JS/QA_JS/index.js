class App {
  constructor() {
    // {} = this
    this.inputValue = "";
    this.list = [
      {
        id: 1,
        text: "Що таке React",
        isEdit: false,
        date: "23.01.2020 16:00"
      },
      {
        id: 2,
        text: "Як працювати з сервером",
        isEdit: false,
        date: "25.01.2020 12:45"
      }
    ];
    // add GET запит
    this.inputChange = this.inputChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  renderForm() {
    return `<form>
        <div class="input-field">
          <input id="question" type="text" class="validate" />
          <label for="question">Постав своє питання</label>
        </div>
        <div>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Задати питання
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>`;
  }

  addToScreen(container, position, element) {
    container.insertAdjacentHTML(position, element);
  }

  renderList() {
    return this.list.length
      ? `<ul class="collection">
      ${this.list.reduce((acc, el) => this.renderListItem(el) + acc, "")}
      </ul>`
      : `<p>Не має жодного питання</p>`;
  }

  renderListItem({ date, text }) {
    return `<li class="collection-item avatar list__item">
      <p>${date}</p>
      <span class="title">${text}</span>
      <a href="#!" class="secondary-content"
        ><i class="material-icons">delete</i></a
      >
    </li>`;
  }

  addQuestion(e) {
    e.preventDefault();
    const questionObj = {
      id: Date.now(),
      text: this.inputValue,
      isEdit: false,
      date: Date.now()
    };
    this.list.push(questionObj);
    const form = document.querySelector("form");
    const ul = document.querySelector(".collection");
    form.reset();
    this.addToScreen(ul, "beforeend", this.renderListItem(questionObj));
  }

  inputChange(e) {
    const value = e.target.value;
    this.inputValue = value;
  }

  addListeners() {
    const input = document.querySelector("#question");
    const form = document.querySelector("form");
    input.addEventListener("input", this.inputChange);
    form.addEventListener("submit", this.addQuestion);
  }

  start(container) {
    this.addToScreen(container, "beforeend", this.renderForm());
    this.addToScreen(container, "beforeend", this.renderList());
    this.addListeners();
  }
}

const app = new App();
const main = document.querySelector("main");
app.start(main);
