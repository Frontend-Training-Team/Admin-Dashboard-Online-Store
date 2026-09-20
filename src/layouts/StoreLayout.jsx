import { Outlet } from "react-router-dom";
import Header from "../components/ui/store/Header";
import Footer from "../components/ui/store/Footer";

function StoreLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default StoreLayout;