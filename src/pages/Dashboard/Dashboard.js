import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Index";
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

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

            <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
         <div>
        <h3 style={contentStyle}>2</h3>
        </div>
        <div>
        <h3 style={contentStyle}>3</h3>
        </div>
       <div>
         <h3 style={contentStyle}>4</h3>
        </div>
          </Carousel>

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
