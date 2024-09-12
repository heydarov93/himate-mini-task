import avatar from "./Avatar.png";
import logoutIcon from "../icons/Logout-icon.svg";

function Logout() {
  return (
    <div>
      <div>
        <img src={avatar} alt="" />
        <div>
          <span>Murad Aliyev</span>
          <span>murad@himate.az</span>
        </div>
      </div>
      <button>
        <img src={logoutIcon} alt="" />
      </button>
    </div>
  );
}

export default Logout;
