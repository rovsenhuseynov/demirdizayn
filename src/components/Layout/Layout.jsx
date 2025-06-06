import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
