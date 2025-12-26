import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-losos-dark text-white py-16 border-t border-white/10">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <Link href="/" className="inline-block mb-6">
                        <div className="relative w-16 h-16">
                            <Image
                                src="/images/Logo.png"
                                alt="Losos4 Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>
                    <p className="text-gray-400 max-w-sm">
                        Engineering You Can Trust. Results You Can Measure.
                        Delivering multidisciplinary engineering solutions for complex projects.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 text-losos-blue">Explore</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 text-losos-blue">Contact</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="mailto:losos4consultants@gmail.com" className="hover:text-white transition-colors">losos4consultants@gmail.com</a></li>
                        <li><a href="tel:+2348163723126" className="hover:text-white transition-colors">+234 816 372 3126</a></li>
                        <li>SUIT DD11, APO SPARKLIGHT PLAZA,<br />OPPOSITE LIVING FAITH CHURCH,<br />DURUNMI, ABUJA, Nigeria</li>
                    </ul>
                </div>
            </div>
            <div className="container mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Losos4 Consultants Ltd. All rights reserved.
            </div>
        </footer>
    );
}
