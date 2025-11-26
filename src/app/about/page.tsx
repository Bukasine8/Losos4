import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CompanyOverviewSection } from "@/components/about/CompanyOverviewSection";
import { MissionVisionValuesSection } from "@/components/about/MissionVisionValuesSection";
import { AboutCertificationsSection } from "@/components/about/AboutCertificationsSection";
import { AwardsSection } from "@/components/about/AwardsSection";
import { TeamSection } from "@/components/about/TeamSection";
import { AboutCTASection } from "@/components/about/AboutCTASection";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHeroSection />
            <CompanyOverviewSection />
            <MissionVisionValuesSection />
            <AboutCertificationsSection />
            <AwardsSection />
            <TeamSection />
            <AboutCTASection />
        </div>
    );
}
