import ProviderHeroSection from '../../components/ProviderHeroSection';
import ProviderBenefits from '../../components/ProviderBenefits';
import SafetySecurity from '../../components/SafetySecurity';
import ProviderFAQs from '../../components/ProviderFAQs';

export default function ServiceProviderPage() {
    return (
        <>
            <div>
                <ProviderHeroSection />
                <ProviderBenefits />
                <SafetySecurity />
                <ProviderFAQs />
            </div>
        </>
    );
}