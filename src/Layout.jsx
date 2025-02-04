import { Outlet } from "react-router-dom";
import Stick from "./common/Stick"
import Nav from "./common/Nav";
import Footer from "./common/Footer";

const Layout = () => {
  return (
    <>
      <Stick />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
