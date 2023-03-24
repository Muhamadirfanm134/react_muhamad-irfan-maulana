import React from "react";
import { ButtonComponent } from "../../components/buttonComponent/ButtonComponent";
import "../homePage/homePage.css";
import "./aboutMe.css";
import { USERS_DATA } from "./constants";

const AboutMe = () => {
  const isLogedIn = true;
  const numbers = [1, 2, 3, 4, 5];

  function UserGreeting() {
    return <h1>Welcome Back!</h1>;
  }

  function GuestGreeting() {
    return <h1>Please Sign Up!</h1>;
  }

  if (isLogedIn === false) {
    return <GuestGreeting />;
  }

  return (
    <div>
      <h1>About Me</h1>
      <p>
        fjhshflsdhflsdhflsdhlfhdlsfhldfh, {isLogedIn ? "Hello user!" : "nope"}
      </p>
      <ButtonComponent />

      <hr />
      {/* Conditional Rendering */}
      {isLogedIn ? <UserGreeting /> : <GuestGreeting />}

      <hr />
      <br />

      {/* Map */}
      <ul>
        {numbers.map((number, index) => (
          <li key={index}> Ini nomor {number}</li>
        ))}
      </ul>

      <hr />
      <br />

      {USERS_DATA.map((user) => (
        <div key={user.id} className="card">
          <div>{user.name}</div>
          <div>{user.age}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
