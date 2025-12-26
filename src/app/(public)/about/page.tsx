import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Certificates } from "@/components/about/Certificates";

export default function AboutPage() {
    return (
        <div className="pt-24">
            <Section theme="dark" hasDivider divider="slope-right">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold mb-8">About Losos4</h1>
                    <p className="text-xl leading-relaxed text-gray-300">
                        Losos4 Consultants Limited is an indigenous engineering consulting firm established in 2018.
                        We provide multidisciplinary services across mechanical, electrical, fire engineering, and project management.
                        Our team comprises experienced professionals with decades of combined expertise delivering large-scale
                        institutional, commercial, industrial, and infrastructure projects.
                    </p>
                </div>
            </Section>

            <Section theme="light">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-losos-dark">Our History</h2>
                        <div className="prose text-gray-700">
                            <p className="mb-4">
                                Losos-4 Consultants Ltd. was founded by <strong>Engr. Solomon A. T. Oni</strong>, a seasoned Mechanical Engineer with over 25 years of experience, to address the industry's need for technical accuracy, professionalism, and integrity.
                            </p>
                            <p>
                                Starting as a sole proprietorship, the firm grew into a Limited Liability Company (RC 1539440), delivering complex engineering projects for universities, government bodies, and industrial clients across Nigeria. Today, we stand as a fully independent, professionally driven consultancy committed to world-class standards.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                        <h2 className="text-3xl font-bold mb-6 text-losos-dark">Mission & Vision</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-losos-blue mb-2">Our Mission</h3>
                                <p className="text-gray-700 italic">
                                    "To deliver precise, reliable, and technically sound engineering solutions that enable our clients to plan, build, and operate complex facilities with confidence."
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-losos-blue mb-2">Our Vision</h3>
                                <p className="text-gray-700 italic">
                                    "To be a trusted engineering consulting partner recognized for technical excellence, integrity, and the ability to successfully deliver complex, large-scale projects."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section theme="blue" hasDivider divider="slope-left">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { title: "Safety First", desc: "Prioritizing the well-being of clients, teams, and the community through strict safety protocols." },
                        { title: "Innovation", desc: "Adopting creative technologies and methodologies to enhance project outcomes." },
                        { title: "Sustainability", desc: "Promoting environmentally responsible and energy-efficient solutions." },
                        { title: "Integrity", desc: "Upholding ethical standards, transparency, and accountability in all interactions." }
                    ].map((val) => (
                        <div key={val.title} className="bg-white/10 p-6 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-white">{val.title}</h3>
                            <p className="text-white/80 text-sm">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section theme="light" hasDivider divider="slope-right">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                        {/* Placeholder for Team/Founder Image - can be updated when user provides headshots */}
                        <div className="absolute inset-0 bg-losos-dark/80 z-10 flex items-center justify-center p-8 text-center text-white">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Engr. Solomon A. T. Oni</h3>
                                <p className="text-losos-blue font-bold uppercase tracking-widest text-sm mb-4">Founder & Lead Engineer</p>
                                <p className="text-gray-300 italic max-w-sm mx-auto">
                                    "We established Losos4 to set a higher standard for engineering consultancy through technical accuracy and disciplined execution."
                                </p>
                            </div>
                        </div>
                        <Image
                            src="/images/engineering-team.png"
                            alt="Losos4 Engineering Team"
                            fill
                            className="object-cover opacity-50"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-losos-dark">Our Expertise</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Our team comprises registered Mechanical, Electrical, and Fire Engineers with decades of combined experience. We are fully licensed and compliant with national regulatory bodies.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-2">Accreditations & Memberships</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-losos-blue rounded-full"></div>
                                    COREN Registered
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-losos-blue rounded-full"></div>
                                    NSE Member
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-losos-blue rounded-full"></div>
                                    ASHRAE Member
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-losos-blue rounded-full"></div>
                                    BPP Registered
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Certificates />
        </div>
    );
}
