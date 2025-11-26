import { Award } from "lucide-react";

export function FeaturedRecognitionSection() {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/20" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent blur-3xl opacity-20 rounded-full" />
                            <Award className="h-48 w-48 text-accent relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 text-center lg:text-left">
                        <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
                            International Recognition
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            IMechE Global Engineering Excellence Award
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
                            We are honored to be recognized by the Institution of Mechanical Engineers (IMechE) for our groundbreaking work in sustainable industrial cooling systems. This award highlights our commitment to pushing the boundaries of engineering efficiency on a global scale.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <div className="text-2xl font-bold text-accent mb-1">Global</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Scope</div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <div className="text-2xl font-bold text-accent mb-1">Sustainability</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Focus</div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <div className="text-2xl font-bold text-accent mb-1">2023</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Year</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
