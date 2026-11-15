import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/Layout";
import AboutUsPage from "./Pages/aboutUs";
import ShopCoffeePage from "./Pages/shopCoffee";
import LoginPage from "./features/authPage/LoginPage";
import RegisterPage from "./features/authPage/RegisterPage";
import TeamsPage from "./Pages/teamspage";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="AboutUs" element={<AboutUsPage />} />
        <Route path="ShopCoffee" element={<ShopCoffeePage />} />
        <Route path="MeetOurTeam" element={<TeamsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
