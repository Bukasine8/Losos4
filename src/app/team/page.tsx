import { TeamHeroSection } from "@/components/team/TeamHeroSection";
import { TeamGridSection } from "@/components/team/TeamGridSection";
import { TeamValuesSection } from "@/components/team/TeamValuesSection";
import { TeamCTASection } from "@/components/team/TeamCTASection";

export default function TeamPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <TeamHeroSection />
            <TeamGridSection />
            <TeamValuesSection />
            <TeamCTASection />
        </div>
    );
}
