import { Link } from "react-router-dom";
import icon_5 from "../icons/Icon-5.svg";

function SettingsNavItem() {
  return (
    <div className="mb-6 px-3 py-2">
      <Link className="flex items-start gap-3" to="/settings">
        <img className="h-6 w-6" src={icon_5} alt="" />
        <span className="font-semibold leading-6">Settings</span>
      </Link>
    </div>
  );
}

export default SettingsNavItem;
