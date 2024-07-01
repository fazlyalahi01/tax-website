import Image from 'next/image';
import React from 'react';

const services = [
    {
        title: 'Individual Income Tax',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
        imageUrl: '/images/service1.png',
    },
    {
        title: 'Business Income Tax',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
        imageUrl: '/images/service2.png',
    },
    {
        title: 'Tax Planning',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
        imageUrl: '/images/service3.png',
    },
    {
        title: 'New Business Setup',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
        imageUrl: '/images/service4.png',
    },
    {
        title: 'Payroll Service',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
        imageUrl: '/images/service4.png',
    },
    {
        title: 'Sales Tax Service',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
        imageUrl: '/images/service4.png',
    },
    {
        title: 'IRS Representation',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
        imageUrl: '/images/service4.png',
    },
    {
        title: 'Audits, Review and Compilation',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
        imageUrl: '/images/service4.png',
    },
    {
        title: 'Notary Public',
        description: 'Aenean harerta quam adipiscing senecthus penatibus aliquet eget sedne.',
        imageUrl: '/images/service4.png',
    },
];

const TaxServiceDetailsSection: React.FC = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="uppercase text-primary font-semibold pb-4">✵ Our Service</p>
                    <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1">Giving You Financial Power</h1>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow overflow-hidden md:flex">
                            <Image className="h-56 w-full object-cover" height={400} width={600} src={service.imageUrl} alt={service.title} />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-title">{service.title}</h3>
                                <p className="mt-4 text-description">{service.description}</p>
                                <a href="#" className="mt-4 inline-block text-primary duration-500 hover:text-blue-600 font-semibold">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TaxServiceDetailsSection;
