export function ProjectsHeroSection() {
    return (
        <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop')",
                }}
            />
            <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />

            {/* Content */}
            <div className="container relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Our Projects
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-light">
                    Delivering Safe, Efficient & Compliant Engineering Solutions Across Diverse Projects.
                </p>
            </div>
        </section>
    );
}
