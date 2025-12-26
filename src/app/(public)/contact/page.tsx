import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="pt-24">
            <Section theme="dark">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
                        <p className="text-xl text-gray-300 mb-12">
                            Whether you are planning a new development, upgrading existing facilities,
                            or seeking engineering support for a complex project, Losos4 is ready to assist.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-losos-blue mb-2">Email</h3>
                                <p className="text-2xl"><a href="mailto:losos4consultants@gmail.com">losos4consultants@gmail.com</a></p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-losos-blue mb-2">Address</h3>
                                <p className="text-xl text-gray-300">
                                    SUIT DD11, APO SPARKLIGHT PLAZA,<br />
                                    OPPOSITE LIVING FAITH CHURCH,<br />
                                    DURUNMI, ABUJA, Nigeria
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-losos-blue mb-2">Phone</h3>
                                <p className="text-2xl"><a href="tel:+2348163723126">+234 816 372 3126</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 text-losos-dark">
                        <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                                    <input type="text" className="w-full h-12 px-4 border border-gray-300 focus:border-losos-blue focus:outline-none transition-colors" placeholder="Full Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                                    <input type="email" className="w-full h-12 px-4 border border-gray-300 focus:border-losos-blue focus:outline-none transition-colors" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider">Subject</label>
                                <input type="text" className="w-full h-12 px-4 border border-gray-300 focus:border-losos-blue focus:outline-none transition-colors" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                                <textarea className="w-full h-32 p-4 border border-gray-300 focus:border-losos-blue focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
                            </div>

                            <Button className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>

            {/* Google Map Section */}
            <Section theme="light" className="p-0" hasDivider divider="none">
                <div className="w-full h-[500px] relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.548450123531!2d7.476483174987158!3d9.013589991047076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d9b43e8d71d%3A0x673e4b7b3726588e!2sApo%20Sparklight%20Plaza!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Losos4 Office Location"
                        className="hover:filter-none transition-all duration-500"
                    ></iframe>

                    {/* Get Directions Overlay Button */}
                    <div className="absolute bottom-8 right-8 z-10 pointer-events-none">
                        <Button asChild className="shadow-xl border-2 border-white pointer-events-auto">
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Apo+Sparklight+Plaza+Abuja+Nigeria"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get Directions →
                            </a>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
