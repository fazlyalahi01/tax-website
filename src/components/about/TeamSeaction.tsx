import Image from 'next/image';
import React from 'react';

const TeamSection: React.FC = () => {
    const teamMembers = [
        {
            name: 'Thomas M. Wilso',
            designation: 'UX/UI Designer',
            imageUrl: '/images/team1.png',
        },
        {
            name: 'Tiffany Enifer',
            designation: 'Web Developer',
            imageUrl: '/images/team2.png',
        },
        {
            name: 'Robert J. Ryan',
            designation: 'Backend Developer',
            imageUrl: '/images/team3.png',
        },
        {
            name: 'Anna-Marry Scott',
            designation: 'SEO Marketing',
            imageUrl: '/images/team4.png',
        },
    ];
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="uppercase text-primary font-semibold pb-4">✵ Our Team</p>
                    <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1">Experienced Team Members</h1>
                </div>
                <div className="grid gap-8 md:grid-cols-4">
                    {teamMembers.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow overflow-hidden ">
                            <Image className="h-64 w-full object-fill" height={400} width={600} src={item.imageUrl} alt={item.name} />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-title">{item.name}</h3>
                                <p className="mt-4 text-description">{item.designation}</p>
                                <a href="#" className="mt-4 inline-block text-primary duration-500 hover:text-blue-600 font-semibold">Contact →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;