import React, { Fragment } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FilterBooking from "../components/FilterBooking ";
const places = ["Patna", "Kolkata"];
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <main>
        <FilterBooking places={places} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
