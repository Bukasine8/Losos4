"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface GoogleCalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddToCalendar: () => void;
    meetingTitle: string;
    date: string;
    time: string;
    description: string;
    location?: string;
}

export function GoogleCalendarModal({
    isOpen,
    onClose,
    onAddToCalendar,
    meetingTitle,
    date,
    time,
    description,
    location,
}: GoogleCalendarModalProps) {
    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
            // Trap focus
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleAddToCalendar = () => {
        // Generate Google Calendar URL
        const startDateTime = new Date(`${date}T${time}`);
        const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hour later

        const formatGoogleDate = (date: Date) => {
            return date.toISOString().replace(/-|:|\.\d+/g, "");
        };

        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            meetingTitle
        )}&dates=${formatGoogleDate(startDateTime)}/${formatGoogleDate(endDateTime)}&details=${encodeURIComponent(
            description
        )}${location ? `&location=${encodeURIComponent(location)}` : ""}`;

        window.open(calendarUrl, "_blank");
        onAddToCalendar();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass max-w-md w-full p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-background/90 shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Calendar className="h-12 w-12 text-primary" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center space-y-4 mb-8">
                                <h2 className="text-2xl font-bold">Add to Google Calendar?</h2>
                                <p className="text-muted-foreground">
                                    We can add this meeting to your Google Calendar so you don't forget.
                                    You'll receive reminders before the meeting.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-3">
                                <Button
                                    size="lg"
                                    onClick={handleAddToCalendar}
                                    className="w-full group"
                                >
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Add to Calendar
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="lg"
                                    onClick={onClose}
                                    className="w-full"
                                >
                                    No Thanks
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
