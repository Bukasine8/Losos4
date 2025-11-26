"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FuturisticBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    variant?: "grid" | "dots" | "gradient" | "mesh";
}

export function FuturisticBackground({
    children,
    className,
    variant = "gradient",
}: FuturisticBackgroundProps) {
    return (
        <div className={cn("relative", className)}>
            {/* Background Layer */}
            {variant === "gradient" && (
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
                </div>
            )}

            {variant === "grid" && (
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: "50px 50px",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
                </div>
            )}

            {variant === "dots" && (
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                            backgroundSize: "30px 30px",
                        }}
                    />
                </div>
            )}

            {variant === "mesh" && (
                <div className="absolute inset-0">
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                        <defs>
                            <pattern
                                id="mesh-pattern"
                                x="0"
                                y="0"
                                width="100"
                                height="100"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 0 50 Q 25 0, 50 50 T 100 50"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-primary"
                                />
                                <path
                                    d="M 50 0 Q 100 25, 50 50 T 50 100"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-secondary"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
                    </svg>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
