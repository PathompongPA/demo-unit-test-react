import { Link } from "react-router-dom";

export default function Navbar() {
  const arrayMenu = ["Logo", "home", "about", "login", "logout"];
  const menu = arrayMenu.map((prop, index) => {
    return (
      <li key={"li-menu-Navbar-" + index}>
        <Link to={prop} key={"a-menu-Navbar" + index}>
          {prop}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <ul key={"ul-menu-Navbar"}>{menu}</ul>
    </div>
  );
}
