import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

function AppLayout() {
  return (
    <div className="flex gap-16">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
