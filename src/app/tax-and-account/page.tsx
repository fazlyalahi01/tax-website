import TaxAccountHeaderSection from "@/components/services/tax-and-account/TaxAccountHeader";
import TaxServiceDetailsSection from "@/components/services/tax-and-account/TaxServiceDetails";
import TaxServiceOverview from "@/components/services/tax-and-account/TaxServiceOverview";
import { siteConfig } from "@/config/site";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: siteConfig.metadata.taxAndAccount,
    description: siteConfig.metadata.description    
}

const TaxAndAccount = () => {
    return (
        <>
            <TaxAccountHeaderSection />
            <TaxServiceOverview />
            <TaxServiceDetailsSection />
        </>
    );
}
export default TaxAndAccount;