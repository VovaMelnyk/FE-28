import React, { Component } from "react";

// const withStorage = (NestedComponent) => {
//   const save = (key, value) => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (err) {
//       throw new Error();
//     }
//   };

//   const get = (key) => {
//     try {
//       const items = localStorage.getItem(key);
//       return items ? JSON.parse(items) : null;
//     } catch (err) {
//       throw new Error();
//     }
//   };

//   const remove = (key) => {
//     try {
//       localStorage.removeItem(key);
//     } catch (error) {
//       console.log("Remove data from LS");
//     }
//   };

//   return (props) => (
//     <NestedComponent
//       {...props}
//       getFromStorage={get}
//       saveToStorage={save}
//       removeFromStorage={remove}
//     />
//   );
// };

// export default withStorage;

const withStorage = (NestedComponent) => {
  return class extends Component {
    save = (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        throw new Error();
      }
    };

    get = (key) => {
      try {
        const items = localStorage.getItem(key);
        return items ? JSON.parse(items) : null;
      } catch (err) {
        throw new Error();
      }
    };

    remove = (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.log("Remove data from LS");
      }
    };

    render() {
      return (
        <NestedComponent
          {...this.props}
          saveToStorage={this.save}
          removeFromStorage={this.remove}
          getFromStorage={this.get}
        />
      );
    }
  };
};

export default withStorage;
