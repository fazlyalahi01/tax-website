import AboutHeaderSection from '@/components/about/AboutHeader';
import AboutMeSection from '@/components/about/AboutMeSection';
import TeamSection from '@/components/about/TeamSeaction';
import OurClientSection from '@/components/home/OurClientSection';
import React from 'react';

const AboutUsPage: React.FC = () => {
    return (
        <>
            <AboutHeaderSection />
            <AboutMeSection />
            <TeamSection />
            {/* <OurClientSection /> */}
        </>
    );
};

export default AboutUsPage;