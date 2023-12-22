import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dropdown">
      <span
        className="dropdown-toggle cursor-pointer"
        role="button"
        id="userDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <PiUserCircleFill />
      </span>
      <ul className="dropdown-menu" aria-labelledby="userDropdown">
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={handleLogout}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};
export default UserDropdown;
