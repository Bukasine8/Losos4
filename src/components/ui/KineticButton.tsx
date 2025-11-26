"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "accent";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
}

export function KineticButton({
    children,
    className,
    onClick,
    variant = "primary",
    size = "md",
    disabled = false,
}: KineticButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const variants = {
        primary: "bg-gradient-to-r from-primary to-secondary text-white",
        secondary: "bg-gradient-to-r from-secondary to-accent text-white",
        accent: "bg-gradient-to-r from-accent to-primary text-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.button
            className={cn(
                "relative overflow-hidden rounded-full font-semibold",
                "transition-all duration-300",
                "shadow-lg hover:shadow-2xl",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                variants[variant],
                sizes[size],
                className
            )}
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Magnetic glow effect */}
            {isHovered && (
                <motion.div
                    className="absolute w-32 h-32 rounded-full bg-white/30 blur-xl"
                    style={{
                        left: mousePosition.x - 64,
                        top: mousePosition.y - 64,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}
