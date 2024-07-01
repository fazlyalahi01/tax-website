import ContactHeaderSection from '@/components/contact/ContactHeader';
import FormContainer from '@/components/contact/FormContainer';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: siteConfig.metadata.contact,
    description: siteConfig.metadata.description
}

const ContactPage: React.FC = () => {
    return (
        <>
            <ContactHeaderSection />
            <FormContainer />
        </>
    );
};

export default ContactPage;