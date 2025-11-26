"use client";

import { motion } from "framer-motion";
import { EncryptedText } from "@/components/ui/EncryptedText";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ParticleField } from "@/components/ui/ParticleField";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { KineticButton } from "@/components/ui/KineticButton";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    const subtitleWords = [
        { text: "Building" },
        { text: "reliable" },
        { text: "engineering" },
        { text: "solutions" },
        { text: "for" },
        { text: "today" },
        { text: "and" },
        { text: "tomorrow.", className: "gradient-text" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Particle Background */}
            <div className="absolute inset-0 z-0">
                <ParticleField particleCount={80} />
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
            </div>

            {/* Floating 3D Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-20 h-20 border border-primary/20 rounded-lg"
                        style={{
                            left: `${10 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 180, 360],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm font-medium gradient-text">
                            Premium Engineering Solutions
                        </span>
                    </motion.div>

                    {/* Main Heading with Encrypted Text */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 font-display leading-tight">
                        <EncryptedText
                            text="Losos4 Engineering"
                            className="gradient-text block"
                            revealDelayMs={40}
                        />
                    </h1>

                    {/* Subtitle with Typewriter Effect */}
                    <div className="mb-12">
                        <TypewriterEffect
                            words={subtitleWords}
                            className="text-xl md:text-2xl justify-center"
                        />
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/contact">
                            <KineticButton variant="primary" size="lg">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </KineticButton>
                        </Link>
                        <Link href="/projects">
                            <motion.button
                                className="px-8 py-4 rounded-full font-semibold text-lg glass border border-white/20 hover:border-primary/50 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.5 }}
                        className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
                    >
                        {[
                            { number: "500+", label: "Projects" },
                            { number: "15+", label: "Years" },
                            { number: "98%", label: "Satisfaction" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-foreground/60">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-2 bg-primary rounded-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
