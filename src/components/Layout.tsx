import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./header";
import NavMobile from "./NavbarMobile";
import useHandleScrol from "../features/Layout/hooks/useLayout";


export default function RootLayout() {
  const{isScrolled}=useHandleScrol()

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
