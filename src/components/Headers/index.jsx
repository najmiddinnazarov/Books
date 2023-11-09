import React from "react";
import Search from "../../assets/icons/search.svg";
import Logo from "../../assets/icons/logo.svg";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";
import User from "../../assets/icons/user.svg";
import { ElHeader, ElHeaderFlex, Menu, Navbar } from "./styles";

const Header = () => {
  return (
    <>
      <ElHeader>
        <a href="/">
          <img src={Search} alt="search" />
        </a>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <ElHeaderFlex>
          <a href="/">
            <img src={ShoppingCart} alt="shopping-cart" />
          </a>
          <a href="/">
            <img src={User} alt="user" />
          </a>
        </ElHeaderFlex>
      </ElHeader>

      <Navbar>
        <Menu>
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
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
