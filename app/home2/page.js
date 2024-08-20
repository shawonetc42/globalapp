import React from "react";
import Hero from "../Components/Landing-Page-2/hero/Hero";
import Service from "../Components/Landing-Page-2/Service/Service";
import Features from "../Components/Landing-Page-2/features/Features";
import Stories from "../Components/Landing-Page-2/stories/Stories";
import Questions from "../Components/Landing-Page-2/questions/Questions";
import RightService from "../Components/Landing-Page-2/Service/RightService";
import Footer from "../Components/Landing-Page-1/Footer/Footer";
import StatsSections from "../Components/Landing-Page-2/StatsSection/StatsSections";

export default function Home2() {
  return (
    <div>
      <Hero />
      <StatsSections />
      <Service />
      <Features />
      <Stories />
      <Questions />
      <RightService />
      <Footer />
    </div>
  );
}
