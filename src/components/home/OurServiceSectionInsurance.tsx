import Image from 'next/image';
import React from 'react';

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
                    <p className="uppercase text-primary font-semibold pb-4">✵ Our Service</p>
                    <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1">Insurance Services</h1>
                </div>
                <div className="grid gap-8 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow overflow-hidden md:flex">
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-title">{service.title}</h3>
                                <p className="mt-4 text-description">{service.description}</p>
                                <a href="#" className="mt-4 inline-block text-primary duration-500 hover:text-blue-600 font-semibold text-sm">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServiceSectionInsurance;
