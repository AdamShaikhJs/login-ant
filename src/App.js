import React from "react";
import "antd/dist/antd.css";
import Login from "./component/Login";
import { Layout, Button, Image, Row, Col } from "antd";
import "./App.css";

const { Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Content>
          <Row>
            <Col span={8}>
              <h4>ATools</h4>
            </Col>
            <Col xs={0} lg={4} offset={12}>
              <div>
                <Button className="bluebtn">Start free trial</Button>
                <Button className="orangebtn">Login</Button>
              </div>
            </Col>
          </Row>
        </Content>
        <Content>
          <Row>
            <Col xs={24} lg={8}>
              <div className="main1">
                <Login />
              </div>
            </Col>
            <Col xs={0} lg={16}>
              <div className="main2">
                <Image src="/Assets/ant.png" width="100%" />
              </div>
            </Col>
          </Row>
        </Content>
        <Footer>.</Footer>
      </Layout>
    </>
  );
}

export default App;
