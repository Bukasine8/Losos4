"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { KineticButton } from "@/components/ui/KineticButton";
import { ParticleField } from "@/components/ui/ParticleField";

export function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />
                <ParticleField
                    particleCount={40}
                    particleColor="rgba(168, 85, 247, 0.5)"
                    interactive={false}
                />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity }}
                />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-16 h-16 border border-primary/20 rounded-lg"
                        style={{
                            left: `${15 + i * 25}%`,
                            top: `${20 + (i % 2) * 60}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 90, 180, 270, 360],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                        <span className="text-sm font-medium gradient-text-accent">
                            Let's Build Something Amazing
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display"
                    >
                        Ready to Start Your{" "}
                        <span className="gradient-text-cyber">Project?</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Partner with us for world-class engineering solutions tailored to your
                        specific needs. Transform your vision into reality.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/contact">
                            <KineticButton variant="accent" size="lg">
                                Get a Quote
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </KineticButton>
                        </Link>
                        <Link href="/services">
                            <motion.button
                                className="px-8 py-4 rounded-full font-semibold text-lg glass border border-white/20 hover:border-accent/50 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Services
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-foreground/60"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span>ISO Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span>15+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span>500+ Projects Delivered</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
