import ServiceDetails from "@/components/services/ServiceDetails";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceOverview from "@/components/services/ServiceOverview";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import React from "react";
import { insuranceServices } from "../data/insuranceServices";

export const metadata: Metadata = {
  title: siteConfig.metadata.insurance,
  description: siteConfig.metadata.description,
};

const InsurancePage: React.FC = () => {
  return (
    <>
      <ServiceHeader
        title="Insurance"
        bgImageUrl="/images/insurance-service-bg.png"
        breadcrumb={{ title: "Home", path: "/" }}
      />
      <ServiceOverview
        title="Insurance Consultation Services"
        description="Far far away, beqhind the woerd mountqeains, far from the countrites Vokatlia and Consonantia, there live the blind texts. Separateed they in the Boqokmarksgrove behind the word mouhntains the Semantics."
        thumbImageUrl="/images/insurance-service-bg.png"
      />
      <ServiceDetails services={insuranceServices} />
    </>
  );
};

export default InsurancePage;
