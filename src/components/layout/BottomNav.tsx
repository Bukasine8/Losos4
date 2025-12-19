"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Briefcase, Wrench, Phone } from "lucide-react";

export function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: <Home className="w-6 h-6" /> },
        { name: "Services", href: "/services", icon: <Wrench className="w-6 h-6" /> },
        { name: "Projects", href: "/projects", icon: <Briefcase className="w-6 h-6" /> },
        { name: "Contact", href: "/contact", icon: <Phone className="w-6 h-6" /> },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-losos-dark/95 backdrop-blur-lg border-t border-white/10 md:hidden h-16 pb-2">
            <nav className="h-full">
                <ul className="flex justify-around items-center h-full max-w-md mx-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.name} className="flex-1 h-full">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex flex-col items-center justify-center h-full w-full gap-1 transition-colors duration-200",
                                        isActive
                                            ? "text-losos-blue"
                                            : "text-gray-400 hover:text-gray-200"
                                    )}
                                >
                                    <span className={cn(
                                        "transition-transform duration-200",
                                        isActive ? "scale-110" : "scale-100"
                                    )}>
                                        {item.icon}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-wider font-medium">
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
