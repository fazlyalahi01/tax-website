import AboutMeSection from "@/components/about/AboutMeSection";
import MainSlider from "@/components/common/slider/MainSlider";
import OurServicesSection from "@/components/home/OurServicesSection";

import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <MainSlider />
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      <AboutMeSection fromLanding={true} />
      <OurServicesSection />
      {/* <OurServiceSectionTax /> */}
      {/* <OurServiceSectionInsurance /> */}
      {/* <OurClientSection />   */}
      {/* <ExperienceSection /> */}
    </>
  );
};

export default Home;
