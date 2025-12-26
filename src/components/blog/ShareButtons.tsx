"use client";

import { Button } from "@/components/ui/Button";
import { Facebook, Linkedin, PinIcon, Send, Share2, Twitter } from "lucide-react";
// Note: Lucide doesn't have a specific WhatsApp icon easily accessible in all versions, 
// so we might use a generic MessageCircle or sticking to available ones. 
// However, 'Youtube', 'Facebook', 'Twitter', 'Instagram' exist. 
// For WhatsApp we can try 'MessageCircle' or 'Phone'. 
// Actually, let's stick to the ones requested: Facebook, Instagram (Link), Pinterest, WhatsApp, X, Telegram.

import { usePathname } from "next/navigation";

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
    const pathname = usePathname();
    const url = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : `https://losos4.com/blog/${slug}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: "hover:text-blue-600"
        },
        {
            name: "X (Twitter)",
            icon: Twitter,
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: "hover:text-black"
        },
        {
            name: "WhatsApp",
            icon: Send, // Using Send as proxy for WhatsApp roughly
            url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            color: "hover:text-green-500"
        },
        {
            name: "Telegram",
            icon: Send,
            url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
            color: "hover:text-blue-400"
        },
        {
            name: "Pinterest",
            icon: PinIcon,
            url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
            color: "hover:text-red-600"
        }
    ];

    return (
        <div className="flex flex-col gap-4 py-8 border-t border-b border-gray-100 my-8">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Share this article
            </h3>
            <div className="flex flex-wrap gap-2">
                {shareLinks.map((platform) => (
                    <Button
                        key={platform.name}
                        variant="outline"
                        size="sm"
                        asChild
                        className={`transition-colors ${platform.color}`}
                    >
                        <a href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${platform.name}`}>
                            <platform.icon className="w-4 h-4 mr-2" />
                            {platform.name}
                        </a>
                    </Button>
                ))}
            </div>
        </div>
    );
}
