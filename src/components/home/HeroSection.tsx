"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/ui/SplitText";
import { TextType } from "@/components/ui/TextType";
import { CountUp } from "@/components/ui/CountUp";
import { ParticleField } from "@/components/ui/ParticleField";
import { KineticButton } from "@/components/ui/KineticButton";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function HeroSection() {
    const router = useRouter();

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

                    {/* Main Heading with SplitText */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 font-display leading-tight">
                        <SplitText className="gradient-text block">Losos4 Engineering</SplitText>
                    </h1>

                    {/* Subtitle with TextType */}
                    <div className="mb-12 min-h-[32px]">
                        <div className="text-xl md:text-2xl justify-center flex gap-2">
                            <TextType
                                text="Building reliable engineering solutions for today and tomorrow."
                                className="inline-block"
                            />
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <KineticButton
                            variant="primary"
                            size="lg"
                            onClick={() => router.push("/book-meeting")}
                        >
                            Book a Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </KineticButton>

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
                            { number: 500, suffix: "+", label: "Projects" },
                            { number: 15, suffix: "+", label: "Years" },
                            { number: 98, suffix: "%", label: "Satisfaction" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 flex justify-center">
                                    <CountUp
                                        value={stat.number}
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <div className="text-sm text-foreground/60">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
