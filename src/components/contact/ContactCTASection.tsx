import { Button } from "@/components/ui/button";

export function ContactCTASection() {
    return (
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="container text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                    onClick={() => {
                        // Scroll to form
                        document.getElementById("name")?.focus();
                    }}
                >
                    Submit Your Request
                </Button>
            </div>
        </section>
    );
}
