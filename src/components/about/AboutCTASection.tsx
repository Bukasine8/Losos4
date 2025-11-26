import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutCTASection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Work With Our Expert Engineering Team</h2>
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
