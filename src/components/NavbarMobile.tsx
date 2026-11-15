import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { logout } from "../features/LoginPage/api/authServiceApi";

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  const handleClose = () => setIsOpen(false);

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      clearUser();
      navigate("/");
    }
  };

  return (
    <div className="bg-moku relative z-9999">
      <div className="navbar shadow-sm">

        {/* Kiri — Hamburger Menu */}
        <div className="navbar-start">
          <div className="drawer">
            <input
              id="my-drawer-1"
              type="checkbox"
              className="drawer-toggle"
              checked={isOpen}
              onChange={(e) => setIsOpen(e.target.checked)}
            />
            <div className="drawer-content">
              <label htmlFor="my-drawer-1" className="btn btn-ghost btn-circle">
                <IoMenu className="text-white text-4xl" />
              </label>
            </div>
            <div className="drawer-side z-9999">
              <label
                htmlFor="my-drawer-1"
                aria-label="close sidebar"
                className="drawer-overlay"
                onClick={handleClose}
              />
              <ul className="menu bg-base-200 min-h-full w-40 p-4">
                {isAuthenticated && (
                  <li className="mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <FaUser className="text-xs" />
                      {user?.name}
                    </div>
                  </li>
                )}
                <li><Link to="/" onClick={handleClose}>Home</Link></li>
                <li><Link to="/AboutUs" onClick={handleClose}>Our Story</Link></li>
                <li><Link to="/ShopCoffee" onClick={handleClose}>Shop Coffee</Link></li>
                <li><Link to="/MeetOurTeam" onClick={handleClose}>Our Teams</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tengah — Logo */}
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost btn-circle w-14">
            <img className="w-full" src="/images/logo-moku.png" />
          </Link>
        </div>

        {/* Kanan — Dropdown Kebab */}
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <BsThreeDotsVertical className="text-2xl text-white" />
            </div>
            <ul className="menu menu-md dropdown-content bg-base-100 rounded-box z-9999 mt-3 w-48 p-2 shadow mr-2">
              {isAuthenticated ? (
                <>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-error flex items-center gap-2"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">
                    <FaUser />
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
