import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "default" | "service";
}

export function Card({ children, className, variant = "default", ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white p-8 transition-transform duration-300 hover:-translate-y-2 relative group overflow-hidden border border-transparent",
                variant === "service" && "hover:border-losos-blue hover:shadow-xl",
                className
            )}
            {...props}
        >
            {variant === "service" && (
                <div className="absolute top-0 left-0 w-1 h-full bg-losos-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            )}
            {children}
        </div>
    );
}
