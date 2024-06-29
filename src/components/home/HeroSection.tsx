import Image from 'next/image';
import React from 'react';
import OutlineButton from '../ui/OutlinedButton';
import { AiOutlineDash } from 'react-icons/ai';
import { FiThumbsUp } from "react-icons/fi";
import { ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';


const HeroSection: React.FC = () => {
    return (
        <>
            <section className="relative flex bg-[url('/images/hero-bg.png')] bg-cover bg-no-repeat bg-center   md:pb-20 pb-8">
                <div className="container z-20 text-white ">
                    <p className="uppercase font-semibold pb-4">✵ WE’RE TEXT CONSULTANT</p>
                    <h1 className="md:text-7xl text-4xl leading-tight font-extrabold border-l-4 pl-4 border-gray-300 py-2">Expert <br />Financial Advisor.</h1>
                    <p className="text-base pt-4 max-w-2xl">
                        We aim at supporting companies in making informed and value maximizing decisions and pave their way.
                    </p>
                    <div className="pt-4">
                        <Link
                            href=""
                            className={cn(
                                buttonVariants({ variant: "outline", size: "lg", className: "hover:bg-white hover:text-primary transition duration-500" })
                            )}
                        >
                            See Intro
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroSection;