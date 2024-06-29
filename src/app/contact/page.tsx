import ContactHeaderSection from '@/components/contact/ContactHeader';
import FormContainer from '@/components/contact/FormContainer';
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <>
            <ContactHeaderSection />
            <FormContainer />
        </>
    );
};

export default ContactPage;