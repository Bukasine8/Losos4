"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { KineticButton } from "@/components/ui/KineticButton";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";
import Link from "next/link";

interface BookingLandingProps {
    onBegin: () => void;
}

export function BookingLanding({ onBegin }: BookingLandingProps) {
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            <FuturisticBackground variant="dots" />

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full max-w-2xl px-4"
            >
                <div className="glass p-12 rounded-2xl border border-white/10 backdrop-blur-xl bg-background/80 text-center space-y-6">
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="inline-block p-4 rounded-full bg-primary/10 mb-2"
                    >
                        <Mail className="h-10 w-10 text-primary" />
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="text-4xl md:text-5xl font-bold gradient-text"
                    >
                        Book a Consultation
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-lg text-muted-foreground max-w-lg mx-auto"
                    >
                        Schedule a meeting with our engineering experts to discuss your project requirements,
                        timeline, and how we can help bring your vision to life.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="pt-4"
                    >
                        <KineticButton
                            variant="primary"
                            size="lg"
                            onClick={onBegin}
                            className="group"
                        >
                            Begin Booking
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </KineticButton>
                    </motion.div>

                    {/* Support Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="pt-4 border-t border-white/10"
                    >
                        <Link
                            href="/contact"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                        >
                            Need help? Contact Support
                            <ArrowRight className="h-3 w-3" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
