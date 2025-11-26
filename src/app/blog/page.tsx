import { BlogHeroSection } from "@/components/blog/BlogHeroSection";
import { FeaturedArticleSection } from "@/components/blog/FeaturedArticleSection";
import { BlogListingSection } from "@/components/blog/BlogListingSection";
import { BlogNewsletterSection } from "@/components/blog/BlogNewsletterSection";

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <BlogHeroSection />
            <FeaturedArticleSection />
            <BlogListingSection />
            <BlogNewsletterSection />
        </div>
    );
}
