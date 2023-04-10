import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./aboutMe.css";
import { Card } from "antd";
import { useGetUsers } from "./hooks/useUsersData";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";

const AboutMe = () => {
  const { id } = useParams();

  // Get user data
  const [isLoadingUsersData, usersData, getUsersData] = useGetUsers();

  console.log({ usersData });

  // Activate custom hook
  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div>
      <h1>About Me</h1>

      {isLoadingUsersData ? (
        <LoadingComponent />
      ) : (
        usersData?.map((user) => (
          <Card title={user.firstName + " " + user.lastName} key={user.id}>
            <div>{user.age}</div>
            <div>{user.address}</div>
          </Card>
        ))
      )}
    </div>
  );
};

export default AboutMe;
