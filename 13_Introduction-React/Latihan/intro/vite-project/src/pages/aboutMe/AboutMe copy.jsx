import React from "react";
import { Link, useParams } from "react-router-dom";
import "./aboutMe.css";
import { USERS_DATA } from "./constants";
import { Card } from "antd";

const AboutMe = () => {
  const { id } = useParams();

  const data = id ? USERS_DATA.filter((item) => item.id === id) : USERS_DATA;

  return (
    <div>
      <h1>About Me</h1>

      {data.map((user) => (
        <Card title={user.name} key={user.id}>
          <div>{user.hobby}</div>
          <div>{user.age}</div>
        </Card>
      ))}
    </div>
  );
};

export default AboutMe;
