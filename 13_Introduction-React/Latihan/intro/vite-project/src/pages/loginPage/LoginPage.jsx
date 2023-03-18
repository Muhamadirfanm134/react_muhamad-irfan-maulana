import { Alert, Button } from "antd";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page!</h1>
      <Alert message="Success Text" type="success" />
      <a href="/">
        <Button>Coba Button</Button>
      </a>
    </div>
  );
};

export default LoginPage;
