import React, { Component } from "react";

const withStorage = (NestedComponent) => {
  return class extends Component {
    save = (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.log("Storage save error");
      }
    };

    get = (key) => {
      try {
        const items = localStorage.getItem(key);
        return items ? JSON.parse(items) : null;
      } catch (err) {
        console.log("Storage save error");
      }
    };

    remove = (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.log("Storage remove error");
      }
    };

    render() {
      return (
        <NestedComponent
          {...this.props}
          load={this.get}
          save={this.save}
          remove={this.remove}
        />
      );
    }
  };
};

export default withStorage;
