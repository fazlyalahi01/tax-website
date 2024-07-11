import ServiceDetails from "@/components/services/ServiceDetails";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceOverview from "@/components/services/ServiceOverview";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { taxAndAccountServices } from "../data/taxAndAccountServices";

export const metadata: Metadata = {
  title: siteConfig.metadata.taxAndAccount,
  description: siteConfig.metadata.description,
};

const TaxAndAccount = () => {
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
      <ServiceDetails services={taxAndAccountServices} />
    </>
  );
};
export default TaxAndAccount;
