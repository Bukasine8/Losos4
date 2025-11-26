const awards = [
    {
        year: "2023",
        title: "Excellence in Engineering Design",
        category: "Infrastructure",
        project: "Lekki Deep Sea Port",
    },
    {
        year: "2022",
        title: "Best Safety Compliance Firm",
        category: "Safety",
        project: "National Industrial Awards",
    },
    {
        year: "2021",
        title: "Innovative Project Management",
        category: "Management",
        project: "Abuja Mall Renovation",
    },
];

export function AwardsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognitions</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-xl border bg-card hover:border-accent transition-colors duration-300"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />
                            <div className="text-4xl font-bold text-muted-foreground/20 mb-4 group-hover:text-accent/20 transition-colors">
                                {award.year}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                <span className="font-medium text-primary">{award.category}</span>
                                <span>{award.project}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
