import { services } from "@/data/services";
import Image from "next/image";

const ServicePage = ({ params: { id } }: { params: { id: string } }) => {
  const serviceInfo = services.find((service) => service.id === id);

  return (
    <div className="container-x py-16">
      {serviceInfo ? (
        <div className="flex gap-10">
          <div className="w-4/12">
            <Image
              src="/images/real_estate_renting.jpg"
              alt="Tax & Accounting"
              width={600}
              height={200}
            />
          </div>
          <div className="w-8/12">
            <h2 className="text-gray-800 font-bold text-3xl mb-6">
              {serviceInfo.title}
            </h2>
            <p>{serviceInfo.description}</p>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-red-500">No services found</h2>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
