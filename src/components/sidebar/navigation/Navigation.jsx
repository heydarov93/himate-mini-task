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
    <ul className="flex flex-col gap-1">
      {menus.map((menu) => (
        <li className="px-3 py-2" key={menu.name}>
          <Link className="flex items-start gap-3" to={menu.link}>
            <img className="h-6 w-6" src={menu.icon} alt="" />
            <span className="font-semibold leading-6">{menu.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
