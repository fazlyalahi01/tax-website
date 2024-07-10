import ServiceHeader from "@/components/services/ServiceHeader";
import React from "react";

const RealStatePage: React.FC = () => {
  return (
    <>
      <ServiceHeader
        title="Real Estate Services"
        bgImageUrl="/images/new_york_city_3.jpg"
        breadcrumb={{ title: "Home", path: "/" }}
      />
    </>
  );
};

export default RealStatePage;
