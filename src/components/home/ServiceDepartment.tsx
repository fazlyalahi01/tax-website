import { IService } from "@/interface/service";
import ServiceCard from "./ServiceCard";

type TServiceDepartmentProps = {
  title: string;
  data: IService[];
};
const ServiceDepartment = ({ title, data }: TServiceDepartmentProps) => {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="md:text-4xl text-3xl font-extrabold text-title pb-1">
          {title}
        </h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {data?.map((item) => (
          <ServiceCard key={item.id} serviceInfo={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceDepartment;
