import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function FeaturedProjectSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[500px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                                    FEATURED PROJECT
                                </div>
                                <h3 className="text-2xl font-bold">Lekki Deep Sea Port Facility</h3>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Engineering a Landmark Infrastructure
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We provided comprehensive electrical and fire safety consultancy for one of Nigeria's most significant infrastructure projects.
                            Our team ensured robust power distribution for heavy machinery and implemented a state-of-the-art fire suppression system.
                        </p>

                        <div className="space-y-3 py-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="font-medium">Designed 50MW Power Distribution Network</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="font-medium">Integrated Automated Fire Detection System</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="font-medium">Zero Compliance Issues during Audit</span>
                            </div>
                        </div>

                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                            <Link href="/projects/lekki-port">View Full Case Study</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
