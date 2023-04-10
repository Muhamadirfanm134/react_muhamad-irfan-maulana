import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/form">Form</Link>,
    key: "/form",
  },
  {
    label: <Link to="/form-crud">Form-CRUD</Link>,
    key: "/form-crud",
  },
  {
    label: <Link to="/portfolio">Portfolio</Link>,
    key: "/portfolio",
  },
  {
    label: <Link to="/about-me">About Me</Link>,
    key: "/about-me",
  },
  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "5",
  },
];
