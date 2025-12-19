import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { Factory, Zap, Building2, Briefcase, HardHat, Home as HomeIcon, Landmark, Stethoscope, CheckCircle, ShieldCheck, Clock, ClipboardList, Cog, Flame } from "lucide-react";

// Helper to render icon by name
const IndustryIcon = ({ name }: { name: string }) => {
    switch (name) {
        case 'Factory': return <Factory className="w-8 h-8" />;
        case 'Zap': return <Zap className="w-8 h-8" />;
        case 'Building2': return <Building2 className="w-8 h-8" />;
        case 'Briefcase': return <Briefcase className="w-8 h-8" />;
        case 'HardHat': return <HardHat className="w-8 h-8" />;
        case 'Home': return <HomeIcon className="w-8 h-8" />;
        case 'Landmark': return <Landmark className="w-8 h-8" />;
        case 'Stethoscope': return <Stethoscope className="w-8 h-8" />;
        default: return <Building2 className="w-8 h-8" />;
    }
};

// Helper to render service icons
const ServiceIcon = ({ name }: { name: string }) => {
    switch (name) {
        case 'ClipboardList': return <ClipboardList className="w-6 h-6" />;
        case 'Cog': return <Cog className="w-6 h-6" />;
        case 'Zap': return <Zap className="w-6 h-6" />;
        case 'Flame': return <Flame className="w-6 h-6" />;
        default: return <Building2 className="w-6 h-6" />;
    }
};

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-losos-dark text-white">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for Particle Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-losos-blue/20 via-losos-dark to-losos-dark" />
                </div>

                <header className="container relative z-10 text-center px-4">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Precision Engineering <br className="hidden md:block" /> for Critical Infrastructure.
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 md:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Multidisciplinary engineering for large-scale, complex projects.
                        Precise. Disciplined. Trusted.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <Button size="lg" asChild className="w-full sm:w-auto">
                            <Link href="/schedule">Schedule a Meeting</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                            <Link href="/projects">View Projects</Link>
                        </Button>
                    </div>
                </header>

                {/* Diagonal Cut Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-losos-light" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}></div>
            </section>

            {/* Services Section */}
            <Section theme="light" className="py-16 md:py-24" hasDivider divider="slope-right">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { title: "Project Management", desc: "End-to-end planning, coordination, and risk management.", icon: "ClipboardList" },
                            { title: "Mechanical", desc: "HVAC and plant systems optimized for efficiency.", icon: "Cog" },
                            { title: "Electrical", desc: "Safe, reliable power distribution and lighting.", icon: "Zap" },
                            { title: "Fire Engineering", desc: "Life safety and regulatory compliance strategies.", icon: "Flame" }
                        ].map((service) => (
                            <Card key={service.title} variant="service" className="h-full">
                                <div className="w-12 h-12 bg-losos-blue/10 flex items-center justify-center mb-6 text-losos-blue">
                                    <ServiceIcon name={service.icon} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-losos-dark">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Industries Served */}
            <Section theme="dark" hasDivider divider="slope-left">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Industries We Serve</h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 md:mb-16">
                        Specialized engineering expertise tailored to the unique demands of critical sectors.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { name: "Oil & Gas", icon: "Factory" },
                            { name: "Power", icon: "Zap" },
                            { name: "Infrastructure", icon: "Building2" },
                            { name: "Commercial", icon: "Briefcase" },
                            { name: "Industrial", icon: "HardHat" },
                            { name: "Residential", icon: "Home" },
                            { name: "Government", icon: "Landmark" },
                            { name: "Healthcare", icon: "Stethoscope" }
                        ].map((industry) => (
                            <div key={industry.name} className="flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 hover:bg-losos-blue/20 hover:border-losos-blue/50 transition-all duration-300 group rounded-lg md:rounded-none">
                                <span className="mb-4 text-losos-blue group-hover:text-white transition-colors">
                                    <IndustryIcon name={industry.icon} />
                                </span>
                                <span className="font-bold text-sm md:text-lg text-center">{industry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Engineering Process */}
            <Section theme="light" hasDivider divider="chevron">
                <div className="container">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-losos-dark">Our Engineering Process</h2>
                        <p className="text-gray-600">A disciplined approach to delivering excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10" />

                        {[
                            { step: "01", title: "Assessment", desc: "Thorough site analysis and requirement gathering." },
                            { step: "02", title: "Design", desc: "Precision engineering and CAD modeling." },
                            { step: "03", title: "Execution", desc: "Rigorous project management and installation." },
                            { step: "04", title: "Support", desc: "Commissioning and lifecycle maintenance." }
                        ].map((phase) => (
                            <div key={phase.step} className="bg-white p-6 md:p-8 border border-gray-100 shadow-lg relative rounded-lg md:rounded-none">
                                <div className="w-12 h-12 bg-losos-blue text-white font-bold flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 shadow-lg shadow-losos-blue/30">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-losos-dark">{phase.title}</h3>
                                <p className="text-gray-600 text-sm">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section theme="blue" hasDivider divider="slope-right">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Losos4?</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white/10 flex-shrink-0 flex items-center justify-center rounded-lg">
                                    <CheckCircle className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Technical Precision</h3>
                                    <p className="text-white/80">We adhere to the strictest international standards (ISO, COREN) to ensure safety and durability.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white/10 flex-shrink-0 flex items-center justify-center rounded-lg">
                                    <ShieldCheck className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Zero Compromise on Quality</h3>
                                    <p className="text-white/80">Our reputation is built on delivering exactly what was promised, without cutting corners.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white/10 flex-shrink-0 flex items-center justify-center rounded-lg">
                                    <Clock className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                                    <p className="text-white/80">We respect project timelines and employ rigid project management methodologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] md:h-[500px] border-4 border-white/20 p-2 md:p-4 rounded-lg md:rounded-none">
                        <div className="w-full h-full bg-losos-dark relative overflow-hidden rounded-sm">
                            <Image
                                src="/images/quality_engineering_site.png"
                                alt="A team of engineers collaborating on a project in a modern office."
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-5xl md:text-6xl font-bold mb-2 text-white drop-shadow-xl">100%</div>
                                    <div className="uppercase tracking-widest text-sm text-white font-medium drop-shadow-md">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Featured Projects */}
            <Section theme="dark" hasDivider divider="slope-left">
                <div className="container">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                            <p className="text-gray-400">Engineering excellence in action.</p>
                        </div>
                        <Button variant="outline" asChild>
                            <Link href="/projects">View All Projects</Link>
                        </Button>
                    </div>

                    <div className="space-y-12">
                        {/* Project 1 */}
                        <div className="group relative grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden bg-gray-900/50 border border-white/5">
                            <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                                <div className="text-losos-blue font-bold tracking-widest uppercase text-sm mb-4">Power Systems</div>
                                <h3 className="text-3xl font-bold mb-6">PPPRA HQ Genset Installation</h3>
                                <p className="text-gray-400 mb-8">
                                    Installation of 1X1250kVA and 385kVA generators, ensuring uninterruptible power for critical government infrastructure.
                                </p>
                                <Link href="/projects" className="text-white hover:text-losos-blue transition-colors font-bold flex items-center gap-2">
                                    View Details →
                                </Link>
                            </div>
                            <div className="order-1 md:order-2 relative h-64 md:h-auto bg-gray-800 overflow-hidden">
                                <Image
                                    src="/images/Project_Images/1X1250kVA and 385kVA Genset Installation at PPPRA HQ Building, Abuja.jpeg"
                                    alt="A large industrial generator set being installed at a government building."
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group relative grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden bg-gray-900/50 border border-white/5">
                            <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                                <div className="text-losos-blue font-bold tracking-widest uppercase text-sm mb-4">Infrastructure</div>
                                <h3 className="text-3xl font-bold mb-6">PPPRA HQ Distribution</h3>
                                <p className="text-gray-400 mb-8">
                                    Comprehensive power and distribution system installation, delivering robust electrical infrastructure for high-demand operations.
                                </p>
                                <Link href="/projects" className="text-white hover:text-losos-blue transition-colors font-bold flex items-center gap-2">
                                    View Details →
                                </Link>
                            </div>
                            <div className="order-1 md:order-2 relative h-64 md:h-auto bg-gray-800 overflow-hidden">
                                <Image
                                    src="/images/Project_Images/Power and Distribution Installation at PPRA HQ Building, Abuja.jpeg"
                                    alt="Electrical engineers working on a power distribution panel in a large facility."
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Testimonials */}
            <Section theme="light" hasDivider divider="chevron">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-16 text-losos-dark">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-8 shadow-sm">
                            <p className="text-gray-600 italic mb-6">"Losos4 brought a level of discipline to our project that we hadn't seen before. Their engineering precision saved us millions."</p>
                            <div className="font-bold text-losos-dark">- Director, Large Corp</div>
                        </div>
                        <div className="bg-white p-8 shadow-sm">
                            <p className="text-gray-600 italic mb-6">"Reliable, honest, and technically brilliant. They are our go-to partners for complex infrastructure."</p>
                            <div className="font-bold text-losos-dark">- Project Manager, Gov Agency</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section theme="blue" className="text-center py-32">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start your project?</h2>
                    <p className="text-xl text-white/80 mb-12">
                        Engage us early to define requirements and reduce project risk.
                    </p>
                    <Button size="lg" variant="secondary" asChild className="bg-white text-losos-blue hover:bg-gray-100 border-none">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </Section>
        </>
    );
}
