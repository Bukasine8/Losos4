"use client";

import dynamic from "next/dynamic";

// Lazy load heavy interactive components client-side only
const ContactFAB = dynamic(() => import("@/components/ui/ContactFAB").then(mod => ({ default: mod.ContactFAB })), {
    ssr: false,
    loading: () => null
});

const Chatbot = dynamic(() => import("@/components/ui/Chatbot").then(mod => ({ default: mod.Chatbot })), {
    ssr: false,
    loading: () => null
});

export function ClientProviders() {
    return (
        <>
            <ContactFAB />
            <Chatbot />
        </>
    );
}
