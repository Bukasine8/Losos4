"use client";

import { ContactFAB } from "@/components/ui/ContactFAB";
import dynamic from 'next/dynamic';

const Chatbot = dynamic(() => import('@/components/ui/Chatbot').then(mod => mod.Chatbot), {
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
