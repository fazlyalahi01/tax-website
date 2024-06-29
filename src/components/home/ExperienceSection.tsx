import Image from 'next/image';
import React from 'react';

const ExperienceSection: React.FC = () => {
    return (
        <div className="py-16">
            <div className="container-x mx-auto flex flex-col md:flex-row items-center  md:gap-8 justify-center bg-lite shadow-md rounded-md">
                <div className=" flex justify-center md:justify-start">
                    <Image
                        src="/images/counter-thumb.png"
                        width={400}
                        height={400}
                        alt="Happy person pointing"
                        className="object-contain"
                    />
                </div>
                <div className=" bg-blue-500 text-white p-12 rounded-lg shadow-sm  ">
                    <h2 className="md:text-4xl text-3xl font-extrabold pb-4">More Than 25 Years Experience.</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-tranparent text-white p-6 rounded-lg shadow-md text-center">
                            <p className="text-3xl font-bold">355k+</p>
                            <p className="text-sm">Vehicles Repaired</p>
                        </div>
                        <div className="bg-tranparent text-white p-6 rounded-lg shadow-md text-center">
                            <p className="text-3xl font-bold">355k+</p>
                            <p className="text-sm">Vehicles Repaired</p>
                        </div>
                        <div className="bg-tranparent text-white p-6 rounded-lg shadow-md text-center">
                            <p className="text-3xl font-bold">355k+</p>
                            <p className="text-sm">Vehicles Repaired</p>
                        </div>
                        <div className="bg-tranparent text-white p-6 rounded-lg shadow-md text-center">
                            <p className="text-3xl font-bold">355k+</p>
                            <p className="text-sm">Vehicles Repaired</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
