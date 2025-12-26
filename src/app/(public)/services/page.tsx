
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
    ClipboardList,
    Cog,
    Zap,
    Flame,
    ArrowRight,
    CheckCircle,
    Shield
} from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <Section theme="dark" className="py-24 md:py-32" hasDivider divider="slope-right">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                            Engineering <br /> Solutions.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                            Comprehensive mechanical, electrical, fire, and project management services tailored for critical infrastructure and complex facilities.
                        </p>
                        <Button size="lg" asChild className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                            <Link href="/schedule">Start Your Project</Link>
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Project Management */}
            <Section theme="light" id="project-management" hasDivider divider="slope-left">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-16 h-16 bg-losos-blue/10 flex items-center justify-center rounded-lg mb-6 text-losos-blue">
                            <ClipboardList className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-losos-dark mb-4">Project Management</h2>
                        <p className="text-gray-600 mb-6 font-medium text-lg">
                            Structured, engineering-driven project management aligned with PMBOK® and Systems Engineering principles.
                        </p>
                        <p className="text-gray-600 mb-8">
                            We deliver projects on time and within budget by rigorously managing scope, schedule, cost, and risk. Our V-Model approach ensures total alignment between design intent and final installation.
                        </p>

                        <div className="space-y-4">
                            {[
                                "PMBOK®-Aligned Framework (Scope, Time, Cost)",
                                "Systems Engineering V-Model for Complex Projects",
                                "Risk-Based Planning & Mitigation",
                                "Integrated MEP Coordination & Clash Detection",
                                "Stage-Gate Control & Quality Assurance"
                            ].map((item) => (
                                <div key={item} className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-losos-blue flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 h-[400px] rounded-lg relative overflow-hidden group shadow-xl">
                        <Image
                            src="/images/Project_Images/Project management.jpeg"
                            alt="Project Management - PPPRA HQ"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-losos-dark/20 group-hover:bg-losos-dark/0 transition-colors duration-500" />
                    </div>
                </div>
            </Section>

            {/* Mechanical Engineering */}
            <Section theme="blue" id="mechanical" hasDivider divider="slope-right">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-1 h-[400px] rounded-lg relative overflow-hidden group shadow-xl border-4 border-white/10">
                        <Image
                            src="/images/Project_Images/Mechanical.jpeg"
                            alt="Mechanical Engineering - Genset Installation"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-losos-dark/20 group-hover:bg-losos-dark/0 transition-colors duration-500" />
                    </div>
                    <div className="order-2">
                        <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-lg mb-6 text-white">
                            <Cog className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mechanical Engineering</h2>
                        <p className="text-white/80 mb-6 font-medium text-lg">
                            Designing robust HVAC, industrial, and plumbing systems that prioritize efficiency, safety, and reliability.
                        </p>
                        <p className="text-white/80 mb-8">
                            From central utility plants for universities to precision control for industrial processes, we engineer mechanical systems that perform under pressure.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Large-Scale HVAC (Chillers, VRF, Ventilation)",
                                "Industrial Process Piping & Boiler Plants",
                                "Plumbing, Water Treatment & Drainage",
                                "Fire Suppression Systems Integration",
                                "Energy Efficiency Audits & Retrofits"
                            ].map((item) => (
                                <div key={item} className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                                    <span className="text-white/90">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Electrical Engineering */}
            <Section theme="light" id="electrical" hasDivider divider="slope-left">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-16 h-16 bg-losos-blue/10 flex items-center justify-center rounded-lg mb-6 text-losos-blue">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-losos-dark mb-4">Electrical Engineering</h2>
                        <p className="text-gray-600 mb-6 font-medium text-lg">
                            Powering mission-critical facilities with resilient, compliant, and scalable electrical infrastructure.
                        </p>
                        <p className="text-gray-600 mb-8">
                            We solve complex power challenges—balancing high loads, grid instability, and safety regulations—to keep your operations running 24/7.
                        </p>

                        <div className="space-y-4">
                            {[
                                "HV/LV Power Distribution & Substations",
                                "Generator Synchronization & Backup Power",
                                "Earthing, Bonding & Lightning Protection",
                                "Industrial & Commercial Lighting Design",
                                "Short-Circuit Analysis & Protection Coordination"
                            ].map((item) => (
                                <div key={item} className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-losos-blue flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 h-[400px] rounded-lg relative overflow-hidden group shadow-xl">
                        <Image
                            src="/images/Project_Images/Electrical Installations.jpeg"
                            alt="Electrical Engineering - Power Distribution"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-losos-dark/20 group-hover:bg-losos-dark/0 transition-colors duration-500" />
                    </div>
                </div>
            </Section>

            {/* Fire Engineering */}
            <Section theme="dark" id="fire" hasDivider divider="slope-right">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-1 h-[400px] rounded-lg relative overflow-hidden group shadow-xl border border-white/10">
                        <Image
                            src="/images/Project_Images/fire_management.jpeg"
                            alt="Fire Engineering Systems"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-losos-dark/20 group-hover:bg-losos-dark/0 transition-colors duration-500" />
                    </div>
                    <div className="order-2">
                        <div className="w-16 h-16 bg-losos-blue/10 flex items-center justify-center rounded-lg mb-6 text-losos-blue">
                            <Flame className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fire Engineering</h2>
                        <p className="text-gray-400 mb-6 font-medium text-lg">
                            Comprehensive life safety strategies designed to protect people, assets, and continuity of operations.
                        </p>
                        <p className="text-gray-400 mb-8">
                            Our fire engineering solutions integrate active protection systems with passive safety strategies, ensuring full regulatory compliance and peace of mind.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Fire Detection & Alarm Systems",
                                "Automatic Sprinkler & Suppression Systems",
                                "Performance-Based Fire Engineering",
                                "Smoke Control & Management",
                                "Regulatory Compliance & Fire Safety Audits"
                            ].map((item) => (
                                <div key={item} className="flex gap-3">
                                    <Shield className="w-5 h-5 text-losos-blue flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Quantity Surveying / Cost Engineering */}
            <Section theme="light" id="quantity-surveying" hasDivider divider="slope-left">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-16 h-16 bg-losos-blue/10 flex items-center justify-center rounded-lg mb-6 text-losos-blue">
                            <ClipboardList className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-losos-dark mb-4">Quantity Surveying & Cost Engineering</h2>
                        <p className="text-gray-600 mb-6 font-medium text-lg">
                            Precision cost management and financial control for engineering projects.
                        </p>
                        <p className="text-gray-600 mb-8">
                            We ensure your project delivers maximum value for money through rigorous cost planning, contract administration, and financial monitoring from feasibility to final account.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Detailed Bills of Quantities (BoQ) Preparation",
                                "Cost Estimation & Budget Planning",
                                "Tender Analysis & Contractor Selection",
                                "Interim Valuation & Certification",
                                "Final Account Preparation & Negotiation"
                            ].map((item) => (
                                <div key={item} className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-losos-blue flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 h-[400px] rounded-lg relative overflow-hidden group shadow-xl">
                        {/* Using a finance/document related image or fallback */}
                        <Image
                            src="/images/Project_Images/page_164_img_5.jpeg"
                            alt="Quantity Surveying Documents"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-losos-dark/20 group-hover:bg-losos-dark/0 transition-colors duration-500" />
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section theme="blue" className="py-24" hasDivider divider="none">
                <div className="container text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-white">Ready to Engineer Your Success?</h2>
                    <p className="text-xl text-white/80 mb-10">
                        Whether you need a full-scale project management team or specialized engineering design, Losos4 is your trusted partner.
                    </p>
                    <Button size="lg" className="bg-white text-losos-blue hover:bg-gray-100 font-bold border-none" asChild>
                        <Link href="/contact">Get in Touch <ArrowRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
