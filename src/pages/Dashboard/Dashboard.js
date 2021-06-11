import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import { Carousel } from "antd";
import Kitty21 from "./images/Kitty21.jpg";
import Dog1 from "./images/Dog1.jpg";
import Animals2 from "./images/Animals2.jpg";
import Pup from "./images/Pup.jpg";
import Paw from "./images/Paw.png";

const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "0px",
  textAlign: "center",
  background: "#364d79",
};

const { Content, Sider } = Layout;

function Dashboard() {
  return (
    <div>
      <Layout className="layout">
        <Header></Header>
        <Layout>
          <Content style={{ padding: "20px" }}>
            <div className="site-layout-content">
              <Carousel autoplay>
                <div>
                  <img className="carouselImg"
                    src={Kitty21}
                    className="KITTY"
                    alt="kitty"
                    style={contentStyle}
                  />
                </div>

                <div>
                  <img className="carouselImg"
                    src={Dog1}
                    className="dog"
                    alt="dog"
                    style={contentStyle}
                  />
                </div>

                <div>
                  <img className="carouselImg"
                    src={Animals2}
                    className="animals"
                    alt="animals"
                    style={contentStyle}
                  />
                </div>

                <div>
                  <img className="carouselImg"
                    src={Pup}
                    className="pup"
                    alt="animals"
                    style={contentStyle}
                  />
                </div>
              </Carousel>
            </div>
          </Content>
          <Sider className="aside">
            <div className="petPaw">
            <h1>Find Your Pet</h1>
            <p>Will help you find your lost pet!</p>
            <p>If you have found a missing pet submit a form and post it!</p>
            <p>
              We understand how difficult it can be to find a pet, and were here
              to make it easier!
            </p>

            <div>
              <img src={Paw} className="paw" alt="animals" />
            </div>
           </div> 
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}
export default Dashboard;
