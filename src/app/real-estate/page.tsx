import ServiceDetails from "@/components/services/ServiceDetails";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceOverview from "@/components/services/ServiceOverview";
import React from "react";
import { realEstateServices } from "../data/realEstateServices";

const RealStatePage: React.FC = () => {
  return (
    <>
      <ServiceHeader
        title="Real Estate Services"
        bgImageUrl="/images/new_york_city_3.jpg"
        breadcrumb={{ title: "Home", path: "/" }}
      />
      <ServiceOverview
        title="We provide real estate related services"
        description="Looking to sell your home? Get a free estimate for your house before selling. We offer expert guidance and comprehensive services to ensure a smooth transaction. For first-time home buyers, we help to get the pre-approval, making your dream home purchase easier and stress-free. Contact us today!"
        thumbImageUrl="/images/real_estate_1.jpg"
      />
      <ServiceDetails services={realEstateServices} />
    </>
  );
};

export default RealStatePage;
