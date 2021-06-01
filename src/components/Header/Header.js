import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";

// const { Header, Content, Footer } = Layout;

function Header() {
  return (
    <div className="logo">
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Link
            to="/dashboard"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/dashboard"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="2">Found</Menu.Item>
        <Menu.Item key="3">Lost</Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
