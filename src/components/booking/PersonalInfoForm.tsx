"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, User, Phone, Building } from "lucide-react";

interface PersonalInfoFormProps {
    onNext: (data: PersonalInfoData) => void;
    onBack: () => void;
    initialData?: PersonalInfoData;
}

export interface PersonalInfoData {
    fullName: string;
    email: string;
    phone: string;
    companyName?: string;
}

export function PersonalInfoForm({ onNext, onBack, initialData }: PersonalInfoFormProps) {
    const [formData, setFormData] = useState<PersonalInfoData>(
        initialData || {
            fullName: "",
            email: "",
            phone: "",
            companyName: "",
        }
    );

    const [errors, setErrors] = useState<Partial<Record<keyof PersonalInfoData, string>>>({});

    const validateForm = () => {
        const newErrors: Partial<Record<keyof PersonalInfoData, string>> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
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

    const handleChange = (field: keyof PersonalInfoData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
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
                <h2 className="text-3xl font-bold mb-2">Your Information</h2>
                <p className="text-muted-foreground">
                    Tell us a bit about yourself so we can prepare for the meeting
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName">
                            Full Name <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="fullName"
                                value={formData.fullName}
                                onChange={(e) => handleChange("fullName", e.target.value)}
                                className={`pl-10 ${errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""}`}
                                placeholder="John Doe"
                            />
                        </div>
                        {errors.fullName && (
                            <p className="text-sm text-destructive">{errors.fullName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Email Address <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className={`pl-10 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                                placeholder="john@example.com"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone">
                            Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                className={`pl-10 ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        {errors.phone && (
                            <p className="text-sm text-destructive">{errors.phone}</p>
                        )}
                    </div>

                    {/* Company Name (Optional) */}
                    <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name (Optional)</Label>
                        <div className="relative">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="companyName"
                                value={formData.companyName}
                                onChange={(e) => handleChange("companyName", e.target.value)}
                                className="pl-10"
                                placeholder="Acme Inc."
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 justify-between pt-4">
                    <Button type="button" variant="outline" onClick={onBack}>
                        Back
                    </Button>
                    <Button type="submit" size="lg">
                        Continue
                    </Button>
                </div>
            </form>
        </motion.div>
    );
}
