"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";

const valueProps = [
    {
        title: "Multi-discipline expertise",
        description:
            "Integrated mechanical, electrical, and fire-safety engineering under one coordinated team.",
    },
    {
        title: "Regulatory-compliant designs",
        description:
            "Solutions aligned with COREN, NSE, and local building codes to keep your projects fully compliant.",
    },
    {
        title: "From concept to commissioning",
        description:
            "Support across feasibility, detailed design, supervision, and final system handover.",
    },
    {
        title: "Data‑driven decision making",
        description:
            "Modern tools, simulation, and performance analytics to optimize cost, safety, and efficiency.",
    },
];

export function ValuePropsSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            <FuturisticBackground variant="mesh" />

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center px-4 py-1 rounded-full glass border border-primary/20 mb-4"
                    >
                        <span className="text-xs font-medium gradient-text uppercase tracking-[0.2em]">
                            Why clients choose Losos4
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                        className="text-4xl md:text-5xl font-bold font-display mb-4"
                    >
                        Engineering with <span className="gradient-text">measurable impact</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="text-lg text-foreground/70"
                    >
                        Every project is engineered for long‑term performance, safety, and maintainability 
                         whether it&apos;s a new build, retrofit, or complex infrastructure upgrade.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valueProps.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                        >
                            <GlassCard className="h-full flex flex-col gap-4 px-6 py-6 border border-white/10">
                                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-1">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                <p className="text-sm text-foreground/65 leading-relaxed">
                                    {item.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
