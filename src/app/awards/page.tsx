import { AwardsHeroSection } from "@/components/awards/AwardsHeroSection";
import { AwardsGridSection } from "@/components/awards/AwardsGridSection";
import { FeaturedRecognitionSection } from "@/components/awards/FeaturedRecognitionSection";
import { AwardsCTASection } from "@/components/awards/AwardsCTASection";

export default function AwardsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AwardsHeroSection />
            <AwardsGridSection />
            <FeaturedRecognitionSection />
            <AwardsCTASection />
        </div>
    );
}
