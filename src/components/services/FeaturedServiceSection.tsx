import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedServiceSection() {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container">
                <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-2">
                            Flagship Service
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Integrated MEP Design Solutions
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Our Mechanical, Electrical, and Plumbing (MEP) design services are the backbone of modern building infrastructure.
                            We utilize advanced BIM technology to coordinate complex systems, minimizing clashes and optimizing performance
                            before construction even begins.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto py-6">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-accent" />
                                <span>Clash Detection & Resolution</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-accent" />
                                <span>Energy Efficiency Modeling</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-accent" />
                                <span>Sustainable Systems Design</span>
                            </div>
                        </div>
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                            <Link href="/contact">Contact us about MEP Design</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
