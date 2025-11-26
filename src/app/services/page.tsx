import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesListingSection } from "@/components/services/ServicesListingSection";
import { FeaturedServiceSection } from "@/components/services/FeaturedServiceSection";
import { ServicesValueSection } from "@/components/services/ServicesValueSection";
import { ServicesFAQSection } from "@/components/services/ServicesFAQSection";
import { ServicesCTASection } from "@/components/services/ServicesCTASection";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ServicesHeroSection />
            <ServicesListingSection />
            <FeaturedServiceSection />
            <ServicesValueSection />
            <ServicesFAQSection />
            <ServicesCTASection />
        </div>
    );
}
