import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = () => (
  <Menu inverted>
    <Link to="/">
      <Menu.Item>Cards</Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>About</Menu.Item>
    </Link>
  </Menu>
);

export default Navbar;
