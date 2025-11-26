"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Services",
        href: "/services",
        children: [
            { name: "Mechanical Design", href: "/services/mechanical" },
            { name: "Electrical Design", href: "/services/electrical" },
            { name: "Fire Safety", href: "/services/fire-safety" },
            { name: "Project Management", href: "/services/project-management" },
            { name: "Consulting", href: "/services/consulting" },
        ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-500",
                isScrolled
                    ? "glass-strong border-b border-white/10 py-3"
                    : "bg-transparent py-5"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex items-center justify-between">
                {/* Logo with Gradient Animation */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <Logo className="relative z-10" />
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link, index) => {
                        if (link.children) {
                            return (
                                <DropdownMenu key={link.name}>
                                    <DropdownMenuTrigger asChild>
                                        <motion.button
                                            className={cn(
                                                "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium",
                                                "transition-all duration-300",
                                                "hover:bg-white/5 hover:text-primary",
                                                "focus:outline-none relative group"
                                            )}
                                            whileHover={{ scale: 1.05 }}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            {link.name}
                                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </motion.button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="start"
                                        className="glass-strong border-white/10 w-56 mt-2"
                                    >
                                        {link.children.map((child) => (
                                            <DropdownMenuItem key={child.name} asChild>
                                                <Link
                                                    href={child.href}
                                                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                                                >
                                                    {child.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            );
                        }
                        return (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 rounded-lg text-sm font-medium",
                                        "transition-all duration-300 group",
                                        "hover:bg-white/5",
                                        pathname === link.href
                                            ? "text-primary"
                                            : "text-foreground/80 hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                    {/* Animated underline */}
                                    <span
                                        className={cn(
                                            "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300",
                                            pathname === link.href
                                                ? "w-3/4"
                                                : "w-0 group-hover:w-3/4"
                                        )}
                                    />
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* CTA Button */}
                <motion.div
                    className="hidden md:flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link href="/contact">
                        <motion.button
                            className={cn(
                                "relative px-6 py-2.5 rounded-full font-semibold text-sm",
                                "bg-gradient-to-r from-primary via-secondary to-accent",
                                "text-white shadow-lg overflow-hidden group"
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Get a Quote</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary"
                                initial={{ x: "100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden glass rounded-lg"
                            aria-label="Open Menu"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="glass-strong border-l border-white/10 w-[300px] sm:w-[400px]">
                        <div className="flex flex-col gap-6 mt-6">
                            <Logo />
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="flex flex-col gap-2">
                                        {link.children ? (
                                            <div className="flex flex-col gap-2">
                                                <span className="font-semibold text-lg gradient-text">
                                                    {link.name}
                                                </span>
                                                <div className="pl-4 flex flex-col gap-2 border-l-2 border-primary/30">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className="text-muted-foreground hover:text-primary transition-colors py-1"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "text-lg font-medium hover:text-primary transition-colors py-1",
                                                    pathname === link.href
                                                        ? "text-primary gradient-text"
                                                        : "text-foreground/80"
                                                )}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>
                            <div className="mt-auto">
                                <Link href="/contact" className="block">
                                    <button className="w-full px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-shadow">
                                        Get a Quote
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.header>
    );
}
