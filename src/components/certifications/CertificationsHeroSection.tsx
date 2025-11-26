export function CertificationsHeroSection() {
    return (
        <section className="py-20 bg-muted/30 border-b relative overflow-hidden">
            {/* Subtle blueprint pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            ></div>

            <div className="container text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Certifications & Licenses
                </h1>
                <h3 className="text-xl text-muted-foreground max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    Ensuring Compliance, Expertise & Professional Standards.
                </h3>
            </div>
        </section>
    );
}
