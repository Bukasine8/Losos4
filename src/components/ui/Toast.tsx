"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, AlertCircle, Info } from "lucide-react";

interface ToastProps {
    message: string;
    type?: "success" | "error" | "info";
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

export function Toast({ message, type = "success", isVisible, onClose, duration = 4000 }: ToastProps) {
    useEffect(() => {
        if (isVisible && duration > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    const icons = {
        success: CheckCircle,
        error: AlertCircle,
        info: Info,
    };

    const colors = {
        success: "bg-green-500/10 border-green-500/20 text-green-500",
        error: "bg-red-500/10 border-red-500/20 text-red-500",
        info: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    };

    const Icon = icons[type];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 max-w-sm"
                >
                    <div className={`glass p-4 rounded-lg border ${colors[type]} shadow-lg backdrop-blur-xl`}>
                        <div className="flex items-start gap-3">
                            <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <p className="text-sm font-medium flex-1">{message}</p>
                            <button
                                onClick={onClose}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
