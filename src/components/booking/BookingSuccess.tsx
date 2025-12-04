"use client";

import { motion } from "framer-motion";
import { CheckCircle, Calendar, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

interface BookingSuccessProps {
    meetingType: "physical" | "online";
    date: string;
    time: string;
    onAddToCalendar: () => void;
}

export function BookingSuccess({ meetingType, date, time, onAddToCalendar }: BookingSuccessProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    };

    const formatTime = (timeString: string) => {
        const [hours, minutes] = timeString.split(":");
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? "PM" : "AM";
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    };

    return (
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-2xl px-4"
            >
                <GlassCard className="p-12 text-center space-y-6">
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-block"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                            <div className="relative p-6 rounded-full bg-green-500/10">
                                <CheckCircle className="h-20 w-20 text-green-500" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                            Consultation Booked!
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Your {meetingType} meeting has been successfully scheduled
                        </p>
                    </motion.div>

                    {/* Meeting Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-6 rounded-lg bg-muted/50 border border-white/10"
                    >
                        <div className="flex items-center justify-center gap-2 text-lg font-semibold mb-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            {formatDate(date)}
                        </div>
                        <p className="text-2xl font-bold text-primary">{formatTime(time)}</p>
                    </motion.div>

                    {/* What's Next */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-left space-y-3 p-6 rounded-lg bg-background/50"
                    >
                        <h3 className="font-semibold text-lg">What happens next?</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">✓</span>
                                <span>You'll receive a confirmation email with meeting details</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">✓</span>
                                <span>Our team will review your project description and prepare</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">✓</span>
                                <span>We'll send a reminder 24 hours before your meeting</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Button
                            size="lg"
                            onClick={onAddToCalendar}
                            className="flex-1 group"
                        >
                            <Calendar className="mr-2 h-5 w-5" />
                            Add to Google Calendar
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="flex-1"
                        >
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Return Home
                            </Link>
                        </Button>
                    </motion.div>
                </GlassCard>
            </motion.div>
        </div>
    );
}
