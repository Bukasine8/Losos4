import { Target, Eye, Heart } from "lucide-react";

const items = [
    {
        icon: Target,
        title: "Our Mission",
        description: "To provide innovative, safe, and sustainable engineering solutions that exceed client expectations and contribute to national development.",
    },
    {
        icon: Eye,
        title: "Our Vision",
        description: "To be the leading engineering consultancy firm in West Africa, known for technical excellence and integrity.",
    },
    {
        icon: Heart,
        title: "Our Values",
        description: "Integrity, Safety, Innovation, and Client-Centricity are the core pillars that guide every decision and design we make.",
    },
];

export function MissionVisionValuesSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-xl bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                        >
                            <div className="inline-flex p-4 rounded-full bg-primary/5 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <item.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
