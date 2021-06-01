import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import { Card, Col, Row } from 'antd';
const { Content, Footer } = Layout;

function Dashboard() {
  return (
    <div>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
           <h1>Find your child!</h1>

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
       <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
        </Col>
          <Col span={8}>
          <Card title="Card title" bordered={false}>
          Card content
           </Card>
          </Col>
       </Row>
    </div>
    
    <div>
    <Card/>
    </div>
    <div>
    <Card/>
    </div>

          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
        </Footer>
      </Layout>
    </div>
    // document.getElementById("container")
  );
};
export default Dashboard;
