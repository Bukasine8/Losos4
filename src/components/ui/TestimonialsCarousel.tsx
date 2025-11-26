"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { GlassCard } from "./GlassCard";

const testimonials = [
    {
        name: "David Okonkwo",
        role: "CEO, BuildRight Construction",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        content: "Losos4's MEP design expertise transformed our high-rise project. Their attention to detail and innovative solutions exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Sarah Johnson",
        role: "Project Manager, Urban Developers",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        content: "Outstanding fire safety consultation! The team's professionalism and comprehensive approach gave us complete confidence in our building's safety systems.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Facilities Director, Tech Hub Lagos",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        content: "The electrical design and smart office integration were flawless. Losos4 delivered a cutting-edge solution that perfectly met our needs.",
        rating: 5,
    },
    {
        name: "Amina Mohammed",
        role: "Owner, Skyline Properties",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
        content: "Exceptional project management from start to finish. They kept everything on schedule and within budget while maintaining the highest quality standards.",
        rating: 5,
    },
    {
        name: "James Williams",
        role: "Engineering Lead, Metro Infrastructure",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        content: "Losos4's technical expertise and innovative approach to complex engineering challenges is unmatched. Highly recommended!",
        rating: 5,
    },
    {
        name: "Fatima Hassan",
        role: "Director, Green Building Initiative",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
        content: "Their sustainable design solutions helped us achieve LEED certification. The team's knowledge of green building practices is impressive.",
        rating: 5,
    },
    {
        name: "Robert Taylor",
        role: "CFO, Coastal Resorts Ltd",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
        content: "Cost-effective solutions without compromising quality. Losos4 helped us optimize our MEP systems and reduce operational costs significantly.",
        rating: 5,
    },
    {
        name: "Chioma Nwankwo",
        role: "Architect, Design Studio Africa",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        content: "Collaborative and creative! Working with Losos4 on our architectural projects has been a pleasure. They truly understand design integration.",
        rating: 5,
    },
    {
        name: "Ahmed Ibrahim",
        role: "Operations Manager, Industrial Complex",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
        content: "Their fire safety audit and system upgrade saved us from potential disasters. Professional, thorough, and reliable service.",
        rating: 5,
    },
    {
        name: "Lisa Anderson",
        role: "VP Engineering, Smart Cities Initiative",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
        content: "Losos4 is at the forefront of engineering innovation. Their smart building solutions are transforming how we approach modern infrastructure.",
        rating: 5,
    },
];

export function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full glass border border-secondary/20 mb-4"
                    >
                        <span className="text-sm font-medium gradient-text">Client Testimonials</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Trusted by industry leaders across Africa for exceptional engineering solutions.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className="w-full"
                        >
                            <GlassCard className="p-8 md:p-12 relative">
                                {/* Quote Icon */}
                                <div className="absolute top-8 left-8 opacity-20">
                                    <Quote className="w-16 h-16 text-primary" />
                                </div>

                                <div className="relative z-10">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6 justify-center">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-accent text-accent"
                                            />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-lg gradient-text">
                                                {testimonials[currentIndex].name}
                                            </p>
                                            <p className="text-sm text-foreground/60">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <motion.button
                            onClick={() => paginate(-1)}
                            className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center hover:border-primary/50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                            onClick={() => paginate(1)}
                            className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center hover:border-primary/50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "w-8 bg-gradient-to-r from-primary to-secondary"
                                        : "bg-white/20 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
