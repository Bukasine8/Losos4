import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TermsCTASection() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                <h3 className="text-2xl font-bold mb-4">Questions about these terms?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Our team is here to help clarify any questions you may have about our Terms & Conditions.
                </p>
                <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    <Link href="/contact">
                        Contact Team
                    </Link>
                </Button>
            </div>
        </section>
    );
}
