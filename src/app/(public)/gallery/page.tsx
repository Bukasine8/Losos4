import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import Image from "next/image";

export default function GalleryPage() {
    return (
        <div className="pt-24">
            <Section theme="dark">
                <h1 className="text-5xl font-bold mb-4 text-center">Project Gallery</h1>
                <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Visualizing engineering excellence across our portfolio.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        "1X1250kVA and 385kVA Genset Installation at PPPRA HQ Building, Abuja.jpeg",
                        "PPPRA HQ Building, Abuja..jpeg",
                        "Power and Distribution Installation at PPRA HQ Building, Abuja.jpeg",
                        "page_152_img_1.jpeg",
                        "page_153_img_2.jpeg",
                        "page_155_img_2.jpeg",
                        "page_159_img_4.jpeg",
                        "page_160_img_5.jpeg",
                        "page_164_img_3.jpeg"
                    ].map((src, i) => (
                        <div key={i} className={`relative group overflow-hidden bg-gray-800 ${i % 3 === 0 ? 'md:col-span-2' : ''} h-64 md:h-80`}>
                            <Image
                                src={`/images/Project_Images/${src}`}
                                alt={`Project Image ${i + 1}`}
                                fill
                                loading="lazy"
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                <span className="text-white font-bold text-lg uppercase tracking-widest border border-white px-4 py-2 backdrop-blur-sm">View Details</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
