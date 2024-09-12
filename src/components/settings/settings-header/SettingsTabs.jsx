import { NavLink } from "react-router-dom";

function SettingsTabs() {
  return (
    <nav>
      <NavLink to="profile">Profile</NavLink>
      <NavLink to="experience">Work Experience</NavLink>
      <NavLink to="education">Education</NavLink>
      <NavLink to="preferences">Preferences</NavLink>
      <NavLink to="notifications">Notifications</NavLink>
    </nav>
  );
}

export default SettingsTabs;
