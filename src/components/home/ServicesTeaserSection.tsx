"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Settings, Flame, ClipboardList } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";

const services = [
    {
        icon: Settings,
        title: "Mechanical Design",
        description: "HVAC systems, plumbing layouts, and mechanical load calculations for efficient building operations.",
        href: "/services/mechanical",
        color: "from-primary to-blue-400",
    },
    {
        icon: Zap,
        title: "Electrical Design",
        description: "Power distribution, lighting layouts, and low voltage systems designed for reliability and safety.",
        href: "/services/electrical",
        color: "from-secondary to-purple-400",
    },
    {
        icon: Flame,
        title: "Fire Safety",
        description: "Comprehensive fire protection systems, risk assessments, and evacuation planning.",
        href: "/services/fire-safety",
        color: "from-accent to-pink-400",
    },
    {
        icon: ClipboardList,
        title: "Project Management",
        description: "End-to-end supervision, cost estimation, and quality assurance for construction projects.",
        href: "/services/project-management",
        color: "from-primary to-cyan-400",
    },
];

export function ServicesTeaserSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <FuturisticBackground variant="grid" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
                >
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full glass border border-primary/20 mb-4"
                        >
                            <span className="text-sm font-medium gradient-text">What We Offer</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display">
                            Our Core <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-2xl">
                            Delivering specialized engineering solutions across multiple disciplines.
                        </p>
                    </div>
                    <Link href="/services">
                        <motion.button
                            className="px-6 py-3 rounded-full glass border border-primary/30 hover:border-primary/60 transition-all duration-300 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Services
                        </motion.button>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={service.href}>
                                <GlassCard
                                    className="group relative overflow-hidden h-full border border-white/10 hover:border-primary/50 transition-all duration-500"
                                    hover={false}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    {/* Animated border gradient */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} blur-xl opacity-50`} />
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <motion.div
                                            className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} p-3 shadow-lg`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: [0, -10, 10, -10, 0],
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <service.icon className="h-8 w-8 text-white" />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-foreground/60 mb-6 line-clamp-3 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="flex items-center text-sm font-medium gradient-text">
                                            Learn More
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
