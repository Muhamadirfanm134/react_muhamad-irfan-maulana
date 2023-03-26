import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Link from "../../router/Link";
import { MENU_ITEM } from "./constants";
import "./layout.css";

const LayoutComponent = ({ children }) => {
  const { Header, Content } = Layout;
  const isSmallScreen = useWindowWidth();
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("1");

  const onSelectMenu = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (!isSmallScreen) {
      setVisible(false);
    }
  }, [isSmallScreen]);

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
          <div className="header-wrapper">
            <Link href="/">
              <div
                style={{
                  float: "left",
                  width: 120,
                  height: 31,
                  margin: "16px 24px 16px 0",
                  background: "rgba(255, 255, 255, 0.2)",
                }}
                onClick={() => setCurrent("")}
              />
            </Link>

            {isSmallScreen ? (
              <MenuOutlined style={{ color: "white" }} onClick={showDrawer} />
            ) : (
              <Menu
                theme="dark"
                mode="horizontal"
                onClick={onSelectMenu}
                selectedKeys={[current]}
                items={MENU_ITEM}
                disabledOverflow
              />
            )}

            <Drawer
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
            >
              <Menu
                mode="vertical"
                onClick={onSelectMenu}
                selectedKeys={[current]}
                items={MENU_ITEM}
              />
            </Drawer>
          </div>
        </Header>

        {/* Main Content */}
        <Content
          style={{
            padding: "0 50px",
            backgroundColor: "#fff",
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
