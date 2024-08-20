import React from "react";
import Menubar from "../Menubar/Menubar";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";
import Destination from "../Destination/Destination";
import TravelPoint from "../Travel Point/TravelPoint";
import KeyFeature from "../Key Feature/KeyFeature";
import Testimonial from "../Testimonial/Testimonial";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";

const Home1 = () => {
  return (
    <main>
      <div className="">
        <div>
          <Menubar />
          <Hero />
          <Service />
          <Destination />
          <TravelPoint />
          <KeyFeature />
          <Testimonial />
          <Subscribe />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home1;
