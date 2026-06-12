import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { clearStore, toggleSidebar } from "../features/user/userSlice";
import { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { toggleTheme } from "../features/user/userSlice";

function Navbar() {
  const [showLogout, setShowLogout] = useState(false);
  const { user, theme } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="toggle" onClick={() => dispatch(toggleTheme())}>
            {theme === "light-theme" ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                dispatch(clearStore("Logging out..."));
                setShowLogout(false);
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
