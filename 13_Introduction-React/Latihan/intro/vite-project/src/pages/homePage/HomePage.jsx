import React from "react";
import reactLogo from "../../assets/images/react.svg";
import { Button, Carousel, Space, Row, Col, Card } from "antd";
import { CancelButton } from "../../components/buttonComponent/ButtonComponent";
import "../aboutMe/aboutMe.css";
import "./homePage.css";
import Gap from "../../components/gap/Gap";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const HomePage = () => {
  const user = {
    name: "Dengklek",
    avatarURL:
      "https://akcdn.detik.net.id/visual/2019/05/10/7ac541ac-2c34-46b3-a999-70d2251648ea_43.jpeg?w=900&q=90",
    aboutMe: "lorem ipsum",
    imageLocal: reactLogo,
  };

  const arr = ["1", "2", "3", "4"];

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="homepage">Home Page</div>
      <div className="about-me">About Me Page</div>

      <div className="card">
        {/* <img src={DesignerImage} alt="" /> */}
        <div>{user.name}</div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <br />
      <br />

      {/* AntD Component */}
      <Space wrap>
        <Button type="primary" href="/login">
          Coba Button
        </Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text" href="/login">
          Text Button
        </Button>
        <Button type="link" href="/login">
          Link Button
        </Button>
      </Space>

      <Space wrap>
        <Button type="primary">Submit</Button>
        <CancelButton text="Cancel" />
      </Space>

      <Button type="primary">Ini Button</Button>

      <Gap height={30} />

      <Row justify="center">
        <Col span={4}>
          <Carousel
            arrows={true}
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
          >
            {arr.map((item) => (
              <Card>
                <h3>{item}</h3>
              </Card>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
