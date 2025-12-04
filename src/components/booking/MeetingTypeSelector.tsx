"use client";

import { motion } from "framer-motion";
import { Building2, Video, Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";

interface MeetingTypeSelectorProps {
    onSelect: (type: "physical" | "online") => void;
    selected?: "physical" | "online" | null;
}

export function MeetingTypeSelector({ onSelect, selected }: MeetingTypeSelectorProps) {
    const meetingTypes = [
        {
            type: "physical" as const,
            icon: Building2,
            title: "Physical Meeting",
            description: "Meet in person at our office or your preferred location for detailed discussions.",
        },
        {
            type: "online" as const,
            icon: Video,
            title: "Online Meeting",
            description: "Connect virtually via Google Meet, Zoom, or Microsoft Teams from anywhere.",
        },
    ];

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-2">Choose Meeting Type</h2>
                <p className="text-muted-foreground">
                    Select how you'd like to meet with our team
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {meetingTypes.map((meeting, index) => {
                    const Icon = meeting.icon;
                    const isSelected = selected === meeting.type;

                    return (
                        <motion.div
                            key={meeting.type}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <GlassCard
                                onClick={() => onSelect(meeting.type)}
                                className={`p-8 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${isSelected
                                        ? "border-primary shadow-lg shadow-primary/20 bg-primary/5"
                                        : "border-white/10 hover:border-primary/50"
                                    }`}
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    {/* Icon */}
                                    <div
                                        className={`p-4 rounded-full transition-colors ${isSelected ? "bg-primary/20" : "bg-muted"
                                            }`}
                                    >
                                        <Icon
                                            className={`h-10 w-10 ${isSelected ? "text-primary" : "text-muted-foreground"
                                                }`}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold">{meeting.title}</h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground">{meeting.description}</p>

                                    {/* Selection Indicator */}
                                    {isSelected && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="flex items-center gap-2 text-primary font-medium"
                                        >
                                            <Check className="h-5 w-5" />
                                            Selected
                                        </motion.div>
                                    )}
                                </div>
                            </GlassCard>
                        </motion.div>
                    );
                })}
            </div>

            {selected && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center"
                >
                    <Button size="lg" onClick={() => onSelect(selected)}>
                        Continue
                    </Button>
                </motion.div>
            )}
        </div>
    );
}
