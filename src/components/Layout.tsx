import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./header";
import NavMobile from "./NavbarMobile";
import useHandleScrol from "../features/Layout/hooks/useLayout";
import { getCurrentUser } from "../features/LoginPage/api/authServiceApi";
import { useAuthStore } from "../store/useAuthStore";
import axios from "axios";

export default function RootLayout() {
  const{isScrolled}=useHandleScrol()

  // Validasi sesi saat load: cookie httpOnly hanya bisa diverifikasi backend.
  // 200 → refresh profil; 401 → bersihkan state lama.
  useEffect(() => {
    getCurrentUser()
      .then((user) => useAuthStore.getState().setUser(user))
      .catch((error: unknown) => {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          useAuthStore.getState().clearUser();
        }
      });
  }, []);

  return (
    <>
      <div className="">
        <div className="hidden md:block">
          <Header />
        </div>
        <div
          className="fixed top-0 w-full z-50 md:hidden "
        >
          <NavMobile />
        </div>
        <div className={`hidden md:block w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 shadow-md" : "relative"}`}>
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
