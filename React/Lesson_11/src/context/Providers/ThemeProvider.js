import React, { Component } from "react";
import ThemeContext from "../ThemeContext";

class ThemeProvider extends Component {
  state = {
    light: true,
  };

  switchTheme = () => {
    this.setState((prev) => ({
      light: !prev.light,
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, switchTheme: this.switchTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
