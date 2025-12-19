import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <div className="pt-24">
            <Section className="bg-losos-dark text-white min-h-[50vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Delivering excellence across complex engineering challenges.
                    </p>
                </div>
            </Section>

            <Section theme="light">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Real Projects */}
                    {[
                        { title: "Genset Installation", src: "1X1250kVA and 385kVA Genset Installation at PPPRA HQ Building, Abuja.jpeg", cat: "Power Systems" },
                        { title: "PPPRA HQ Building", src: "PPPRA HQ Building, Abuja..jpeg", cat: "Infrastructure" },
                        { title: "Power Distribution", src: "Power and Distribution Installation at PPRA HQ Building, Abuja.jpeg", cat: "Electrical" },
                        { title: "Mechanical Plant", src: "page_153_img_2.jpeg", cat: "Mechanical" },
                        { title: "Industrial Facility", src: "page_155_img_2.jpeg", cat: "Industrial" },
                        { title: "Tech Complex", src: "page_164_img_3.jpeg", cat: "Commercial" }
                    ].map((proj, i) => (
                        <Card key={i} className="group cursor-pointer p-0 overflow-hidden border-none hover:shadow-2xl">
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={`/images/Project_Images/${proj.src}`}
                                    alt={proj.title}
                                    fill
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-losos-blue/0 group-hover:bg-losos-blue/20 transition-colors duration-300" />
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-losos-blue uppercase tracking-widest mb-2">{proj.cat}</div>
                                <h3 className="text-xl font-bold mb-2 text-losos-dark">{proj.title}</h3>
                                <Link href={`/projects/project-${i}`} className="text-gray-500 text-sm hover:text-losos-blue flex items-center gap-1 transition-colors">
                                    View Case Study <span className="text-lg">→</span>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
}
