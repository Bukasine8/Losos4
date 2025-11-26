import { TermsHeroSection } from "@/components/terms/TermsHeroSection";
import { TermsContentSection } from "@/components/terms/TermsContentSection";
import { TermsCTASection } from "@/components/terms/TermsCTASection";

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <TermsHeroSection />
            <TermsContentSection />
            <TermsCTASection />
        </div>
    );
}
