import logo from "./logo-wrap.svg";
import Search from "./Search";

function SidebarHeader() {
  return (
    <header className="mb-6 p-2">
      <div className="mb-6">
        <img src={logo} alt="logo" />
      </div>
      <Search />
    </header>
  );
}

export default SidebarHeader;
