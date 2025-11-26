"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Lagos High-Rise Complex",
        category: "MEP Design",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        href: "/projects/lagos-high-rise",
    },
    {
        title: "Industrial Fire Safety",
        category: "Fire Safety",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2532&auto=format&fit=crop",
        href: "/projects/industrial-fire-safety",
    },
    {
        title: "Smart Office Integration",
        category: "Electrical",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
        href: "/projects/smart-office",
    },
];

export function ProjectsTeaserSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

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
                            className="inline-block px-4 py-2 rounded-full glass border border-secondary/20 mb-4"
                        >
                            <span className="text-sm font-medium gradient-text-accent">Our Work</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display">
                            Featured <span className="gradient-text-accent">Projects</span>
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-2xl">
                            A glimpse into our portfolio of successful engineering deliveries.
                        </p>
                    </div>
                    <Link href="/projects">
                        <motion.button
                            className="px-6 py-3 rounded-full glass border border-secondary/30 hover:border-secondary/60 transition-all duration-300 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Portfolio
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Uniform Grid Layout - All cards same size */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Link href={project.href}>
                                <motion.div
                                    className="group relative overflow-hidden rounded-2xl aspect-[4/3] transform-3d"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Image with parallax effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Glass overlay */}
                                    <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <div className="inline-block px-3 py-1 rounded-full glass border border-accent/30 mb-4">
                                                <span className="text-xs font-medium gradient-text-accent">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm font-medium gradient-text opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                                <span>View Project</span>
                                                <motion.div
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Animated border */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/50 transition-all duration-500" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
