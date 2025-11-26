export function ServicesHeroSection() {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop')",
                }}
            />
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />

            {/* Content */}
            <div className="container relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Our Services
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-200 font-light mb-6">
                    Comprehensive Engineering & Consultancy Solutions
                </h2>
                <p className="max-w-2xl mx-auto text-slate-300 text-lg">
                    From mechanical and electrical design to fire safety and project management,
                    we deliver precision-engineered solutions for complex infrastructure challenges.
                </p>
            </div>
        </section>
    );
}
