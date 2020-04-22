import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <Home />
      </div>
    </>
  );
}

export default App;
