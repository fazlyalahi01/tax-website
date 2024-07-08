import AboutHeaderSection from '@/components/about/AboutHeader';
import AboutMeSection from '@/components/about/AboutMeSection';
import TeamSection from '@/components/about/TeamSeaction';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: siteConfig.metadata.about,
    description: siteConfig.metadata.description    
}
const AboutUsPage: React.FC = () => {

    return (
        <>
            <AboutHeaderSection />
            <AboutMeSection />
            {/* <TeamSection /> */}
            {/* <OurClientSection /> */}
        </>
    );
};

export default AboutUsPage;