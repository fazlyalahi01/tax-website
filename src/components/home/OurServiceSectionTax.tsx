import Image from 'next/image';
import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
    {
        title: 'Individual Income Tax',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Business Income Tax',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Tax Planning',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'New Business Setup',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Payroll Service',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Sales Tax Service',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'IRS Representation',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Audits, Review and Compilation',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Notary Public',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
];

const OurServiceSectionTax: React.FC = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="uppercase text-primary font-semibold pb-4">✵ Our Service</p>
                    <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1">Tax and Accounting</h1>
                </div>
                <div className="grid gap-8 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServiceSectionTax;
