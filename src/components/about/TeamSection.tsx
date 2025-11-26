import { Linkedin } from "lucide-react";
import Link from "next/link";

const team = [
    {
        name: "Engr. David Okon",
        role: "Principal Partner / CEO",
        bio: "Over 20 years of experience in structural and mechanical engineering. Fellow of the NSE and COREN registered.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
        creds: ["FNSE", "COREN", "PMP"],
    },
    {
        name: "Engr. Sarah Adebayo",
        role: "Head of Electrical Design",
        bio: "Specializes in high-voltage power distribution and smart building systems. 15+ years of industry leadership.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
        creds: ["MNSE", "COREN", "IEEE"],
    },
    {
        name: "Michael Johnson",
        role: "Lead Project Manager",
        bio: "Expert in construction management and cost control. Delivered over 50 successful commercial projects.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
        creds: ["PMP", "PRINCE2"],
    },
];

export function TeamSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Meet Our Experts</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our team of dedicated professionals brings decades of combined experience to every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-background rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${member.image}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-colors"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                <div className="text-sm font-medium text-accent mb-3">{member.role}</div>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {member.bio}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {member.creds.map((cred, i) => (
                                        <span key={i} className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded">
                                            {cred}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
