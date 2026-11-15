import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaEllipsisV } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";
import { logout } from "../features/LoginPage/api/authServiceApi";

/**
 * Blok auth untuk navbar: nama akun + menu (auth), atau tombol Login (tamu).
 * Dipakai di navbar utama agar tetap terlihat saat bar atas menghilang saat scroll.
 */
export default function AuthMenu() {
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

  if (!isAuthenticated) {
    return (
      <Link
        to="/login"
        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
      >
        <FaUser className="text-lg" />
        Login
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-white">
        <FaUser className="text-lg" />
        <span className="link-moku text-lg">{user?.name}</span>
      </div>
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
    </div>
  );
}
