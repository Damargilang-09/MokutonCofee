import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/Layout";
import AboutUsPage from "./Pages/aboutUs";
import ShopCoffeePage from "./Pages/shopCoffee";
import ContactUsPage from "./Pages/contactUs";
import TeamsPage from "./Pages/teamspage";
import MokuJournalPage from "./Pages/mokublog";
import BlogDetailPage from "./features/MokujournalPage/component/blogDetailPage";
import LoginPage from "./features/authPage/LoginPage";
import ProtectedRoute from "./components/ProtectRoute";
import CreateBlogPage from "./features/MokujournalPage/component/createBlogPage";
import InboxPage from "./features/ContactUsPage/component/inboxPage";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="AboutUs" element={<AboutUsPage />} />
        <Route path="ShopCoffee" element={<ShopCoffeePage />} />
        <Route path="MokutonJournal" element={<MokuJournalPage />} />
        <Route path="MeetOurTeam" element={<TeamsPage />} />
        <Route path="ContactUs" element={<ContactUsPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/blog/create"
          element={
            <ProtectedRoute>
              <CreateBlogPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <InboxPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
