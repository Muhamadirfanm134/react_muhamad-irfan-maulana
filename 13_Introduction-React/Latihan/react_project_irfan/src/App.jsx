import { Layout, Menu } from "antd";
import "./App.css";
import AboutMe from "./pages/about-me/AboutMe";
import HomePage from "./pages/home-page/HomePage";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            backgroundColor: "#ffff",
            boxShadow: "rgb(0 0 0 / 10%) 0px 7px 25px 0px",
          }}
        >
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "#333333",
            }}
          />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
            style={{
              float: "right",
            }}
          />
        </Header>
        <Content
          style={{
            minHeight: "100vh",
            // backgroundColor: "#333333",
          }}
        >
          <div className="container">
            <HomePage />
            <AboutMe />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Build with proudly by: Muhamad Irfan Maulana @2023
        </Footer>
      </Layout>
    </>
  );
}

export default App;
