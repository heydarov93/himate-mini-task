import searchIcon from "../icons/search.svg";

function Search() {
  return (
    <div className="relative">
      <img
        src={searchIcon}
        alt="search"
        className="absolute left-[14px] top-3 h-5 w-5"
      />
      <input
        className="border-primary content-border shadow-modern/5 h-11 w-full rounded-md border py-[10px] pl-[44px] pr-[14px] text-base shadow-sm focus:outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
