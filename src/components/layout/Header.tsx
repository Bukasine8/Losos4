"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "./MobileDrawer";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-white/10 bg-losos-dark/95 backdrop-blur-md",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 relative z-50">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-visible ml-2 md:ml-20">
                        <Image
                            src="/images/Logo.png"
                            alt="Losos4 Logo"
                            fill
                            className="object-contain scale-125 md:scale-[3.5]"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium uppercase tracking-widest hover:text-losos-blue transition-colors",
                                pathname === item.href ? "text-losos-blue" : "text-gray-300"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" asChild>
                        <Link href="/schedule">Schedule a Meeting</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white z-50 p-3 rounded-lg hover:bg-white/10 transition-colors active:scale-95 touch-highlight"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={cn("w-full h-0.5 bg-white transition-all duration-300 origin-center", mobileMenuOpen && "rotate-45 translate-y-2.5")} />
                        <span className={cn("w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen && "opacity-0")} />
                        <span className={cn("w-full h-0.5 bg-white transition-all duration-300 origin-center", mobileMenuOpen && "-rotate-45 -translate-y-2.5")} />
                    </div>
                </button>

                {/* Mobile Drawer */}
                <MobileDrawer
                    isOpen={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    navItems={navItems}
                />
            </div>
        </header>
    );
}
