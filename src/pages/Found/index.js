import React from "react";
import "antd/dist/antd.css";

import { Layout, Breadcrumb } from "antd";
import FoundForm from "../../components/Found/FoundForm";
import Header from "../../components/Header/Header"
const { Content, Footer } = Layout;

function Found() {
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
          <FoundForm></FoundForm>
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
export default Found;
