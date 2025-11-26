"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CertificationsGridSection } from "@/components/certifications/CertificationsGridSection";

export function CertificationsSection() {
    return (
        <section className="relative py-24 bg-muted/40">
            <div className="container">
                <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block px-4 py-2 rounded-full border border-primary/20 text-xs font-medium uppercase tracking-[0.2em] text-primary/90 bg-primary/5"
                        >
                            Trusted and certified
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.05 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-4 mb-3"
                        >
                            Proven engineering credentials
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.1 }}
                            className="text-base md:text-lg text-foreground/70"
                        >
                            Losos4 operates as a fully registered and certified engineering practice, giving
                            clients confidence that every project is delivered to strict professional and
                            regulatory standards.
                        </motion.p>
                    </div>
                    <Link href="/certifications" className="shrink-0">
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="px-6 py-3 rounded-full border border-primary/40 bg-background/60 hover:bg-primary hover:text-primary-foreground transition-colors text-sm md:text-base font-medium backdrop-blur"
                        >
                            View all certifications
                        </motion.button>
                    </Link>
                </div>

                <div className="rounded-3xl border border-border/60 bg-background/80 overflow-hidden">
                    <CertificationsGridSection />
                </div>
            </div>
        </section>
    );
}
