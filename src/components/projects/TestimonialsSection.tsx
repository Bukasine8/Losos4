import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Losos4 delivered exceptional electrical designs for our estate. Their attention to detail and adherence to safety standards saved us significant costs during construction.",
        author: "Engr. Tunde Bakare",
        role: "Project Director",
        company: "Greenfield Estates",
    },
    {
        quote: "Their fire safety audit was thorough and professional. The recommendations they implemented have made our factory one of the safest in the region.",
        author: "Sarah Oladipo",
        role: "Operations Manager",
        company: "Apex Manufacturing",
    },
    {
        quote: "Professionalism at its peak. The project management team kept our timeline on track despite numerous external challenges.",
        author: "Chief Emeka Okonkwo",
        role: "CEO",
        company: "Okonkwo Towers Ltd",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-muted/20 p-8 rounded-xl border relative">
                            <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />
                            <p className="text-muted-foreground italic mb-6 relative z-10 pt-8">
                                "{item.quote}"
                            </p>
                            <div>
                                <div className="font-bold text-foreground">{item.author}</div>
                                <div className="text-sm text-primary">{item.role}</div>
                                <div className="text-xs text-muted-foreground">{item.company}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
