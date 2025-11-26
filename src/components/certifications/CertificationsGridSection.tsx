"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FileCheck, Maximize2 } from "lucide-react";

const certifications = [
    {
        title: "COREN Firm Registration",
        regNo: "EF.12345",
        issued: "2015",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop", // Placeholder
    },
    {
        title: "Corporate Affairs Commission",
        regNo: "RC 123456",
        issued: "2010",
        image: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&w=2670&auto=format&fit=crop", // Placeholder
    },
    {
        title: "ISO 9001:2015",
        regNo: "QMS-2023-001",
        issued: "2023",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2670&auto=format&fit=crop", // Placeholder
    },
    {
        title: "NSE Corporate Member",
        regNo: "C00123",
        issued: "2016",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2672&auto=format&fit=crop", // Placeholder
    },
];

export function CertificationsGridSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div
                                    className="group cursor-pointer rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                                >
                                    <div className="relative aspect-[3/4] bg-muted">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url('${cert.image}')` }}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                            <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-1 line-clamp-1">{cert.title}</h3>
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>{cert.regNo}</span>
                                            <span>{cert.issued}</span>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                                <div className="relative aspect-[4/3] w-full bg-white rounded-lg overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url('${cert.image}')` }}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}
