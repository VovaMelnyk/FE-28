import React from "react";

const Storage = (props) => {
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
  return <>{props.render({ get, save, remove })}</>;
};

export default Storage;
