import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const arrayMenu = ["Logo", "home", "about", "login", "logout"];
  const menu = arrayMenu.map((prop, index) => {
    return (
      <li className="title" key={"li-menu-Navbar-" + index}>
        <Link
          to={prop === "Logo" || prop === "home" ? "" : prop}
          key={"a-menu-Navbar" + index}
        >
          {prop}
        </Link>
      </li>
    );
  });

  return (
    <div id="box-navbar">
      <ul id="box-title-navbar" key={"ul-menu-Navbar"}>
        {menu}
      </ul>
    </div>
  );
}
