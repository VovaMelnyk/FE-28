import React, { Component } from "react";
import ThemeContext from "../ThemeContext";
class ThemeProvider extends Component {
  state = {
    dark: false,
  };

  switchTheme = () => {
    this.setState((prev) => ({
      dark: !prev.dark,
    }));
  };

  render() {
    const { dark } = this.state;
    return (
      <ThemeContext.Provider
        value={{ theme: dark, switchTheme: this.switchTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
