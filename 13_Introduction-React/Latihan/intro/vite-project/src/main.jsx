import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import "./index.css";
import { ThemeConfig } from "./themes/themeConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={ThemeConfig}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
