import React from "react";
import { connect, useSelector } from "react-redux";
import { userName, userStatus, userCountry } from "../../redux/selectors";
import "./Header.css";
// const Header = ({ name, country, status }) => {
//   return (
//     <header>
//       <div className="user-info">
//         <p>User name: {name}</p>
//         <p>User country: {country}</p>
//         <p>User status: {status} </p>
//       </div>
//     </header>
//   );
// };

// const MSTP = (state) => ({
//   name: userName(state),
//   country: userCountry(state),
//   status: userStatus(state),
// });

// export default connect(MSTP)(Header);

const Header = () => {
  const name = useSelector((state) => userName(state));
  const country = useSelector((state) => userCountry(state));
  const status = useSelector((state) => userStatus(state));

  return (
    <header>
      <div className="user-info">
        <p>User name: {name}</p>
        <p>User country: {country}</p>
        <p>User status: {status} </p>
      </div>
    </header>
  );
};

export default Header;
