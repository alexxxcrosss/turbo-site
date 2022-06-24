import React, {useEffect} from "react";
import PageRevealer from "components/page-revealer";
import Navbar from "components/navbar";
import Footer from "components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "scss/abstract.scss";

const Layout = ({ children, isHome, sections }) => {

  useEffect(() => {
    //window.location.reload();
  });

  return (
    <div id="main">
      <Navbar
        scroll={isHome ? true : false}
        sections={sections}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
