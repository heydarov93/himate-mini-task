import avatar from "./Avatar.png";
import logoutIcon from "../icons/Logout-icon.svg";

function Account() {
  return (
    <div className="border-primary flex border-t pl-2 pt-4">
      <div className="mt-2 flex items-center gap-3 pr-9">
        <img className="h-10 w-10" src={avatar} alt="" />
        <div className="flex flex-col text-sm">
          <span>Murad Aliyev</span>
          <span>murad@himate.az</span>
        </div>
      </div>
      <button className="flex h-9 w-9 items-center justify-center">
        <img className="h-5 w-5" src={logoutIcon} alt="" />
      </button>
    </div>
  );
}

export default Account;
