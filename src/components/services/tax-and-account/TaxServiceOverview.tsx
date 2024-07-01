import OutlineButton from '@/components/ui/OutlinedButton';
import Image from 'next/image';
import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';


const TaxServiceOverview: React.FC = () => {
    return (
        <div className="bg-lite pt-8 overflow-hidden">
            <div className='container-x '>
                <div className="md:flex items-center gap-8  md:p-12">
                    <div className="relative ">
                        <Image src={"/images/tax-account-overview.png"} width={800} height={800} alt="hero thumb" className="h-auto max-w-sm" />
                        <div className='absolute bottom-0 right-0 bg-primary p-4  shadow-lg  rounded-full m-4'>
                            <FaPhoneVolume className="md:text-xl text-xl grow-squeeze" color="white" />
                        </div>
                    </div>

                    <div className="space-y-6 max-w-xl pt-4 pb-6">
                        <div className="text-blue-900">
                            <p className="uppercase text-primary font-semibold pb-4">✵ Service Overview</p>
                            <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1">Tax and Account Service</h1>
                            <p className="text-base md:pt-4 pt-2">
                                Far far away, beqhind the woerd mountqeains, far from the countrites Vokatlia and Consonantia, there live the blind texts. Separateed they in the Boqokmarksgrove behind the word mouhntains the Semantics.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <OutlineButton> Request a Quote →</OutlineButton>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TaxServiceOverview;