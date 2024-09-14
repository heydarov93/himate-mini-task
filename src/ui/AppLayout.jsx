import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

function AppLayout() {
  return (
    <div className="flex justify-start">
      <Sidebar />
      <div className="w-full px-8 pt-8">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
