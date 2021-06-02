import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Index";
const { Content, Footer, Sider } = Layout;

function Dashboard() {
  return (
    <div>
      <Layout className="layout">
        <Header></Header>
        <Layout>
          <Sider>
            <Card />
          </Sider>

          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <h1>Find your child!</h1>
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </div>
    // document.getElementById("container")
  );
}
export default Dashboard;
