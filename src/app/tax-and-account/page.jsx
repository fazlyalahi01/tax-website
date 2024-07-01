import TaxAccountHeaderSection from "@/components/services/tax-and-account/TaxAccountHeader";
import TaxServiceDetailsSection from "@/components/services/tax-and-account/TaxServiceDetails";
import TaxServiceOverview from "@/components/services/tax-and-account/TaxServiceOverview";

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