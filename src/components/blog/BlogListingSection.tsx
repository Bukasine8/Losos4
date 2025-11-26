"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock Data
const posts = [
    {
        id: 1,
        title: "Understanding MEP Coordination",
        category: "MEP Design",
        excerpt: "Why coordinated Mechanical, Electrical, and Plumbing designs are crucial for avoiding costly construction clashes.",
        image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2670&auto=format&fit=crop",
        slug: "understanding-mep-coordination",
    },
    {
        id: 2,
        title: "Sustainable Electrical Systems",
        category: "Electrical",
        excerpt: "Implementing energy-efficient lighting and power systems to reduce the carbon footprint of commercial buildings.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
        slug: "sustainable-electrical-systems",
    },
    {
        id: 3,
        title: "Project Management Best Practices",
        category: "Project Mgmt",
        excerpt: "Key strategies for keeping complex engineering projects on time and within budget.",
        image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2669&auto=format&fit=crop",
        slug: "project-management-best-practices",
    },
    {
        id: 4,
        title: "Fire Safety Audits Explained",
        category: "Fire Safety",
        excerpt: "What to expect during a fire safety inspection and how to ensure your facility is compliant.",
        image: "https://images.unsplash.com/photo-1599696847727-920002720272?q=80&w=2670&auto=format&fit=crop",
        slug: "fire-safety-audits-explained",
    },
    {
        id: 5,
        title: "HVAC Trends for 2024",
        category: "Mechanical",
        excerpt: "The latest advancements in heating, ventilation, and air conditioning technology for smart homes.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop",
        slug: "hvac-trends-2024",
    },
    {
        id: 6,
        title: "The Role of BIM in Engineering",
        category: "Technology",
        excerpt: "How Building Information Modeling is revolutionizing the way we design and construct infrastructure.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop",
        slug: "role-of-bim",
    },
];

const categories = ["All", "Electrical", "Mechanical", "Fire Safety", "Project Mgmt", "MEP Design", "Technology"];

export function BlogListingSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter(post => post.category === activeCategory);

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

                {/* Blog Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredPosts.map((post) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                key={post.id}
                                className="group flex flex-col h-full rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all duration-300"
                            >
                                <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-video relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${post.image}')` }}
                                    />
                                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                        {post.category}
                                    </div>
                                </Link>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:translate-x-1 duration-300"
                                        >
                                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
