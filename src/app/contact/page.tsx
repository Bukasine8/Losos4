import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactFAQSection } from "@/components/contact/ContactFAQSection";
import { ContactCTASection } from "@/components/contact/ContactCTASection";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ContactHeroSection />
            <ContactFormSection />
            <ContactFAQSection />
            <ContactCTASection />
        </div>
    );
}
