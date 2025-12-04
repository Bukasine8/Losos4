import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { ServicesTeaserSection } from "@/components/home/ServicesTeaserSection";

// Lazy load components below the fold
const ProjectsTeaserSection = dynamic(() => import("@/components/home/ProjectsTeaserSection").then(mod => mod.ProjectsTeaserSection), { ssr: true });
const InfiniteTestimonials = dynamic(() => import("@/components/ui/InfiniteTestimonials").then(mod => mod.InfiniteTestimonials), { ssr: true });
const CTASection = dynamic(() => import("@/components/home/CTASection").then(mod => mod.CTASection), { ssr: true });

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <ValuePropsSection />
            <ServicesTeaserSection />
            <ProjectsTeaserSection />
            <section className="py-20 bg-muted/10">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-display">What Our Clients Say</h2>
                    <InfiniteTestimonials speed="slow" />
                </div>
            </section>
            <CTASection />
        </div>
    );
}
