import { NavLink } from "react-router-dom";
import type { NavItem } from "../features/Navbar/types/Navbar-types";

const navItem: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/AboutUs" },
  { label: "Shop Coffee", path: "/ShopCoffee" },
  { label: "Mokuton Journal", path: "/MokutonJournal" },
  { label: "Our Teams", path: "/MeetOurTeam" },
  { label: "Contact Us", path: "/ContactUs" },
];

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-moku px-8 h-16">
        <div className="navbar-start">
          <span></span>
        </div>
        <div className="navbar-center">
          <ul className="flex items-center">
            {navItem.map((item) => (
              <li key={item?.path} className="flex">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-md font-medium text-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-moku-light  text-white   hover:bg-moku-dark "
                        : "  text-white/60 bg-moku hover:bg-moku hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <span></span>
        </div>
      </div>
    </>
  );
}
