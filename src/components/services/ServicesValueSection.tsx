import { CheckCircle2, Award, Users, Scale } from "lucide-react";

const values = [
    {
        icon: Award,
        title: "Certified Expertise",
        description: "Our team consists of COREN-registered engineers with years of industry experience.",
    },
    {
        icon: Users,
        title: "Multi-Disciplinary",
        description: "We bring together mechanical, electrical, and safety experts under one roof.",
    },
    {
        icon: Scale,
        title: "Regulatory Compliance",
        description: "Strict adherence to Nigerian building codes and international safety standards.",
    },
    {
        icon: CheckCircle2,
        title: "Quality Assurance",
        description: "Rigorous quality control processes to ensure error-free deliverables.",
    },
];

export function ServicesValueSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Losos4?</h2>
                    <p className="text-muted-foreground text-lg">
                        We combine technical excellence with a client-first approach to deliver superior engineering outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                                <value.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                            <p className="text-muted-foreground text-sm">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
