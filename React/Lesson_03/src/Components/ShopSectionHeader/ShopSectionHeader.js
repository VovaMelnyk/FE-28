import React from 'react';
import classes from "./ShopSectionHeader.module.css"
const ShopSectionHeader = () => {
    return (
        <div className={classes.CardHeader}>
        <small>
          <span>16 Product(s) found</span>
        </small>
        <div className={classes.Sort}>
          Order by
          <select>
            <option value="">Select</option>
            <option value="low">Lowest to highest</option>
            <option value="high">Highest to lowest</option>
          </select>
        </div>
      </div>
    );
};

export default ShopSectionHeader;