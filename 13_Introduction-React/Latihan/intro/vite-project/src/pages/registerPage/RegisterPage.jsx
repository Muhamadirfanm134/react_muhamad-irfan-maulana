import React from "react";
import "../loginPage/login.css";
import { Card, Form, Input } from "antd";

const RegisterPage = () => {
  const onRegister = (values) => {};

  return (
    <>
      <Form name="register-form" onFinish={onRegister}>
        <Form.Item name="username" label="Username">
          <Input placeholder="Input your username" />
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterPage;
