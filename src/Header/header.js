import React from "react";
import "./header.css";
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';


const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="" />
        </button>
      </div>

      <div className="header__search">
        <img src={search} alt="" />
        <input
          id="search-input"
          maxlength="800"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          placeholder="What do you want to listen to?"
          value=""
        />
      </div>

      <div className="header__login">
        <button className="subscribe">Sign up</button>
        <button className="login">Sign-in</button>
      </div>
    </nav>
  );
};

export default Header;
