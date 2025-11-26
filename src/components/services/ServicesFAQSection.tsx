import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How long does a typical electrical layout design take?",
        answer: "The timeline varies based on project complexity. For a standard residential project, it typically takes 1-2 weeks. Larger commercial or industrial projects may take 3-6 weeks. We provide a detailed schedule upon project assessment.",
    },
    {
        question: "Do you offer post-construction maintenance services?",
        answer: "Yes, we offer maintenance consultancy and can develop comprehensive maintenance schedules for mechanical and electrical systems to ensure long-term performance and safety.",
    },
    {
        question: "What certifications do your engineers hold?",
        answer: "Our lead engineers are registered with COREN (Council for the Regulation of Engineering in Nigeria) and are members of the NSE (Nigerian Society of Engineers). We also have team members with PMP and safety certifications.",
    },
    {
        question: "How do I request a quote for a project?",
        answer: "You can request a quote by filling out our contact form, emailing us directly at info@losos4.com, or calling our office. Please provide as much detail as possible about your project scope.",
    },
    {
        question: "What is your process for fire safety audits?",
        answer: "Our fire safety audit involves a thorough site inspection, review of existing systems against code requirements, identification of hazards, and a detailed report with recommendations for compliance and risk mitigation.",
    },
];

export function ServicesFAQSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
