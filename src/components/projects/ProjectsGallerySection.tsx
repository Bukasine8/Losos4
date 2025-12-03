"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/lib/supabase-browser";

interface Project {
    id: string;
    title: string;
    slug: string;
    category: string;
    summary: string;
    featured_image_url: string | null;
}

export function ProjectsGallerySection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [categories, setCategories] = useState<string[]>(["All"]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            const { data } = await supabaseBrowser
                .from("projects")
                .select("id, title, slug, category, summary, featured_image_url")
                .eq("status", "published")
                .order("completion_date", { ascending: false });

            if (data) {
                setProjects(data);

                // Extract unique categories
                const uniqueCategories = Array.from(
                    new Set(data.map(p => p.category).filter(Boolean))
                );
                setCategories(["All", ...uniqueCategories]);
            }
            setLoading(false);
        }

        fetchProjects();
    }, []);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    if (loading) {
        return (
            <section className="py-20 bg-background">
                <div className="container text-center">
                    <p className="text-muted-foreground">Loading projects...</p>
                </div>
            </section>
        );
    }

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
                        {filteredProjects.length === 0 ? (
                            <div className="col-span-full text-center py-12">
                                <p className="text-muted-foreground">No projects found in this category.</p>
                            </div>
                        ) : (
                            filteredProjects.map((project) => (
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
                                        {project.featured_image_url ? (
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                                style={{ backgroundImage: `url('${project.featured_image_url}')` }}
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-muted flex items-center justify-center">
                                                <p className="text-muted-foreground">No image</p>
                                            </div>
                                        )}
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
                            ))
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
