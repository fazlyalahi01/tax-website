import { IService } from "@/interface/service";
import Link from "next/link";

const ServiceCard = ({ serviceInfo }: { serviceInfo: IService }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden  md:flex">
      <div className="p-6">
        <h3 className="text-primary font-bold text-xl">{serviceInfo.title}</h3>
        <p className="mt-4 text-description text-justify">
          {serviceInfo.description.slice(0, 300)}...
        </p>
        <Link
          href={`/service/${serviceInfo.id}`}
          className="mt-4 inline-block text-primary duration-500 hover:text-blue-600 font-semibold text-sm border rounded-full px-4 py-2 bg-blue-50"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
