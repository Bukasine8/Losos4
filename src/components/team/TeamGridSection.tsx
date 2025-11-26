"use client";

import { Linkedin, Mail, Award } from "lucide-react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const team = [
    {
        name: "Engr. David Okon",
        role: "Principal Partner / CEO",
        bio: "Over 20 years of experience in structural and mechanical engineering. Fellow of the NSE and COREN registered. David has led major infrastructure projects across West Africa.",
        fullBio: "Engr. David Okon is a seasoned engineering veteran with over two decades of experience in the construction and infrastructure sectors. As the Principal Partner and CEO of Losos4, he oversees the firm's strategic direction and major project delivery. His expertise spans structural integrity analysis, mechanical systems design, and large-scale project management. He is a Fellow of the Nigerian Society of Engineers (FNSE) and a registered member of COREN.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
        creds: ["FNSE", "COREN", "PMP"],
        linkedin: "#",
        email: "david.okon@losos4.com",
    },
    {
        name: "Engr. Sarah Adebayo",
        role: "Head of Electrical Design",
        bio: "Specializes in high-voltage power distribution and smart building systems. 15+ years of industry leadership.",
        fullBio: "Engr. Sarah Adebayo leads the Electrical Design department at Losos4. With a Master's degree in Power Systems Engineering, she brings deep technical knowledge to complex electrical infrastructure projects. Her portfolio includes grid modernization projects, smart office complexes, and industrial power distribution networks. She is passionate about energy efficiency and sustainable design practices.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
        creds: ["MNSE", "COREN", "IEEE"],
        linkedin: "#",
        email: "sarah.adebayo@losos4.com",
    },
    {
        name: "Michael Johnson",
        role: "Lead Project Manager",
        bio: "Expert in construction management and cost control. Delivered over 50 successful commercial projects.",
        fullBio: "Michael Johnson is a certified Project Management Professional (PMP) with a track record of delivering high-stakes projects on time and within budget. His background in civil engineering and construction management allows him to bridge the gap between technical teams and stakeholders effectively. He is known for his rigorous quality control standards and risk management strategies.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
        creds: ["PMP", "PRINCE2"],
        linkedin: "#",
        email: "michael.johnson@losos4.com",
    },
    {
        name: "Engr. Musa Ibrahim",
        role: "Senior Mechanical Engineer",
        bio: "HVAC and plumbing systems specialist with a focus on industrial applications and green building standards.",
        fullBio: "Engr. Musa Ibrahim brings 12 years of experience in mechanical systems design. He specializes in HVAC solutions for large commercial and industrial facilities, ensuring optimal climate control and energy efficiency. He is well-versed in green building certifications like LEED and is an active member of ASHRAE.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
        creds: ["MNSE", "COREN", "ASHRAE"],
        linkedin: "#",
        email: "musa.ibrahim@losos4.com",
    },
    {
        name: "Chioma Eze",
        role: "Fire Safety Consultant",
        bio: "Certified fire safety expert dedicated to designing robust fire suppression and detection systems.",
        fullBio: "Chioma Eze is a leading voice in fire safety engineering. She designs comprehensive fire protection strategies for high-rise buildings and industrial plants. Her work involves risk assessment, system design (sprinklers, alarms), and regulatory compliance audits. She ensures that every project meets the strictest national and international safety codes.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
        creds: ["CFPS", "NFPA"],
        linkedin: "#",
        email: "chioma.eze@losos4.com",
    },
    {
        name: "Tunde Bakare",
        role: "Structural Engineer",
        bio: "Focuses on structural integrity assessments and retrofitting of existing structures.",
        fullBio: "Tunde Bakare is a structural engineer with a keen eye for detail. He specializes in structural analysis, seismic design, and the rehabilitation of aging infrastructure. His innovative approaches to retrofitting have saved clients significant costs while extending the lifespan of their assets.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
        creds: ["MNSE", "COREN"],
        linkedin: "#",
        email: "tunde.bakare@losos4.com",
    },
];

export function TeamGridSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div
                                    className="group cursor-pointer bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="aspect-[3/4] overflow-hidden relative">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                            style={{ backgroundImage: `url('${member.image}')` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                        <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-colors">
                                                <span className="text-xs font-bold">View</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                        <div className="text-sm font-medium text-accent mb-3">{member.role}</div>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                            {member.bio}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {member.creds.map((cred, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs">
                                                    {cred}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="w-full md:w-1/3">
                                            <div
                                                className="aspect-[3/4] rounded-lg bg-cover bg-center"
                                                style={{ backgroundImage: `url('${member.image}')` }}
                                            />
                                        </div>
                                        <div className="w-full md:w-2/3 text-left">
                                            <DialogTitle className="text-2xl font-bold mb-1">{member.name}</DialogTitle>
                                            <div className="text-accent font-medium mb-4">{member.role}</div>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {member.creds.map((cred, i) => (
                                                    <Badge key={i} variant="outline" className="border-primary/20 text-primary">
                                                        <Award className="w-3 h-3 mr-1" /> {cred}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <DialogDescription className="text-base leading-relaxed mb-6 text-foreground">
                                                {member.fullBio}
                                            </DialogDescription>

                                            <div className="flex gap-4">
                                                <Button asChild variant="outline" size="sm">
                                                    <Link href={member.linkedin}>
                                                        <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                                                    </Link>
                                                </Button>
                                                <Button asChild variant="outline" size="sm">
                                                    <Link href={`mailto:${member.email}`}>
                                                        <Mail className="w-4 h-4 mr-2" /> Email
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}
