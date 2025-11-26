import { Trophy } from "lucide-react";

const awards = [
    {
        year: "2023",
        title: "Excellence in Engineering Design",
        category: "Infrastructure",
        project: "Lekki Deep Sea Port",
        organization: "Nigerian Society of Engineers",
    },
    {
        year: "2022",
        title: "Best Safety Compliance Firm",
        category: "Safety",
        project: "National Industrial Awards",
        organization: "Safety Professionals of Nigeria",
    },
    {
        year: "2021",
        title: "Innovative Project Management",
        category: "Management",
        project: "Abuja Mall Renovation",
        organization: "Project Management Institute (Nigeria)",
    },
    {
        year: "2020",
        title: "Green Building Consultant of the Year",
        category: "Sustainability",
        project: "Eco-Friendly Office Complex",
        organization: "Green Building Council Nigeria",
    },
    {
        year: "2019",
        title: "Outstanding Electrical Design",
        category: "Electrical",
        project: "Mainland Power Grid Expansion",
        organization: "Association of Consulting Engineers",
    },
];

export function AwardsGridSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="group relative bg-card rounded-xl border p-8 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Trophy className="h-24 w-24 text-accent" />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                                    {award.year}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {award.title}
                                </h3>
                                <div className="text-sm text-muted-foreground mb-4">
                                    {award.organization}
                                </div>

                                <div className="pt-4 border-t border-border/50 flex flex-col gap-1 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Category:</span>
                                        <span className="font-medium">{award.category}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Project:</span>
                                        <span className="font-medium text-right">{award.project}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
