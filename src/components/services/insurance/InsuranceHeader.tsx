import Image from 'next/image';
import React from 'react';

import { Slash } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const TaxAccountHeaderSection = () => {
    return (
        <header className="relative  md:h-[400px] h-[300px]">
            <Image
                src="/images/about-us-banner.png"
                alt="Background Image"
                layout="fill"
                className="h-full w-full object-cover brightness-50"

            />
            <div className="absolute inset-0 bg-primary opacity-70"></div>
            <div className="relative z-10  text-white  top-1/3 container-x">
                <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-primary font-bold">Insurance</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Insurance</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    );
};

export default TaxAccountHeaderSection;
