import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout, Breadcrumb } from "antd";
import Header from "../../components/Header/Header"
const { Content, Footer } = Layout;

function Dashboard() {
  return (
    <div>
    <Layout className="layout">
  
    <Header/>
     
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <h1>Find your child!</h1>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
    </div>
    // document.getElementById("container")
  );
}
export default Dashboard;
