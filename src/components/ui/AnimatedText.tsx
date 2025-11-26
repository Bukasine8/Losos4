"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
    children: string;
    className?: string;
    variant?: "gradient" | "glitch" | "typewriter" | "reveal";
    gradient?: "primary" | "accent" | "cyber";
}

export function AnimatedText({
    children,
    className,
    variant = "gradient",
    gradient = "primary",
}: AnimatedTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    // Typewriter effect
    useEffect(() => {
        if (variant === "typewriter") {
            if (currentIndex < children.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(children.slice(0, currentIndex + 1));
                    setCurrentIndex(currentIndex + 1);
                }, 50);
                return () => clearTimeout(timeout);
            }
        }
    }, [currentIndex, children, variant]);

    const gradients = {
        primary: "gradient-text",
        accent: "gradient-text-accent",
        cyber: "gradient-text-cyber",
    };

    if (variant === "gradient") {
        return (
            <span className={cn(gradients[gradient], "animate-gradient-shift", className)}>
                {children}
            </span>
        );
    }

    if (variant === "typewriter") {
        return (
            <span className={cn(className)}>
                {displayText}
                <motion.span
                    className="inline-block w-0.5 h-[1em] bg-primary ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                />
            </span>
        );
    }

    if (variant === "reveal") {
        return (
            <motion.span
                className={cn("inline-block", className)}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {children}
            </motion.span>
        );
    }

    if (variant === "glitch") {
        return (
            <span className={cn("relative inline-block", className)}>
                <span className="relative z-10">{children}</span>
                <span
                    className="absolute top-0 left-0 text-primary opacity-70 animate-pulse"
                    style={{ clipPath: "inset(0 0 50% 0)" }}
                >
                    {children}
                </span>
                <span
                    className="absolute top-0 left-0 text-accent opacity-70 animate-pulse"
                    style={{ clipPath: "inset(50% 0 0 0)", animationDelay: "0.1s" }}
                >
                    {children}
                </span>
            </span>
        );
    }

    return <span className={className}>{children}</span>;
}
