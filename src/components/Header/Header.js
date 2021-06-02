import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";

// const { Header, Content, Footer } = Layout;

function Header() {
  return (
    <div className="logo">
      <Menu
        className="Menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
      >
        <Menu.Item className="Menu-item">
          <Link
            to="/Dashboard"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/Dashboard"
                ? "Menu-link active"
                : "Menu-link"
            }
          >
            Home
          </Link>
        </Menu.Item>

        <Menu.Item className="Menu-item">
          <Link
            to="/Found"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/Found"
                ? "Menu-link active"
                : "Menu-link"
            }
          >
            Found a Pet
          </Link>
        </Menu.Item>

        <Menu.Item className="Menu-item">
          <Link
            to="/Lost"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/Lost"
                ? "Menu-link active"
                : "Menu-link"
            }
          >
            Lost a Pet
          </Link>
        </Menu.Item>

        <Menu.Item className="Menu-item">
          <Link
            to="/Search"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/Search"
                ? "Menu-link active"
                : "Menu-link"
            }
          >
            Search
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;

// <Route path = "/" Dashboard = {}
