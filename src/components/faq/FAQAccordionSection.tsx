"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqData = {
    "General": [
        {
            question: "What services does Losos4 Engineering provide?",
            answer: "We offer comprehensive engineering consultancy services including Mechanical Design, Electrical Design, Fire Safety Engineering, MEP (Mechanical, Electrical, Plumbing) Integration, Project Management, and Compliance Auditing. Our team specializes in commercial, industrial, and residential projects across Nigeria."
        },
        {
            question: "How long does it take to get a quote?",
            answer: "We typically respond to initial enquiries within 24 hours. For detailed project quotes, we may need 2-3 business days to assess your requirements thoroughly and provide an accurate estimate."
        },
        {
            question: "Do you work on projects outside of Lagos?",
            answer: "Yes, we operate nationwide across Nigeria and have successfully delivered projects in various states including Abuja, Port Harcourt, Kano, and other major cities."
        },
    ],
    "Mechanical": [
        {
            question: "What HVAC systems do you design?",
            answer: "We design a wide range of HVAC systems including central air conditioning, VRF/VRV systems, chilled water systems, industrial ventilation, and specialized climate control for data centers and cleanrooms. All designs comply with ASHRAE standards."
        },
        {
            question: "Can you retrofit existing mechanical systems?",
            answer: "Absolutely. We specialize in retrofitting and upgrading existing mechanical systems to improve energy efficiency, meet current codes, or accommodate building expansions. Our team conducts thorough assessments before recommending solutions."
        },
    ],
    "Electrical": [
        {
            question: "Do you handle high-voltage electrical design?",
            answer: "Yes, our electrical team is experienced in both low-voltage and high-voltage power distribution systems. We design substations, transformers, switchgear, and complete electrical infrastructure for industrial and commercial facilities."
        },
        {
            question: "What about renewable energy integration?",
            answer: "We integrate renewable energy solutions including solar PV systems, battery storage, and hybrid power systems. Our designs optimize energy efficiency and reduce carbon footprint while ensuring grid compliance."
        },
    ],
    "Fire Safety": [
        {
            question: "What fire safety services do you offer?",
            answer: "We provide fire risk assessments, fire suppression system design (sprinklers, foam, gas), fire alarm and detection systems, smoke control systems, emergency evacuation planning, and compliance audits against NFPA and local fire codes."
        },
        {
            question: "How often should fire safety audits be conducted?",
            answer: "We recommend annual fire safety audits for commercial and industrial facilities. High-risk environments like manufacturing plants or chemical storage facilities may require more frequent inspections (quarterly or bi-annually)."
        },
    ],
    "Project Management": [
        {
            question: "What is your project management approach?",
            answer: "We follow PMI (Project Management Institute) best practices, utilizing methodologies like PRINCE2 and Agile where appropriate. Our approach includes detailed planning, risk management, stakeholder communication, quality control, and timely delivery within budget."
        },
        {
            question: "Can you manage multi-disciplinary projects?",
            answer: "Yes, our strength lies in coordinating multi-disciplinary engineering projects. We have experience managing complex MEP projects that require seamless integration of mechanical, electrical, plumbing, and fire safety systems."
        },
    ],
};

const categories = Object.keys(faqData);

export function FAQAccordionSection() {
    const [activeCategory, setActiveCategory] = useState("General");

    return (
        <section className="py-20 bg-background">
            <div className="container max-w-4xl">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "rounded-full transition-all duration-300",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "hover:bg-primary/10 hover:text-primary"
                            )}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* FAQ Accordion */}
                <div className="animate-in fade-in duration-300">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqData[activeCategory as keyof typeof faqData].map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
                            >
                                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
