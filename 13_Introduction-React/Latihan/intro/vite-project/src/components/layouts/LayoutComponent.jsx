import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import React, { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import { MENU_ITEM } from "./constants";
import Link from "../../router/Link";

const LayoutComponent = ({ children }) => {
  const isSmallScreen = useWindowWidth();
  const [visible, setVisible] = useState(isSmallScreen);

  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Layout>
        {/* Header */}
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <Link href="/">
            <div
              style={{
                float: "left",
                width: 120,
                height: 31,
                margin: "16px 24px 16px 0",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            />
          </Link>

          <Menu
            theme="dark"
            mode="horizontal"
            onClick={onClick}
            selectedKeys={[current]}
            items={MENU_ITEM}
          />
        </Header>

        {/* Main Content */}
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default LayoutComponent;
