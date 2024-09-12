import logo from "./logo-wrap.svg";
import Search from "./Search";

function SidebarHeader() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Search />
    </header>
  );
}

export default SidebarHeader;
