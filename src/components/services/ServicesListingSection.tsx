import Link from "next/link";
import { Settings, Zap, Flame, ClipboardList, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
    {
        icon: Settings,
        title: "Mechanical Design",
        description: "Comprehensive mechanical engineering solutions including HVAC system design, plumbing layouts, and equipment selection. We ensure optimal performance and energy efficiency for your building's mechanical systems.",
        href: "/services/mechanical",
    },
    {
        icon: Zap,
        title: "Electrical Design",
        description: "Expert electrical power distribution, lighting design, and low voltage system integration. Our designs prioritize safety, reliability, and future-proofing for modern infrastructure needs.",
        href: "/services/electrical",
    },
    {
        icon: Flame,
        title: "Fire Safety & Protection",
        description: "End-to-end fire safety management including risk assessments, fire alarm system design, and evacuation planning. We help you navigate complex regulations to ensure full compliance and safety.",
        href: "/services/fire-safety",
    },
    {
        icon: ClipboardList,
        title: "Project Management",
        description: "Dedicated project oversight from conception to completion. We manage timelines, budgets, and quality assurance to deliver successful engineering projects with minimal risk.",
        href: "/services/project-management",
    },
    {
        icon: Briefcase,
        title: "Consultancy & Compliance",
        description: "Strategic engineering consultancy and regulatory compliance audits. We provide expert guidance on COREN standards, building codes, and sustainability best practices.",
        href: "/services/consulting",
    },
];

export function ServicesListingSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container space-y-24">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex flex-col gap-8 items-center",
                            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        )}
                    >
                        {/* Icon/Image Block */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-2xl bg-muted flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 duration-300">
                                <service.icon className="h-32 w-32 text-primary/80" />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                            </div>
                        </div>

                        {/* Text Block */}
                        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                            <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                            <Button asChild variant="outline" className="mt-4 hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Link href={service.href}>Learn More</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
