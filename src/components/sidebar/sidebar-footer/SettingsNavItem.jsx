import { Link } from "react-router-dom";
import icon_5 from "../icons/Icon-5.svg";

function SettingsNavItem() {
  return (
    <Link to="/settings">
      <img src={icon_5} alt="" />
      <span>Settings</span>
    </Link>
  );
}

export default SettingsNavItem;
