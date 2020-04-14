import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  formInitialState = {
    title: "",
    author: "",
    priority: "",
    agree: false,
  };

  state = {
    title: "",
    author: "",
    priority: "",
    agree: false,
  };

  inputHandler = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, author, priority, agree } = this.state;
    if (!agree) {
      return;
    }
    
    const task = {
      title,
      author,
      priority,
      status: false,
      id: Date.now(),
    };

    this.props.addTodo(task);
    this.setState({ ...this.formInitialState });
  };

  render() {
    const { title, author, priority, agree } = this.state;
    return (
      <form
        className="NewTodoForm"
        autoComplete="off"
        onSubmit={this.submitHandler}
      >
        <input
          className="NewTodoForm__name"
          type="text"
          name="title"
          placeholder="New Todo"
          autoFocus
          value={title}
          onChange={this.inputHandler}
        />
        <input
          className="NewTodoForm__name"
          type="text"
          name="author"
          placeholder="Author"
          autoFocus
          value={author}
          onChange={this.inputHandler}
        />
        <select
          name="priority"
          className="NewTodoForm__select"
          value={priority}
          onChange={this.inputHandler}
        >
          <option value="Priority" disabled hidden>
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label htmlFor="agree" className="confirm">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            name="agree"
            onChange={this.inputHandler}
          />{" "}
          Agree with our policy
        </label>
        <button className="NewTodoForm__submit" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}

export default Form;
