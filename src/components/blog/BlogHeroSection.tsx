export function BlogHeroSection() {
    return (
        <section className="py-20 bg-muted/30 border-b relative overflow-hidden">
            {/* Subtle geometric pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

            <div className="container text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Engineering Knowledge</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Sharing technical knowledge, case studies, and best practices from the forefront of the engineering industry.
                </p>
            </div>
        </section>
    );
}
