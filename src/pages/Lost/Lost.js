import React from "react";
import { Layout } from "antd";
import FormSizeDemo from "../../components/Form/FormSizeDemo";
import Header from "../../components/Header/Header";
import "antd/dist/antd.css";
const { Content, Footer } = Layout;

export default function Lost() {
  return (
    <div>
      <Layout className="layout">
        <Header />

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <FormSizeDemo />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </div>
  );
}
