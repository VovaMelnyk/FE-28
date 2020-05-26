import React from "react";
import { connect, useSelector } from "react-redux";
import {
  userNameSelector,
  userCountrySelector,
  userStatusSelector,
} from "../../redux/selectors";
import "./Header.css";

const Header = () => {
  const name = useSelector((state) => userNameSelector(state));
  const country = useSelector((state) => userCountrySelector(state));
  const status = useSelector((state) => userStatusSelector(state));

  return (
    <header>
      <div className="user-info">
        <p>User name: {name}</p>
        <p>User country: {country}</p>
        <p>User status: {status}</p>
      </div>
    </header>
  );
};

export default Header;

// const Header = ({ name, country, status }) => {
//   return (
//     <header>
//       <div className="user-info">
//         <p>User name: {name}</p>
//         <p>User country: {country}</p>
//         <p>User status: {status}</p>
//       </div>
//     </header>
//   );
// };

// const MSTP = (state) => ({
//   name: userNameSelector(state),
//   country: userCountrySelector(state),
//   status: userStatusSelector(state),
// });

// export default connect(MSTP)(Header);
