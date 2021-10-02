import React from 'react'
import {
  Link
} from "@awsui/components-react";
import logo from "../logo.png";
import {useLocation} from "react-router-dom";
import './NavBar.css';

const navItems = [
  {
    path: '/',
    name:  'Home',
  },
  {
    path: '/about',
    name:  'About',
  },
]

export default function NavBar() {
  const location = useLocation();

  const renderedItems = () => {
    return navItems.map((item, i) => {
      return (
        <div className="navItem">
          <Link className={(location.pathname === item.path ? "active" : '')} href={item.path}>{item.name}</Link>
        </div>
      )
    })
  };

  return (
    <header className="navBar">
      <img src={logo} className="logo" alt="logo" />
      {renderedItems()}
    </header>
  );
}