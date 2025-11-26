export function TeamHeroSection() {
    return (
        <section className="py-20 bg-muted/30 border-b relative overflow-hidden">
            {/* Subtle background texture */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                }}
            ></div>

            <div className="container text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Our Expert Team
                </h1>
                <h3 className="text-xl text-muted-foreground max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    Experienced Engineers Driving Innovation & Compliance.
                </h3>
            </div>
        </section>
    );
}
