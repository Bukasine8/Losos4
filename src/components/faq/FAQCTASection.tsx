import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FAQCTASection() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Contact our team for more details or project-specific queries. We're here to help you find the right engineering solution.
                </p>
                <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    <Link href="/contact">
                        Get in Touch
                    </Link>
                </Button>
            </div>
        </section>
    );
}
