import SidebarHeader from "./sidebar-header/SidebarHeader";
import Navigation from "./navigation/Navigation";
import SidebarFooter from "./sidebar-footer";

function Sidebar() {
  return (
    <aside className="min-h-screen border-r-2">
      <SidebarHeader />
      <Navigation />
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
