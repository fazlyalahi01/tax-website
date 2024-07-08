import Image from 'next/image';
import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
    {
        title: 'Auto Insurance',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Business Insurance',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Flood Insurance',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Rental Insurance',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
    {
        title: 'Homeowners Insurance',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
    },
];

const OurServiceSectionInsurance: React.FC = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="uppercase text-primary font-semibold pb-4">✵ Our Services</p>
                    <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1">Insurance Services</h1>
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

export default OurServiceSectionInsurance;
