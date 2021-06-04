import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Index";
import { Carousel } from 'antd';
import Kitty21 from "./images/Kitty21.jpg"
import Dog4 from "./images/Dog4.webp"
import CatBunny from "./images/CatBunny.jpg"
import Anm from "./images/Anm.jpg"

const contentStyle = {
  height: '500px',
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
           <img src = {Kitty21} class= "KITTY" alt="kitty" style={contentStyle} />
          </div>

         <div>
         <img src = {Dog4} class= "dog" alt="dog" style={contentStyle} />
        </div>
        <div>
        <img src = {CatBunny} class= "CB" alt="CatBunny" style={contentStyle} />
        </div>
       <div>
       <img src = {Anm} class= "animals" alt="animals" style={contentStyle} />
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
