import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaSignOutAlt,
  FaPenSquare,
  FaInbox,
  FaEllipsisV,
} from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";
import { logout } from "../features/LoginPage/api/authServiceApi";

export default function Header() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

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
      <div className="flex justify-between items-center pt-4 pr-5 pb-4">
        {/* Kiri — Nama user atau kosong */}
        <div className="w-40 pl-6">
          {isAuthenticated && (
            <div className="flex items-center gap-2">
              <FaUser className="text-white text-2xl" />
              <span className="link-moku text-xl">{user?.name}</span>
            </div>
          )}
        </div>

        {/* Tengah — Logo */}
        <Link to="/">
          <img
            className="btn btn-link w-40 h-full"
            src="/images/logo-moku.png"
          />
        </Link>

        {/* Kanan — Dropdown kebab atau Login */}
        <div className="w-40 flex justify-end">
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm text-white"
              >
                <FaEllipsisV className="text-white text-lg" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-9999 w-48 p-2 shadow"
              >
                <li>
                  <Link to="/blog/create" className="flex items-center gap-2">
                    <FaPenSquare />
                    Tulis Artikel
                  </Link>
                </li>
                <li>
                  <Link to="/inbox" className="flex items-center gap-2">
                    <FaInbox />
                    Inbox
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-error"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <FaUser className="text-white" />
              <Link to="/login" className="link-moku">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
