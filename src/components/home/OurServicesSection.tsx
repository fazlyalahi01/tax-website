import { services } from "@/data/services";
import ServiceDepartment from "./ServiceDepartment";

const OurServicesSection = () => {
  const insuranceServices = services.filter(
    (service) => service.category === "insurance"
  );
  const taxAndAccountingServices = services.filter(
    (service) => service.category === "tax and accounting"
  );
  const realEstateServices = services.filter(
    (service) => service.category === "real estate"
  );
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="uppercase text-primary font-semibold">✵ Our Services</p>
        </div>
        <div>
          <ServiceDepartment
            title="Tax &amp; Accounting"
            data={taxAndAccountingServices}
          />
          <ServiceDepartment title="Insurance" data={insuranceServices} />
          <ServiceDepartment title="Real Estate" data={realEstateServices} />
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
