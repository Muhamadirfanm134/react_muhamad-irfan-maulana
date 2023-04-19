import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Modal, Radio, Row, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gap from "../../components/gap/Gap";
import "./login.css";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROFILE, GET_PROFILE } from "./query/profile-query";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [section, setSection] = useState("Login");

  // GraphQL
  const {
    data: profileData,
    loading: isProfileLoading,
    error: isProfileError,
  } = useQuery(GET_PROFILE);

  const [register, { loading: isRegisterLoading }] = useMutation(ADD_PROFILE, {
    refetchQueries: [GET_PROFILE],
  });

  const onLogin = (values) => {
    const profile = [...profileData?.profile];

    // Mengecek apakah user existed
    const isUser = profile.find((item) => item.username === values.username);

    // Mengecek apakah user terverifikasi (sesuai dengan data user yang ada)
    const isVerified = JSON.stringify(isUser) === JSON.stringify(values);

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
    const profile = [...profileData?.profile];

    // is user existed?
    const isExisted = profile?.some(
      (item) => item.username === values.username
    );

    if (!isExisted) {
      register({
        variables: {
          object: {
            ...values,
          },
        },
        onError: (err) => {
          message.open({
            type: "error",
            content: `${err.message}`,
          });
        },
        onCompleted: () => {
          Modal.success({
            title: "Register Success!",
            content: "Please login using your account",
            centered: true,
            onOk() {
              form.resetFields(), setSection("Login");
            },
          });
        },
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
