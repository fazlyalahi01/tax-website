import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

type ServiceHeaderProps = {
  bgImageUrl: string;
  title: string;
  breadcrumb?: { title: string; path: string };
};
const ServiceHeader = ({
  bgImageUrl,
  title,
  breadcrumb,
}: ServiceHeaderProps) => {
  return (
    <header className="relative  md:h-[400px] h-[300px]">
      <Image
        src={bgImageUrl}
        alt="Background Image"
        layout="fill"
        className="h-full w-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-primary opacity-70"></div>
      <div className="relative z-10  text-white  top-1/3 container-x">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-primary font-bold">
          {title}
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumb?.path}>
                {breadcrumb?.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default ServiceHeader;
