import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
