import { Outlet } from "react-router-dom";
import SettingsHeader from "../components/settings/settings-header";

function SettingsLayout() {
  return (
    <div>
      <SettingsHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default SettingsLayout;
