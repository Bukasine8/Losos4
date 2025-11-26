import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How long does it take to get a quote?",
        answer: "We typically respond to initial enquiries within 24 hours. For detailed project quotes, we may need 2-3 business days to assess your requirements thoroughly.",
    },
    {
        question: "Do you work on projects outside of Lagos?",
        answer: "Yes, we operate nationwide across Nigeria and have experience delivering projects in various states including Abuja, Port Harcourt, and Kano.",
    },
    {
        question: "What file formats do you accept for project documents?",
        answer: "We accept PDF, DOCX, DWG (AutoCAD), and standard image formats (JPG, PNG). If you have large files or other formats, please contact us for a secure upload link.",
    },
    {
        question: "Is there a consultation fee?",
        answer: "Our initial consultation to understand your project scope is free. Detailed site inspections or technical advisory services may incur a fee, which will be communicated upfront.",
    },
];

export function ContactFAQSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container max-w-3xl">
                <h2 className="text-2xl font-bold text-center mb-8">Common Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
