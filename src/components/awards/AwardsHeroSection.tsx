export function AwardsHeroSection() {
    return (
        <section className="py-20 bg-muted/30 border-b relative overflow-hidden">
            {/* Subtle abstract graphic overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)",
                    backgroundSize: "32px 32px"
                }}
            ></div>

            <div className="container text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Awards & Recognition
                </h1>
                <h3 className="text-xl text-muted-foreground max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    Celebrating Excellence in Engineering and Innovation.
                </h3>
            </div>
        </section>
    );
}
