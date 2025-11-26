export function FAQHeroSection() {
    return (
        <section className="py-20 bg-muted/30 border-b relative overflow-hidden">
            {/* Subtle technical pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
                }}
            ></div>

            <div className="container text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Frequently Asked Questions
                </h1>
                <h3 className="text-xl text-muted-foreground max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    Answers to common queries about our services, processes, and engagement.
                </h3>
            </div>
        </section>
    );
}
