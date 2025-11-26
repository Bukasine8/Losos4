"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Column 1: Brand & Quick Nav */}
                    <div className="space-y-6">
                        <Logo />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Professional engineering consultancy delivering innovative mechanical, electrical, and fire safety solutions for modern infrastructure.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="https://twitter.com" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="https://facebook.com" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="https://instagram.com" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/services/mechanical" className="hover:text-primary transition-colors">Mechanical Design</Link>
                            </li>
                            <li>
                                <Link href="/services/electrical" className="hover:text-primary transition-colors">Electrical Design</Link>
                            </li>
                            <li>
                                <Link href="/services/fire-safety" className="hover:text-primary transition-colors">Fire Safety Management</Link>
                            </li>
                            <li>
                                <Link href="/services/project-management" className="hover:text-primary transition-colors">Project Management</Link>
                            </li>
                            <li>
                                <Link href="/services/consulting" className="hover:text-primary transition-colors">MEP Consulting</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                                <span>
                                    123 Engineering Way,<br />
                                    Victoria Island, Lagos,<br />
                                    Nigeria
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-primary" />
                                <a href="tel:+2341234567890" className="hover:text-primary transition-colors">+234 123 456 7890</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0 text-primary" />
                                <a href="mailto:info@losos4.com" className="hover:text-primary transition-colors">info@losos4.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to our newsletter for the latest engineering insights and company news.
                        </p>
                        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-background"
                                aria-label="Email address for newsletter"
                            />
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom Row: Legal & Copyright */}
                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
                    </div>
                    <div className="text-center md:text-right">
                        <p>© {new Date().getFullYear()} Losos4 Engineering. All rights reserved.</p>
                        <p className="text-xs mt-1">RC: 123456 | COREN: EF.1234</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
