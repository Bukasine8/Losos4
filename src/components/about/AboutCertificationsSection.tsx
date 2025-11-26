import { BadgeCheck, Award, FileCheck } from "lucide-react";

const certifications = [
    {
        icon: BadgeCheck,
        title: "COREN Registered Firm",
        subtitle: "Council for the Regulation of Engineering in Nigeria",
        detail: "Reg. No: EF.12345",
    },
    {
        icon: FileCheck,
        title: "Corporate Affairs Commission",
        subtitle: "Incorporated Company",
        detail: "RC: 123456",
    },
    {
        icon: Award,
        title: "NSE Corporate Member",
        subtitle: "Nigerian Society of Engineers",
        detail: "Membership No: C00123",
    },
    {
        icon: BadgeCheck,
        title: "ISO 9001:2015",
        subtitle: "Quality Management System",
        detail: "Certified",
    },
];

export function AboutCertificationsSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Certifications & Registrations</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We operate with full regulatory compliance and maintain the highest professional standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-background p-6 rounded-xl border flex flex-col items-center text-center hover:border-primary/50 transition-colors"
                        >
                            <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-4">
                                <cert.icon className="h-8 w-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{cert.subtitle}</p>
                            <div className="mt-auto pt-4 border-t w-full">
                                <span className="font-mono text-sm font-medium text-primary bg-primary/5 px-2 py-1 rounded">
                                    {cert.detail}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
