import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ui/ScrollToTop"; // 👈 add this
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawerOverlay from "./CartDrawerOverlay";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <ScrollToTop /> {/* 👈 ADD HERE */}

      {/* <AnnouncementBar /> */}
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <CartDrawerOverlay />
    </div>
  );
}