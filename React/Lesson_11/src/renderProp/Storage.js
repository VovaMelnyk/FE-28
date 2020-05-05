import React from "react";

const Storage = ({ children }) => {
  const save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      throw new Error();
    }
  };

  const get = (key) => {
    try {
      const items = localStorage.getItem(key);
      return items ? JSON.parse(items) : null;
    } catch (err) {
      throw new Error();
    }
  };

  const remove = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log("Remove data from LS");
    }
  };
  return children({
    saveToStorage: save,
    removeFromStorage: remove,
    getFromStorage: get,
  });
};

export default Storage;
