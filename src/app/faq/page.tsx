import { FAQHeroSection } from "@/components/faq/FAQHeroSection";
import { FAQAccordionSection } from "@/components/faq/FAQAccordionSection";
import { FAQCTASection } from "@/components/faq/FAQCTASection";

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <FAQHeroSection />
            <FAQAccordionSection />
            <FAQCTASection />
        </div>
    );
}
