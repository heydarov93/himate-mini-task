import { NavLink } from "react-router-dom";

const tabs = [
  {
    name: "Profile",
    link: "profile",
  },
  {
    name: "Work Experience",
    link: "experience",
  },
  {
    name: "Education",
    link: "education",
  },
  {
    name: "Preferences",
    link: "preferences",
  },
  {
    name: "Notifications",
    link: "notifications",
  },
];

function SettingsTabs() {
  return (
    <nav className="text-quarterary border-secondary flex h-8 gap-3 border-b">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          className={({ isActive }) =>
            `h-8 px-1 ${isActive ? "border-brand-primary-alt text-brand-primary-alt border-b-2 pb-[10px]" : "pb-3"}`
          }
          to={tab.link}
        >
          <span className="text-sm font-semibold">{tab.name}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default SettingsTabs;
