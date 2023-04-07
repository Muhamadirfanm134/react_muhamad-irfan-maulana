import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/form">Form</Link>,
    key: "1",
  },
  {
    label: <Link to="/form-crud">Form-CRUD</Link>,
    key: "2",
  },
  {
    label: <Link to="/portfolio">Portfolio</Link>,
    key: "3",
  },
  {
    label: <Link to="/about-me">About Me</Link>,
    key: "4",
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
