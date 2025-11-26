"use client";

import { motion } from "framer-motion";
import { EncryptedText } from "@/components/ui/EncryptedText";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ParticleField } from "@/components/ui/ParticleField";

export function AboutHeroSection() {
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
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Particle Background */}
            <div className="absolute inset-0 z-0">
                <ParticleField particleCount={60} particleColor="rgba(59, 130, 246, 0.3)" />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                />
            </div>

            {/* Background Image with Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop')",
                }}
            />

            {/* Content */}
            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-block px-4 py-2 rounded-full glass border border-primary/20 mb-6"
                    >
                        <span className="text-sm font-medium gradient-text">About Us</span>
                    </motion.div>

                    {/* Main Heading with Encrypted Text Effect */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-display">
                        <EncryptedText
                            text="About Our Firm"
                            className="gradient-text"
                            revealDelayMs={30}
                        />
                    </h1>

                    {/* Subtitle with Typewriter Effect */}
                    <div className="max-w-3xl mx-auto">
                        <TypewriterEffect
                            words={subtitleWords}
                            className="text-xl md:text-2xl justify-center"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
