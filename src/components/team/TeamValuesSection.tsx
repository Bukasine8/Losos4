import { Users, Lightbulb, ShieldCheck, Handshake } from "lucide-react";

const values = [
    {
        icon: Users,
        title: "Collaboration",
        description: "We believe in the power of teamwork, fostering an environment where diverse ideas converge to create superior solutions.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We constantly push boundaries, adopting the latest technologies and methodologies to solve complex engineering challenges.",
    },
    {
        icon: ShieldCheck,
        title: "Integrity",
        description: "We uphold the highest ethical standards, ensuring transparency, honesty, and accountability in all our dealings.",
    },
    {
        icon: Handshake,
        title: "Client Focus",
        description: "Our clients' success is our priority. We listen, adapt, and deliver tailored solutions that meet their specific needs.",
    },
];

export function TeamValuesSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Culture & Values</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        The principles that drive our team and define our approach to engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 text-center"
                        >
                            <div className="inline-flex p-4 rounded-full bg-primary/5 text-primary mb-6">
                                <value.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
