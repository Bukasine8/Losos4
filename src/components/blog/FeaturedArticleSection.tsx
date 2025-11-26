import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

export function FeaturedArticleSection() {
    return (
        <section className="py-12 bg-background">
            <div className="container">
                <div className="group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row">
                        {/* Image Side */}
                        <div className="w-full lg:w-3/5 relative min-h-[300px] lg:min-h-[400px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-card">
                            <div className="flex items-center gap-2 text-sm text-accent font-bold mb-4 uppercase tracking-wider">
                                <span className="bg-accent/10 px-2 py-1 rounded">Featured</span>
                                <span>•</span>
                                <span>Construction Safety</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                The Future of Fire Safety in High-Rise Buildings
                            </h2>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                As urbanization accelerates, the demand for high-rise structures grows.
                                Explore the latest innovations in automated fire suppression systems and
                                how they are reshaping safety standards in modern skyscrapers.
                            </p>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                                <div className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    <span>Engr. David Okon</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>Nov 15, 2023</span>
                                </div>
                            </div>

                            <Button asChild className="w-fit bg-primary hover:bg-primary/90">
                                <Link href="/blog/future-of-fire-safety">Read Full Article</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
