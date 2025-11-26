import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TeamCTASection() {
    return (
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="container text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                <h2 className="text-3xl font-bold mb-6">Start Your Project With Our Expert Team</h2>
                <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    <Link href="/contact">
                        Request a Quote
                    </Link>
                </Button>
            </div>
        </section>
    );
}
