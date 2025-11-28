"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Upload, CheckCircle2, Send } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { KineticButton } from "@/components/ui/KineticButton";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { supabaseBrowser } from "@/lib/supabase-browser";

export function ContactFormSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const formData = new FormData(e.currentTarget);
        const data = {
            full_name: formData.get("name") as string,
            company_name: formData.get("company") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            project_type: formData.get("project-type") as string,
            budget_range: formData.get("budget") as string,
            description: formData.get("description") as string,
        };

        try {
            let fileUrl = null;

            if (file) {
                const fileExt = file.name.split(".").pop();
                const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
                const filePath = `${fileName}`;

                const { error: uploadError } = await supabaseBrowser.storage
                    .from("project-files")
                    .upload(filePath, file);

                if (uploadError) throw uploadError;

                const { data: publicUrlData } = supabaseBrowser.storage
                    .from("project-files")
                    .getPublicUrl(filePath);

                fileUrl = publicUrlData.publicUrl;
            }

            const { error: insertError } = await supabaseBrowser
                .from("consultation_requests")
                .insert({
                    ...data,
                    file_url: fileUrl,
                });

            if (insertError) throw insertError;

            setSubmitStatus("success");
            setFile(null);
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative py-32 overflow-hidden">
            <FuturisticBackground variant="dots" />

            <div className="container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full glass border border-primary/20 mb-4"
                    >
                        <span className="text-sm font-medium gradient-text">Get In Touch</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display">
                        Let's Build <span className="gradient-text">Together</span>
                    </h1>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Ready to start your project? Reach out and let's discuss how we can help bring your vision to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassCard className="p-8">
                            <div className="mb-6">
                                <TypewriterEffect
                                    words={[
                                        { text: "Send" },
                                        { text: "us" },
                                        { text: "a" },
                                        { text: "Message", className: "gradient-text" },
                                    ]}
                                    className="text-2xl font-bold justify-start"
                                />
                            </div>

                            {submitStatus === "success" ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary mb-6">
                                        <CheckCircle2 className="h-10 w-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 gradient-text">Message Sent!</h3>
                                    <p className="text-foreground/70 mb-6">
                                        Thank you for reaching out. Our team will review your enquiry and get back to you shortly.
                                    </p>
                                    <motion.button
                                        onClick={() => setSubmitStatus("idle")}
                                        className="px-6 py-3 rounded-full glass border border-primary/30 hover:border-primary/60 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Send Another Message
                                    </motion.button>
                                </motion.div>
                            ) : submitStatus === "error" ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20 mb-6">
                                        <CheckCircle2 className="h-10 w-10 text-red-500 rotate-45" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-red-500">Something went wrong</h3>
                                    <p className="text-foreground/70 mb-6">
                                        Please try again later or contact us directly via email.
                                    </p>
                                    <motion.button
                                        onClick={() => setSubmitStatus("idle")}
                                        className="px-6 py-3 rounded-full glass border border-red-500/30 hover:border-red-500/60 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Try Again
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                className="glass border-white/10 focus:border-primary/50 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company" className="text-sm font-medium">Company (Optional)</Label>
                                            <Input
                                                id="company"
                                                name="company"
                                                placeholder="Your Company Ltd"
                                                className="glass border-white/10 focus:border-primary/50 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                                className="glass border-white/10 focus:border-primary/50 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+234..."
                                                required
                                                className="glass border-white/10 focus:border-primary/50 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="project-type" className="text-sm font-medium">Project Type</Label>
                                            <Select name="project-type">
                                                <SelectTrigger className="glass border-white/10 focus:border-primary/50">
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                                <SelectContent className="glass-strong border-white/20">
                                                    <SelectItem value="mechanical">Mechanical Design</SelectItem>
                                                    <SelectItem value="electrical">Electrical Design</SelectItem>
                                                    <SelectItem value="fire-safety">Fire Safety</SelectItem>
                                                    <SelectItem value="mep">MEP Services</SelectItem>
                                                    <SelectItem value="project-management">Project Management</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="budget" className="text-sm font-medium">Budget Range</Label>
                                            <Select name="budget">
                                                <SelectTrigger className="glass border-white/10 focus:border-primary/50">
                                                    <SelectValue placeholder="Select range" />
                                                </SelectTrigger>
                                                <SelectContent className="glass-strong border-white/20">
                                                    <SelectItem value="small">Below ₦5M</SelectItem>
                                                    <SelectItem value="medium">₦5M - ₦20M</SelectItem>
                                                    <SelectItem value="large">₦20M - ₦100M</SelectItem>
                                                    <SelectItem value="enterprise">Above ₦100M</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description" className="text-sm font-medium">Project Description</Label>
                                        <Textarea
                                            id="description"
                                            name="description"
                                            placeholder="Please describe your project requirements..."
                                            className="min-h-[150px] glass border-white/10 focus:border-primary/50 transition-colors resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">File Upload (Optional)</Label>
                                        <div className="border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors cursor-pointer glass relative">
                                            <input
                                                type="file"
                                                onChange={handleFileChange}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                            />
                                            <Upload className="h-10 w-10 text-primary mb-3" />
                                            <p className="text-sm text-foreground/70 mb-1">
                                                {file ? file.name : "Drag & drop files here, or click to select"}
                                            </p>
                                            <p className="text-xs text-foreground/50">
                                                PDF, DOCX, Images (Max 10MB)
                                            </p>
                                        </div>
                                    </div>

                                    <KineticButton
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Request"}
                                        <Send className="ml-2 h-5 w-5" />
                                    </KineticButton>
                                </form>
                            )}
                        </GlassCard>
                    </motion.div>

                    {/* Right Column: Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Contact Info */}
                        <GlassCard className="p-8">
                            <div className="mb-6">
                                <TypewriterEffect
                                    words={[
                                        { text: "Contact" },
                                        { text: "Information", className: "gradient-text" },
                                    ]}
                                    className="text-2xl font-bold justify-start"
                                />
                            </div>
                            <p className="text-foreground/70 mb-8">
                                Reach out to us directly through any of our official channels.
                            </p>

                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-4 rounded-lg glass border border-white/10 hover:border-primary/30 transition-colors"
                                >
                                    <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary">
                                        <MapPin className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Our Office</h3>
                                        <p className="text-foreground/60 text-sm">
                                            123 Engineering Way,<br />
                                            Victoria Island, Lagos,<br />
                                            Nigeria
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-4 rounded-lg glass border border-white/10 hover:border-secondary/30 transition-colors"
                                >
                                    <div className="p-3 rounded-full bg-gradient-to-r from-secondary to-accent">
                                        <Phone className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Phone</h3>
                                        <p className="text-foreground/60 text-sm">
                                            <a href="tel:+2341234567890" className="hover:text-primary transition-colors">+234 123 456 7890</a><br />
                                            <a href="tel:+2340987654321" className="hover:text-primary transition-colors">+234 098 765 4321</a>
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-4 rounded-lg glass border border-white/10 hover:border-accent/30 transition-colors"
                                >
                                    <div className="p-3 rounded-full bg-gradient-to-r from-accent to-primary">
                                        <Mail className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <p className="text-foreground/60 text-sm">
                                            <a href="mailto:info@losos4.com" className="hover:text-primary transition-colors">info@losos4.com</a><br />
                                            <a href="mailto:projects@losos4.com" className="hover:text-primary transition-colors">projects@losos4.com</a>
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-4 rounded-lg glass border border-white/10 hover:border-primary/30 transition-colors"
                                >
                                    <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary">
                                        <Clock className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Business Hours</h3>
                                        <p className="text-foreground/60 text-sm">
                                            Monday - Friday: 8:00 AM - 5:00 PM<br />
                                            Saturday: 9:00 AM - 2:00 PM
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </GlassCard>

                        {/* Google Maps */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden h-[400px] relative border-2 border-white/10"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7276437175!2d3.4207!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52f87f0c5e9%3A0x5e2e5c5e5e5e5e5e!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
