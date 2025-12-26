import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
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
                        { title: "PPPRA Headquarters Building", location: "Abuja", desc: "Fire fighting, detention, power distribution, and 1X1250kVA generator installation.", src: "PPPRA HQ Building, Abuja..jpeg", cat: "Government" },
                        { title: "National Bureau of Statistics (NBS)", location: "CBD Abuja", desc: "Comprehensive electrical power distribution and water supply systems.", src: "page_160_img_6.jpeg", cat: "Infrastructure" },
                        { title: "CBN Headquarters", location: "Abuja", desc: "Mechanical and electrical engineering works for the central bank facility.", src: "page_153_img_2.jpeg", cat: "Financial" },
                        { title: "Ministry of Foreign Affairs", location: "Abuja", desc: "Engineering consultancy and major installations.", src: "page_164_img_3.jpeg", cat: "Government" },
                        { title: "University of Abuja Projects", location: "Abuja", desc: "TETFUND projects including Lecture Theatres (Arts, Science, Management) and Laboratories.", src: "page_155_img_2.jpeg", cat: "Education" },
                        { title: "University of Abuja Hostels", location: "Permanent Site", desc: "Engineering services for Male & Female student hostels.", src: "page_156_img_1.jpeg", cat: "Education" },
                        { title: "FUT Minna (SET Phase 2)", location: "Minna", desc: "AC installations, lecture halls, and School of ICT engineering.", src: "page_152_img_1.jpeg", cat: "Education" },
                        { title: "UNIMALT (Universal Malting)", location: "Aba", desc: "Industrial engineering installations for large-scale malting facility.", src: "page_159_img_1.jpeg", cat: "Industrial" },
                        { title: "Jos University Teaching Hospital", location: "Jos", desc: "Medical Lab Complex, 2x5MVA Substation, and water storage systems.", src: "page_166_img_1.jpeg", cat: "Healthcare" },
                        { title: "AICL Area 3 Shopping Centre", location: "Abuja", desc: "Electrical installations and fire fighting systems upgrade.", src: "page_161_img_1.jpeg", cat: "Commercial" }
                    ].map((proj, i) => (
                        <ServiceCard key={i} className="group cursor-pointer p-0 overflow-hidden border-none hover:shadow-2xl h-full flex flex-col">
                            <div className="aspect-video relative overflow-hidden bg-gray-100">
                                <Image
                                    src={`/images/Project_Images/${proj.src}`}
                                    alt={proj.title}
                                    fill
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-losos-blue/0 group-hover:bg-losos-blue/20 transition-colors duration-300" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-xs font-bold text-losos-blue uppercase tracking-widest mb-2">{proj.cat}</div>
                                <h3 className="text-xl font-bold mb-2 text-losos-dark">{proj.title}</h3>
                                <p className="text-sm text-gray-400 mb-4">{proj.location}</p>
                                <p className="text-gray-600 text-sm mb-6 flex-grow">{proj.desc}</p>
                            </div>
                        </ServiceCard>
                    ))}
                </div>
            </Section>
        </div>
    );
}
