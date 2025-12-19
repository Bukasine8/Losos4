"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Phone, Mail, MessageCircle, X, Plus } from "lucide-react";

export function ContactFAB() {
    const [isOpen, setIsOpen] = useState(false);

    const contactOptions = [
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Call Us",
            href: "tel:+2348023248309",
            color: "bg-blue-500",
            delay: "delay-100"
        },
        {
            icon: <MessageCircle className="w-5 h-5" />,
            label: "WhatsApp",
            // Using the requested number: +234 816 372 3126
            href: "https://wa.me/2348163723126",
            color: "bg-[#25D366]",
            delay: "delay-200"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            href: "mailto:losos4consultantsltd@gmail.com",
            color: "bg-red-500",
            delay: "delay-300"
        }
    ];

    return (
        <div className="fixed bottom-20 md:bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-4 transition-all duration-300">
            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white shadow-lg transition-all duration-300",
                    "hover:scale-110 active:scale-95",
                    isOpen ? "bg-gray-600 rotate-45" : "bg-losos-blue rotate-0"
                )}
                aria-label="Contact Options"
            >
                <Plus className="w-8 h-8" />
            </button>

            {/* Options */}
            <div className={cn(
                "flex flex-col-reverse gap-3 transition-all duration-300",
                isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-10 invisible pointer-events-none"
            )}>
                {contactOptions.map((option, index) => (
                    <Link
                        key={option.label}
                        href={option.href}
                        target={option.label === "WhatsApp" ? "_blank" : undefined}
                        rel={option.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        className={cn(
                            "flex items-center gap-3 group transition-all duration-300 transform",
                            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                            option.delay
                        )}
                    >
                        {/* Label (hidden on mobile initially to save space, shown on hover/desktop) */}
                        <span className="bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-bold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-full ml-2 pointer-events-none">
                            {option.label}
                        </span>

                        <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform",
                            option.color
                        )}>
                            {option.icon}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
