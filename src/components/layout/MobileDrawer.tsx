"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";
import Image from "next/image";

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: { name: string; href: string }[];
}

export function MobileDrawer({ isOpen, onClose, navItems }: MobileDrawerProps) {
    const pathname = usePathname();

    // Prevent scrolling when drawer is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    // Close drawer on Escape key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out md:hidden",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Side Drawer */}
            <div
                className={cn(
                    "fixed top-0 left-0 h-screen w-[85%] max-w-sm bg-gradient-to-b from-[#0F1428] to-[#070B1A] z-50 transform transition-transform duration-300 ease-out md:hidden flex flex-col shadow-2xl border-r border-white/5 overflow-hidden",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Header with Logo */}
                <div className="flex items-center px-5 py-5 border-b border-white/10 bg-[#070B1A]/80 flex-shrink-0">
                    <div className="relative w-11 h-11">
                        <Image
                            src="/images/Logo.png"
                            alt="Losos4 Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Navigation Links - Scrollable */}
                <nav className="flex-1 overflow-y-auto py-2 px-3 min-h-0">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className={cn(
                                            "block px-4 py-3.5 rounded-lg text-lg font-medium transition-all duration-200 touch-highlight",
                                            isActive
                                                ? "bg-losos-blue/15 text-losos-blue border-l-4 border-losos-blue"
                                                : "text-gray-200 hover:text-white hover:bg-white/8 active:bg-white/12"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer / CTA - Fixed at bottom */}
                <div className="p-5 border-t border-white/10 bg-[#070B1A]/90 space-y-3 flex-shrink-0">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold px-1">
                        Ready to get started?
                    </p>
                    <Button variant="primary" className="w-full justify-center text-base py-3.5" asChild onClick={onClose}>
                        <Link href="/schedule">Schedule a Meeting</Link>
                    </Button>
                </div>
            </div>

            {/* Drawer styles injection */}
            <style jsx>{`
                .touch-highlight {
                    -webkit-tap-highlight-color: transparent;
                }
            `}</style>
        </>
    );
}
