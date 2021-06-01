import React from "react"
import 'antd/dist/antd.css';
import {Menu} from 'antd';

// const { Header, Content, Footer } = Layout;

function Header (){
    return(
        <div>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Shelter</Menu.Item>
          <Menu.Item key="2">Found</Menu.Item>
          <Menu.Item key="3">Lost</Menu.Item>
        </Menu>
     
      </div>
)
}

export default Header