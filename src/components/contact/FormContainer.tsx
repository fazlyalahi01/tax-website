'use client'
import Image from 'next/image';
import React from 'react';
import { Input } from '../ui/input';
import ContactForm from './ContactForm';

const FormContainer: React.FC = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };
        console.log(data);
    }
    return (
        <div className="bg-lite pt-16 overflow-hidden">
            <div className="container-x">
                <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1 text-center">Get a free consultation</h1>
                <div className="md:flex items-center justify-between gap-8 md:p-12 ">
                    <div className="relative">
                        <Image src="/images/contact-thumb.png" width={800} height={800} alt="hero thumb" className="h-auto max-w-sm rounded" />
                    </div>
                    <div className="space-y-6  pt-4 pb-8 bg-white p-6 rounded-lg shadow-md w-full mt-4 mb-8">
                        <h2 className="text-2xl font-semibold mb-6">Make an appointment</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
