'use client'
import Image from 'next/image';
import React from 'react';

const OurClientSection: React.FC = () => {

    return (
        <div className=" bg-lite py-12">
            <div className="container-x grid grid-cols-6">
                <div className="px-2">
                    <Image src={"/images/brand1.png"} height={100} width={100} alt='hero slider 1' />
                </div>
                <div className="px-2">
                    <Image src={"/images/brand2.png"} height={100} width={100} alt='hero slider 2' />
                </div>
                <div className="px-2">
                    <Image src={"/images/brand3.png"} height={100} width={100} alt='hero slider 3' />
                </div>
                <div className="px-2">
                    <Image src={"/images/brand4.png"} height={100} width={100} alt='hero slider 4' />
                </div>
                <div className="px-2">
                    <Image src={"/images/brand5.png"} height={100} width={100} alt='hero slider 5' />
                </div>
                <div className="px-2">
                    <Image src={"/images/brand4.png"} height={100} width={100} alt='hero slider 4' />
                </div>
            </div>
        </div>
    );
};

export default OurClientSection;