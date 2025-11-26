import { ProjectsHeroSection } from "@/components/projects/ProjectsHeroSection";
import { ProjectsGallerySection } from "@/components/projects/ProjectsGallerySection";
import { FeaturedProjectSection } from "@/components/projects/FeaturedProjectSection";
import { TestimonialsSection } from "@/components/projects/TestimonialsSection";
import { ProjectsCTASection } from "@/components/projects/ProjectsCTASection";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ProjectsHeroSection />
            <ProjectsGallerySection />
            <FeaturedProjectSection />
            <TestimonialsSection />
            <ProjectsCTASection />
        </div>
    );
}
