import ServiceDetails from "@/components/services/ServiceDetails";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceOverview from "@/components/services/ServiceOverview";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.metadata.taxAndAccount,
  description: siteConfig.metadata.description,
};

const TaxAndAccounting = () => {
  const taxAndAccountingServices = services.filter(
    (service) => service.category === "tax and accounting"
  );
  return (
    <>
      <ServiceHeader
        title="Tax & Account"
        bgImageUrl="/images/about-us-banner.png"
        breadcrumb={{ title: "Home", path: "/" }}
      />
      <ServiceOverview
        title="Tax and Account Services"
        description="Far far away, beqhind the woerd mountqeains, far from the
                countrites Vokatlia and Consonantia, there live the blind texts.
                Separateed they in the Boqokmarksgrove behind the word
                mouhntains the Semantics."
        thumbImageUrl="/images/tax-account-overview.png"
      />
      <ServiceDetails services={taxAndAccountingServices} />
    </>
  );
};
export default TaxAndAccounting;
