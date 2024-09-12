import icon_0 from "../icons/Icon.svg";
import icon_1 from "../icons/Icon-1.svg";
import icon_2 from "../icons/Icon-2.svg";
import icon_3 from "../icons/Icon-3.svg";
import icon_4 from "../icons/Icon-4.svg";
import { Link } from "react-router-dom";

const menus = [
  {
    name: "Home",
    icon: icon_0,
    link: "/",
  },
  {
    name: "Dashboard",
    icon: icon_1,
    link: "/dashboard",
  },
  {
    name: "Discover",
    icon: icon_2,
    link: "/discover",
  },
  {
    name: "Applied Jobs",
    icon: icon_3,
    link: "/applied-jobs",
  },
  {
    name: "Inbox",
    icon: icon_4,
    link: "/inbox",
  },
];

function Navigation() {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.name}>
          <Link to={menu.link}>
            <img src={menu.icon} alt="" />
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
