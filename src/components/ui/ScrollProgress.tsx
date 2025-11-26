"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / scrollHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", updateScrollProgress);
        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-primary via-secondary to-accent origin-left"
            style={{ scaleX: scrollProgress / 100 }}
            initial={{ scaleX: 0 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-sm opacity-50" />
        </motion.div>
    );
}
