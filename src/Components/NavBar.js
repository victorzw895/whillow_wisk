import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  const pages = ["About", "Menu", "Location", "Contact"];

  return (
    <div id="navBar">
      <ul>
        {pages.map(page => (
          <Link to={`/${page.toLowerCase()}`}>
            <li>{page}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

/* <li>About</li>
        <li>🍪</li>
        <li>Menu</li>
        <li>🍪</li>
        <li>Location</li>
        <li>🍪</li>
        <li>Contact</li> */

export default NavBar;
