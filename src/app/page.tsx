import AboutSection from '@/components/home/AboutSection';
import HeroSection from '@/components/home/HeroSection';
import OurServiceSectionInsurance from '@/components/home/OurServiceSectionInsurance';
import OurServiceSectionTax from '@/components/home/OurServiceSectionTax';

import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurServiceSectionTax />
      <OurServiceSectionInsurance />      
      {/* <OurClientSection />   */}
      {/* <ExperienceSection /> */}

    </ >
  );
};

export default Home;