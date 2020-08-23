import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="">
        <div className="header__logo--wrapper">
          <div className="header__name--wrapper">
            <h1 className="header__name">POKEDEX</h1>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
