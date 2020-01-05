import React, { useState } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Routes from "../Routes";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1 id="topLogo">
          <Link to="/">
            <img id="mainLogo" src="whillow_wisk_logo.jpg"></img>
          </Link>
        </h1>
        <NavBar />
        <div id="mainComponent">{Routes}</div>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
