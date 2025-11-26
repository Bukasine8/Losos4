"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    showCursor?: boolean;
}

export function TypewriterText({
    text,
    className = "",
    speed = 50,
    delay = 0,
    showCursor = true,
}: TypewriterTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(
                () => {
                    setDisplayText((prev) => prev + text[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                },
                currentIndex === 0 ? delay : speed
            );

            return () => clearTimeout(timeout);
        } else {
            setIsComplete(true);
        }
    }, [currentIndex, text, speed, delay]);

    return (
        <span className={className}>
            {displayText}
            {showCursor && !isComplete && (
                <span className="inline-block w-0.5 h-5 bg-current ml-1 animate-pulse" />
            )}
        </span>
    );
}
