import { Button, ConfigProvider } from "antd";
import React from "react";

export const ButtonComponent = () => {
  return <button>Coba Button</button>;
};

export const OkayButton = ({ text, onClick }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#333333",
        },
      }}
    >
      <Button type="primary" onClick={onClick}>
        {text}
      </Button>
    </ConfigProvider>
  );
};

export const CancelButton = ({ text, onClick }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "red",
        },
      }}
    >
      <Button type="primary" onClick={onClick}>
        {text}
      </Button>
    </ConfigProvider>
  );
};
