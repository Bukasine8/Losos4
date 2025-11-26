import { HeroSection } from "@/components/home/HeroSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { ServicesTeaserSection } from "@/components/home/ServicesTeaserSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ProjectsTeaserSection } from "@/components/home/ProjectsTeaserSection";
import { TestimonialsCarousel } from "@/components/ui/TestimonialsCarousel";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <ValuePropsSection />
            <ServicesTeaserSection />
            <CertificationsSection />
            <ProjectsTeaserSection />
            <TestimonialsCarousel />
            <CTASection />
        </div>
    );
}
