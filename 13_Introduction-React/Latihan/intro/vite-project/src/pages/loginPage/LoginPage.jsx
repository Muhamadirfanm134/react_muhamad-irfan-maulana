import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    localStorage.setItem("token", true);
    navigate("/");
  };

  return (
    <div className="container-center">
      <Card title="Login Page" bodyStyle={{ width: "600px" }}>
        <Button type="primary" onClick={onLogin}>
          Login
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;
