import AboutMeSection from "@/components/about/AboutMeSection";
import MainSlider from "@/components/common/slider/MainSlider";
import OurServiceSectionInsurance from "@/components/home/OurServiceSectionInsurance";
import OurServiceSectionTax from "@/components/home/OurServiceSectionTax";

import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <MainSlider />
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      <AboutMeSection fromLanding={true} />
      <OurServiceSectionTax />
      <OurServiceSectionInsurance />
      {/* <OurClientSection />   */}
      {/* <ExperienceSection /> */}
    </>
  );
};

export default Home;
