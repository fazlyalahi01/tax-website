import { IService } from "@/interface/service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TServiceDetailsProps = {
  services: IService[];
};
const ServiceDetails: React.FC<TServiceDetailsProps> = ({ services }) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="uppercase text-primary font-semibold pb-4">
            ✵ Our Services
          </p>
          <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1">
            What We Provide?
          </h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow overflow-hidden md:flex md:gap-3"
            >
              <Image
                className="h-56 w-full object-cover"
                height={500}
                width={700}
                src={service.imageUrl}
                alt={service.title}
              />
              <div className="p-2">
                <h3 className="text-lg font-bold text-title">
                  {service.title}
                </h3>
                <p className="mt-4 text-description">
                  {service.description.slice(0, 200)}...
                </p>
                <Link
                  href={`/service/${service.id}`}
                  className="mt-4 inline-block text-primary duration-500 hover:text-blue-600 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
