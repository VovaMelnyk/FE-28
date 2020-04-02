// import React, {Fragment} from 'react';
import React from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";

import "./App.css";

function App() {
  return (
    // <div>
    //    <Header/>
    //     <Main/>
    // </div>

    // <Fragment>
    // <Header/>
    // <Main/>
    // </Fragment>
    <>
      <Header />
      <Main />
      {/* <Cart/> */}
    </>
  );
}

export default App;
