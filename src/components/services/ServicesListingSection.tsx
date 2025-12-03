import Link from "next/link";
import { Settings, Zap, Flame, ClipboardList, Briefcase, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { supabaseBrowser } from "@/lib/supabase-browser";

const iconMap: Record<string, any> = {
    Settings,
    Zap,
    Flame,
    ClipboardList,
    Briefcase,
    Wrench,
};

async function getServices() {
    const { data } = await supabaseBrowser
        .from("services")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

    return data || [];
}

export async function ServicesListingSection() {
    const services = await getServices();

    return (
        <section className="py-20 bg-background">
            <div className="container space-y-24">
                {services.map((service, index) => {
                    const Icon = iconMap[service.icon_name || "Settings"] || Settings;

                    return (
                        <div
                            key={service.id}
                            className={cn(
                                "flex flex-col gap-8 items-center",
                                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            )}
                        >
                            {/* Icon/Image Block */}
                            <div className="w-full lg:w-1/2 flex justify-center">
                                {service.image_url ? (
                                    <div className="relative h-64 w-full md:h-80 rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                                        <img
                                            src={service.image_url}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                                    </div>
                                ) : (
                                    <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-2xl bg-muted flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 duration-300">
                                        <Icon className="h-32 w-32 text-primary/80" />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                                    </div>
                                )}
                            </div>

                            {/* Text Block */}
                            <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {service.short_description}
                                </p>
                                <Button asChild variant="outline" className="mt-4 hover:bg-primary hover:text-primary-foreground transition-colors">
                                    <Link href={`/services/${service.slug}`}>Learn More</Link>
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
