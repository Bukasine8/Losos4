"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "relative overflow-hidden font-bold uppercase transition-colors duration-300 flex items-center justify-center disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-losos-blue text-white border border-losos-blue hover:bg-white hover:text-losos-blue",
                secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-losos-dark",
                outline: "bg-transparent text-current border border-current hover:opacity-80",
                ghost: "bg-transparent text-current hover:bg-white/10",
            },
            size: {
                sm: "h-9 px-4 text-xs tracking-wider",
                md: "h-12 px-6 text-sm tracking-wider",
                lg: "h-14 px-8 text-base tracking-widest",
                icon: "h-10 w-10 p-0",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

// Wrapping motion with Slot is tricky. 
// If asChild is true, we simply pass props to Slot and lose framer-motion props unless we compose them.
// For now, if asChild is used (for Links), we disable motion or apply it via wrapper? 
// Actually, simple hover effects in CSS (defined in cva) are enough for Links. 
// The framer-motion props (whileHover/whileTap) were adding scale.
// We can add scale via CSS active/hover states or keep it simple.
// Let's rely on CSS transition for scale if possible, or just accept that Links won't have the Spring physics.
// OR we can make the component render a motion.button by default, or an encapsulated MotionSlot.

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const classes = cn(buttonVariants({ variant, size, className }));

        // If asChild is requested (e.g., Link as child), don't pass framer-motion props
        // to the child Slot since types and event signatures may differ.
        if (asChild) {
            const Comp = Slot as any;
            return <Comp className={classes} ref={ref as any} {...props} />;
        }

        // Default: render a motion.button with motion props
        return (
            <motion.button
                className={classes}
                ref={ref}
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.98, transition: { type: "spring", stiffness: 400 } }}
                {...(props as HTMLMotionProps<"button">)}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
