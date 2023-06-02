import React, { useEffect } from "react";
import reactLogo from "../../assets/images/react.svg";
import { Button, Carousel, Space, Row, Col, Card } from "antd";
import { CancelButton } from "../../components/buttonComponent/ButtonComponent";
import "../aboutMe/aboutMe.css";
import "./homePage.css";
import Gap from "../../components/gap/Gap";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useGetAuthProfile } from "./hooks/useContoh";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";

const HomePage = () => {
  const user = {
    name: "Dengklek",
    avatarURL:
      "https://akcdn.detik.net.id/visual/2019/05/10/7ac541ac-2c34-46b3-a999-70d2251648ea_43.jpeg?w=900&q=90",
    aboutMe: "lorem ipsum",
    imageLocal: reactLogo,
  };

  const arr = ["1", "2", "3", "4"];

  // Get Auth Profile
  const [isLoadingAuthProfile, authProfile, getAuthProfile] =
    useGetAuthProfile();

  console.log({ authProfile });

  useEffect(() => {
    getAuthProfile();
  }, []);

  return (
    <>
      {isLoadingAuthProfile ? (
        <LoadingComponent />
      ) : (
        <div>
          <h1>Test Profile</h1>
          <div>{authProfile?.name}</div>
          <img
            src={authProfile?.avatar}
            alt="avatar"
            style={{ width: "200px" }}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
