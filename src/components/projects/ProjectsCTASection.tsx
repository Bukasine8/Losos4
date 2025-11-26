import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ProjectsCTASection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
                <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                    Let's discuss how our engineering expertise can bring your vision to life safely and efficiently.
                </p>
                <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    <Link href="/contact">
                        Get a Quote
                    </Link>
                </Button>
            </div>
        </section>
    );
}
