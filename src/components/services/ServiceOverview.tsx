import OutlineButton from "@/components/ui/OutlinedButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CallButton from "../common/CallButton";

type TServiceOverviewProps = {
  thumbImageUrl: string;
  title: string;
  description: string;
};
const ServiceOverview: React.FC<TServiceOverviewProps> = ({
  thumbImageUrl,
  title,
  description,
}) => {
  return (
    <div className="bg-lite pt-8 overflow-hidden">
      <div className="container-x ">
        <div className="md:flex items-center gap-8  md:p-12">
          <div className="relative ">
            <Image
              src={thumbImageUrl}
              width={800}
              height={800}
              alt="hero thumb"
              className="h-auto max-w-sm"
            />
            <CallButton />
          </div>

          <div className="space-y-6 max-w-xl pt-4 pb-6">
            <div className="text-blue-900">
              <p className="uppercase text-primary font-semibold pb-4">
                ✵ Services Overview
              </p>
              <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1">
                {title}
              </h1>
              <p className="text-base md:pt-4 pt-2">{description}</p>
            </div>
            <Link href="/contact" className="flex gap-4">
              <OutlineButton> Request a Quote →</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
