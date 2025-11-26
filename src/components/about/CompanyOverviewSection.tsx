"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CountingNumber } from "@/components/ui/CountingNumber";
import { GlassCard } from "@/components/ui/GlassCard";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";
import { Users, Award, Briefcase, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: Briefcase,
        number: 500,
        suffix: "+",
        label: "Projects Completed",
        color: "from-primary to-blue-400",
    },
    {
        icon: Users,
        number: 50,
        suffix: "+",
        label: "Expert Engineers",
        color: "from-secondary to-purple-400",
    },
    {
        icon: Award,
        number: 15,
        suffix: "+",
        label: "Years Experience",
        color: "from-accent to-pink-400",
    },
    {
        icon: TrendingUp,
        number: 98,
        suffix: "%",
        label: "Client Satisfaction",
        color: "from-primary to-cyan-400",
    },
];

export function CompanyOverviewSection() {
    const paragraph1Words = [
        { text: "Losos4" },
        { text: "Engineering" },
        { text: "is" },
        { text: "a" },
        { text: "premier" },
        { text: "consultancy" },
        { text: "firm" },
        { text: "dedicated" },
        { text: "to" },
        { text: "delivering" },
        { text: "world-class", className: "gradient-text" },
        { text: "mechanical," },
        { text: "electrical," },
        { text: "and" },
        { text: "fire" },
        { text: "safety" },
        { text: "solutions." },
    ];

    return (
        <section className="relative py-32 overflow-hidden">
            <FuturisticBackground variant="gradient" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-2 rounded-full glass border border-primary/20 mb-4"
                            >
                                <span className="text-sm font-medium gradient-text">Who We Are</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display gradient-text">
                                Engineering Excellence Since 2009
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                            <TypewriterEffect
                                words={paragraph1Words}
                                className="text-lg justify-start"
                                cursorClassName="bg-primary"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <GlassCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
                                        <motion.div
                                            className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} p-3 shadow-lg mb-4`}
                                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <stat.icon className="h-8 w-8 text-white" />
                                        </motion.div>

                                        <div className="text-4xl font-bold mb-2 gradient-text font-display">
                                            <CountingNumber
                                                end={stat.number}
                                                suffix={stat.suffix}
                                                duration={2000}
                                            />
                                        </div>

                                        <p className="text-sm text-foreground/60">{stat.label}</p>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] border-2 border-white/10">
                                <div
                                    className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-700"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop')",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
