"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Mock Data
const projects = [
    {
        id: 1,
        title: "Lagos High-Rise Complex",
        category: "MEP Design",
        summary: "Complete Mechanical, Electrical, and Plumbing design for a 20-story mixed-use building.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        slug: "lagos-high-rise",
    },
    {
        id: 2,
        title: "Industrial Fire Safety System",
        category: "Fire Safety",
        summary: "Design and implementation of an automated fire suppression system for a manufacturing plant.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2532&auto=format&fit=crop",
        slug: "industrial-fire-safety",
    },
    {
        id: 3,
        title: "Smart Office Integration",
        category: "Electrical",
        summary: "Modern electrical layout with smart lighting and automated climate control integration.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
        slug: "smart-office",
    },
    {
        id: 4,
        title: "Abuja Mall Renovation",
        category: "Project Management",
        summary: "End-to-end project management for the structural and systems renovation of a major shopping mall.",
        image: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=2676&auto=format&fit=crop",
        slug: "abuja-mall",
    },
    {
        id: 5,
        title: "Data Center Cooling",
        category: "Mechanical",
        summary: "High-efficiency HVAC design for a Tier-3 data center facility.",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop",
        slug: "data-center-cooling",
    },
    {
        id: 6,
        title: "Residential Estate Power",
        category: "Electrical",
        summary: "Underground power distribution network design for a 500-unit residential estate.",
        image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2674&auto=format&fit=crop",
        slug: "residential-power",
    },
];

const categories = ["All", "Mechanical", "Electrical", "Fire Safety", "Project Management", "MEP Design"];

export function ProjectsGallerySection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section className="py-20 bg-background">
            <div className="container">
                {/* Filter Controls */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "rounded-full transition-all duration-300",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "hover:bg-primary/10 hover:text-primary"
                            )}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative overflow-hidden rounded-xl bg-card border shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button asChild variant="secondary" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <Link href={`/projects/${project.slug}`}>View Details</Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2">
                                        {project.summary}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
