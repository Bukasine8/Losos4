"use client";

import { Section } from "@/components/ui/Section";
import Image from "next/image";

const certificates = [
    {
        name: "ASHRAE Certificate",
        src: "/images/certs/ashrae.jpg",
        alt: "ASHRAE Certificate",
    },
    {
        name: "COREN Certificate",
        src: "/images/certs/coren.jpg",
        alt: "COREN Certificate",
    },
    {
        name: "BPP Certificate",
        src: "/images/certs/bpp.jpg",
        alt: "BPP Certificate",
    },
    {
        name: "CAC Certificate",
        src: "/images/certs/cac.jpg",
        alt: "CAC Certificate",
    }
];

export function Certificates() {
    return (
        <Section theme="blue" hasDivider divider="slope-left" className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Certificates & Licenses</h2>
                <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
                <p className="text-blue-100 max-w-2xl mx-auto">
                    We are fully certified and licensed to operate in compliance with industry standards and regulations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {certificates.map((cert) => (
                    <div
                        key={cert.name}
                        className="group relative bg-white p-4 rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300"
                    >
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-gray-100">
                            <Image
                                src={cert.src}
                                alt={cert.alt}
                                fill
                                loading="lazy"
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="font-semibold text-gray-900 group-hover:text-losos-blue transition-colors">
                                {cert.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
