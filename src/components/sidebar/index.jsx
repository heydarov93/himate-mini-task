import SidebarHeader from "./sidebar-header/SidebarHeader";
import Navigation from "./navigation/Navigation";
import SidebarFooter from "./sidebar-footer";

function Sidebar() {
  return (
    <aside className="border-primary flex min-h-screen max-w-[17.5rem] flex-col justify-between border-r px-4 py-[2rem]">
      <div>
        <SidebarHeader />
        <Navigation />
      </div>
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
