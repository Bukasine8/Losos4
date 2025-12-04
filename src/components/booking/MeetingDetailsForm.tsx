"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

interface MeetingDetailsFormProps {
    meetingType: "physical" | "online";
    onNext: (data: MeetingDetailsData) => void;
    onBack: () => void;
    initialData?: MeetingDetailsData;
}

export interface MeetingDetailsData {
    location?: string;
    address?: string;
    platform?: string;
    date: string;
    time: string;
    description: string;
}

export function MeetingDetailsForm({ meetingType, onNext, onBack, initialData }: MeetingDetailsFormProps) {
    const [formData, setFormData] = useState<MeetingDetailsData>(
        initialData || {
            location: "",
            address: "",
            platform: "",
            date: "",
            time: "",
            description: "",
        }
    );

    const [errors, setErrors] = useState<Partial<Record<keyof MeetingDetailsData, string>>>({});

    const validateForm = () => {
        const newErrors: Partial<Record<keyof MeetingDetailsData, string>> = {};

        if (meetingType === "physical") {
            if (!formData.location) {
                newErrors.location = "Please select a location";
            }
            if (formData.location === "other" && !formData.address?.trim()) {
                newErrors.address = "Please provide an address";
            }
        } else {
            if (!formData.platform) {
                newErrors.platform = "Please select a platform";
            }
        }

        if (!formData.date) {
            newErrors.date = "Please select a date";
        }

        if (!formData.time) {
            newErrors.time = "Please select a time";
        }

        if (!formData.description?.trim()) {
            newErrors.description = "Please provide a brief description";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            onNext(formData);
        }
    };

    const handleChange = (field: keyof MeetingDetailsData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Meeting Details</h2>
                <p className="text-muted-foreground">
                    Choose your preferred date, time, and {meetingType === "physical" ? "location" : "platform"}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Physical Meeting Fields */}
                {meetingType === "physical" && (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="location">
                                Preferred Location <span className="text-destructive">*</span>
                            </Label>
                            <Select
                                value={formData.location}
                                onValueChange={(value) => handleChange("location", value)}
                            >
                                <SelectTrigger className={errors.location ? "border-destructive" : ""}>
                                    <SelectValue placeholder="Select location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="office">Our Office</SelectItem>
                                    <SelectItem value="client-site">Client Site</SelectItem>
                                    <SelectItem value="other">Other Location</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.location && (
                                <p className="text-sm text-destructive">{errors.location}</p>
                            )}
                        </div>

                        {formData.location === "other" && (
                            <div className="space-y-2">
                                <Label htmlFor="address">
                                    Address <span className="text-destructive">*</span>
                                </Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="address"
                                        value={formData.address}
                                        onChange={(e) => handleChange("address", e.target.value)}
                                        className={`pl-10 ${errors.address ? "border-destructive" : ""}`}
                                        placeholder="123 Main St, City, State"
                                    />
                                </div>
                                {errors.address && (
                                    <p className="text-sm text-destructive">{errors.address}</p>
                                )}
                            </div>
                        )}
                    </>
                )}

                {/* Online Meeting Fields */}
                {meetingType === "online" && (
                    <div className="space-y-2">
                        <Label htmlFor="platform">
                            Meeting Platform <span className="text-destructive">*</span>
                        </Label>
                        <Select
                            value={formData.platform}
                            onValueChange={(value) => handleChange("platform", value)}
                        >
                            <SelectTrigger className={errors.platform ? "border-destructive" : ""}>
                                <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="google-meet">Google Meet</SelectItem>
                                <SelectItem value="zoom">Zoom</SelectItem>
                                <SelectItem value="microsoft-teams">Microsoft Teams</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.platform && (
                            <p className="text-sm text-destructive">{errors.platform}</p>
                        )}
                    </div>
                )}

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="date">
                            Preferred Date <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="date"
                                type="date"
                                value={formData.date}
                                onChange={(e) => handleChange("date", e.target.value)}
                                className={`pl-10 ${errors.date ? "border-destructive" : ""}`}
                                min={new Date().toISOString().split("T")[0]}
                            />
                        </div>
                        {errors.date && (
                            <p className="text-sm text-destructive">{errors.date}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="time">
                            Preferred Time <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="time"
                                type="time"
                                value={formData.time}
                                onChange={(e) => handleChange("time", e.target.value)}
                                className={`pl-10 ${errors.time ? "border-destructive" : ""}`}
                            />
                        </div>
                        {errors.time && (
                            <p className="text-sm text-destructive">{errors.time}</p>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <Label htmlFor="description">
                        Brief Project Description <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        className={errors.description ? "border-destructive" : ""}
                        placeholder="Tell us about your project, requirements, and what you'd like to discuss..."
                        rows={5}
                    />
                    {errors.description && (
                        <p className="text-sm text-destructive">{errors.description}</p>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 justify-between pt-4">
                    <Button type="button" variant="outline" onClick={onBack}>
                        Back
                    </Button>
                    <Button type="submit" size="lg">
                        Continue to Review
                    </Button>
                </div>
            </form>
        </motion.div>
    );
}
