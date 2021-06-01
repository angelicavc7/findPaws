import React from "react";
import "antd/dist/antd.css";

import { Layout } from "antd";
import FormSizeDemo from "../../components/Form/FormSizeDemo";
import Header from "../../components/Header/Header";
const { Content, Footer } = Layout;

function Lost() {
  return (
    <div>
      <Layout className="layout">
        <Header />

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <FormSizeDemo></FormSizeDemo>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          
        </Footer>
      </Layout>
    </div>
    // document.getElementById("container")
  );
}
export default Lost;
