import React from "react";
import Search from "../../assets/icons/search.svg";
import Logo from "../../assets/icons/logo.svg";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";
import User from "../../assets/icons/user.svg";

const Header = () => {
  return (
    <>
      <header>
        <a href="/">
          <img src={Search} alt="search" />
        </a>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <div>
          <a href="/">
            <img src={ShoppingCart} alt="shopping-cart" />
          </a>
          <a href="/">
            <img src={User} alt="user" />
          </a>
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <a href="/">Plant pots</a>
          </li>
          <li>
            <a href="/">Ceramics</a>
          </li>
          <li>
            <a href="/">Tables</a>
          </li>
          <li>
            <a href="/">Chairs</a>
          </li>
          <li>
            <a href="/">Crockery</a>
          </li>
          <li>
            <a href="/">Tableware</a>
          </li>
          <li>
            <a href="/">Cutlery</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
