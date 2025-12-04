"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Edit2, Calendar, Clock, MapPin, Video, User, Mail, Phone, Building, FileText } from "lucide-react";
import type { PersonalInfoData } from "./PersonalInfoForm";
import type { MeetingDetailsData } from "./MeetingDetailsForm";

interface ReviewConfirmationProps {
    meetingType: "physical" | "online";
    personalInfo: PersonalInfoData;
    meetingDetails: MeetingDetailsData;
    onConfirm: () => void;
    onEdit: (step: "personal" | "details") => void;
    onBack: () => void;
}

export function ReviewConfirmation({
    meetingType,
    personalInfo,
    meetingDetails,
    onConfirm,
    onEdit,
    onBack,
}: ReviewConfirmationProps) {
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

    const getLocationText = () => {
        if (meetingType === "online") {
            const platforms: Record<string, string> = {
                "google-meet": "Google Meet",
                "zoom": "Zoom",
                "microsoft-teams": "Microsoft Teams",
            };
            return platforms[meetingDetails.platform || ""] || meetingDetails.platform;
        }

        const locations: Record<string, string> = {
            "office": "Our Office",
            "client-site": "Client Site",
            "other": meetingDetails.address || "Other Location",
        };
        return locations[meetingDetails.location || ""] || meetingDetails.location;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Review Your Booking</h2>
                <p className="text-muted-foreground">
                    Please review your information before confirming
                </p>
            </div>

            <div className="space-y-4">
                {/* Personal Information */}
                <GlassCard className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <User className="h-5 w-5 text-primary" />
                            Personal Information
                        </h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onEdit("personal")}
                            className="text-primary hover:text-primary"
                        >
                            <Edit2 className="h-4 w-4 mr-1" />
                            Edit
                        </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                            <User className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                                <p className="text-muted-foreground">Name</p>
                                <p className="font-medium">{personalInfo.fullName}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                                <p className="text-muted-foreground">Email</p>
                                <p className="font-medium">{personalInfo.email}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                                <p className="text-muted-foreground">Phone</p>
                                <p className="font-medium">{personalInfo.phone}</p>
                            </div>
                        </div>
                        {personalInfo.companyName && (
                            <div className="flex items-start gap-2">
                                <Building className="h-4 w-4 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="text-muted-foreground">Company</p>
                                    <p className="font-medium">{personalInfo.companyName}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </GlassCard>

                {/* Meeting Details */}
                <GlassCard className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            Meeting Details
                        </h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onEdit("details")}
                            className="text-primary hover:text-primary"
                        >
                            <Edit2 className="h-4 w-4 mr-1" />
                            Edit
                        </Button>
                    </div>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-2">
                            {meetingType === "physical" ? (
                                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                            ) : (
                                <Video className="h-4 w-4 text-muted-foreground mt-0.5" />
                            )}
                            <div>
                                <p className="text-muted-foreground">
                                    {meetingType === "physical" ? "Location" : "Platform"}
                                </p>
                                <p className="font-medium">{getLocationText()}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                                <p className="text-muted-foreground">Date</p>
                                <p className="font-medium">{formatDate(meetingDetails.date)}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                                <p className="text-muted-foreground">Time</p>
                                <p className="font-medium">{formatTime(meetingDetails.time)}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                                <p className="text-muted-foreground">Description</p>
                                <p className="font-medium">{meetingDetails.description}</p>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-between pt-4">
                <Button variant="outline" onClick={onBack}>
                    Back
                </Button>
                <Button size="lg" onClick={onConfirm} className="bg-primary hover:bg-primary/90">
                    Confirm Booking
                </Button>
            </div>
        </motion.div>
    );
}
