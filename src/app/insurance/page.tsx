import InsuranceHeader from '@/components/services/insurance/InsuranceHeader';
import InsuranceServiceDetails from '@/components/services/insurance/InsuranceServiceDetails';
import InsuranceServiceOverview from '@/components/services/insurance/InsuranceServiceOverview';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: siteConfig.metadata.insurance,
    description: siteConfig.metadata.description    
}

const InsurancePage: React.FC = () => {
    return (
        <>
            <InsuranceHeader />
            <InsuranceServiceOverview />
            <InsuranceServiceDetails />
        </>
    );
};

export default InsurancePage;