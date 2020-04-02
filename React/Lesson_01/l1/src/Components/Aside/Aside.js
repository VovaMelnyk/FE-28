import React from "react";
import classes from "./Aside.module.css";
const Aside = () => {
  return (
    <aside className={classes.Filters}>
      <h4 className={classes.Title}>Sizes:</h4>
      <div className={classes["Available-size"]}>
        <label>
          <input type="checkbox" value="XS" />
          <span className={classes.Checkmark}>XS</span>
        </label>
      </div>
    </aside>
  );
};

export default Aside;
