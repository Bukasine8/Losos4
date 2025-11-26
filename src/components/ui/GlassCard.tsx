"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "strong" | "tinted";
    hover?: boolean;
}

export function GlassCard({
    children,
    className,
    variant = "default",
    hover = true,
}: GlassCardProps) {
    const variants = {
        default: "glass",
        strong: "glass-strong",
        tinted: "glass bg-primary/5",
    };

    return (
        <div
            className={cn(
                "rounded-2xl p-6 transition-all duration-300",
                variants[variant],
                hover && "hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20",
                className
            )}
        >
            {children}
        </div>
    );
}
