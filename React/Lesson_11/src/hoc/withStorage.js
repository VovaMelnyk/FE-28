import React, { Component } from "react";

const withStorage = (NestedComponent) => {
  const save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log("Storage save error");
    }
  };
  const get = (key) => {
    try {
      const items = localStorage.getItem(key);
      return items ? JSON.parse(items) : null;
    } catch (err) {
      console.log("Storage save error");
    }
  };
  const remove = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log("Storage remove error");
    }
  };

  return (props) => (
    <NestedComponent {...props} save={save} get={get} remove={remove} />
  );
};

export default withStorage;

// const withStorage = (NestedComponent) => {
//   return class extends Component {
//     save = (key, value) => {
//       try {
//         localStorage.setItem(key, JSON.stringify(value));
//       } catch (err) {
//         console.log("Storage save error");
//       }
//     };
//     get = (key) => {
//       try {
//         const items = localStorage.getItem(key);
//         return items ? JSON.parse(items) : null;
//       } catch (err) {
//         console.log("Storage save error");
//       }
//     };
//     remove = (key) => {
//       try {
//         localStorage.removeItem(key);
//       } catch (error) {
//         console.log("Storage remove error");
//       }
//     };
//     render() {
//       return (
//         <NestedComponent
//           {...this.props}
//           save={this.save}
//           get={this.get}
//           remove={this.remove}
//         />
//       );
//     }
//   };
// };

// export default withStorage;
