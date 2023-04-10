import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Modal, Radio, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Gap from "../../components/gap/Gap";
import { useGetProfile, useRegister } from "./hooks/useAuth";
import "./login.css";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [section, setSection] = useState("Login");
  const [isRegisterLoading, createProfile] = useRegister();
  const [isLoadingProfile, profileData, getProfile] = useGetProfile();

  const onLogin = (values) => {
    const user = profileData?.find(
      (profile) => profile.username === values.username
    );

    delete user?.id;

    const isVerified = JSON.stringify(user) === JSON.stringify(values);

    if (isVerified) {
      localStorage.setItem("token", true);
      navigate("/");
    } else {
      Modal.warning({
        title: "Login Failed!",
        content: "Username/password is not correct",
        centered: true,
        onOk() {
          setSection("Login");
        },
      });
    }
  };

  const onRegister = (values) => {
    const isExisted = profileData.some(
      (profile) => profile.username === values.username
    );

    if (!isExisted) {
      const payload = {
        id: "INCREMENT",
        ...values,
      };
      createProfile(payload, () => {
        Modal.success({
          title: "Register Success!",
          content: "Please login using your account",
          centered: true,
          onOk() {
            form.resetFields();
            setSection("Login");
          },
        });
      });
    } else {
      Modal.warning({
        title: "Register Failed!",
        content: "Your username has already been used",
        centered: true,
      });
    }
  };

  const onChange = ({ target: { value } }) => {
    setSection(value);
    form.resetFields();
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container-center">
      <Card title="WELCOME!" bodyStyle={{ width: "400px" }}>
        <Row justify="center">
          <Radio.Group
            defaultValue="Login"
            buttonStyle="solid"
            onChange={onChange}
            value={section}
          >
            <Radio.Button value="Login">Login Here</Radio.Button>
            <Radio.Button value="Register">Register Here</Radio.Button>
          </Radio.Group>
        </Row>

        <Gap height={20} />

        <Form
          name="login-form"
          form={form}
          onFinish={section === "Login" ? onLogin : onRegister}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isRegisterLoading}
            block
          >
            {section === "Login" ? "Login" : "Register"}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
