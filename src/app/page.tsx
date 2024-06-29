import Footer from '@/components/common/Footer';
import StartWithUs from '@/components/common/StartWithUs';
import AboutSection from '@/components/home/AboutSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import HeroSection from '@/components/home/HeroSection';
import OurClientSection from '@/components/home/OurClientSection';
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
      <StartWithUs />
      {/* <OurClientSection />   */}
      {/* <ExperienceSection /> */}

    </ >
  );
};

export default Home;