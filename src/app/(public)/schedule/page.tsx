"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MeetingTypeSelection } from "@/components/schedule/MeetingTypeSelection";
import { ProjectInfoForm } from "@/components/schedule/ProjectInfoForm";
import { DateTimeSelection } from "@/components/schedule/DateTimeSelection";
import { ReviewMeeting } from "@/components/schedule/ReviewMeeting";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { createGoogleCalendarUrl } from "@/lib/calendar";
// Removed: import PrimeInlineCalendar from "@/components/ui/PrimeInlineCalendar";

export default function SchedulePage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        meetingType: null as "physical" | "online" | null,
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        timeline: "",
        description: "",
        date: undefined as Date | undefined,
        timeSlot: null as string | null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const updateFormData = (data: Partial<typeof formData>) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleConfirm = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    // Validation
    const isStep1Valid = !!formData.meetingType;
    const isStep2Valid = formData.name && formData.email && formData.projectType && formData.description; // Basic validation
    const isStep3Valid = !!formData.date && !!formData.timeSlot;

    if (isSuccess) {
        const calendarUrl = createGoogleCalendarUrl({
            date: formData.date!,
            timeSlot: formData.timeSlot!,
            name: formData.name,
            description: `Project discussion about ${formData.projectType}. More details: ${formData.description}`,
            meetingType: formData.meetingType,
        });

        return (
            <div className="pt-24 min-h-screen bg-losos-light flex items-center justify-center">
                <div className="bg-white p-16 max-w-2xl text-center shadow-2xl border-t-8 border-losos-blue animate-in fade-in zoom-in duration-500">
                    <div className="flex justify-center mb-8">
                        <CheckCircle2 className="w-24 h-24 text-green-500" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-losos-dark">Meeting Scheduled</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Your consultation has been confirmed. A calendar invitation has been sent to <strong>{formData.email}</strong>.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button asChild>
                            <Link href="/">Return Home</Link>
                        </Button>
                        {calendarUrl && (
                            <Button variant="outline" asChild>
                                <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
                                    Add to Google Calendar
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-losos-light">
            {/* Hero / Header for Scheduler */}
            <Section theme="dark" className="py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule a Meeting</h1>
                    <p className="text-xl text-gray-300">
                        Plan a focused discussion with our engineering team. Choose your preference below.
                    </p>
                </div>
            </Section>

            <div className="container max-w-4xl -mt-10 relative z-10 mb-24">
                {/* Progress Indicator */}
                <div className="bg-white p-8 shadow-sm border-b border-gray-100 flex justify-between items-center mb-8">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                            <div className={`w-8 h-8 flex items-center justify-center font-bold text-sm border ${step === s ? "bg-losos-blue text-white border-losos-blue" :
                                    step > s ? "bg-green-500 text-white border-green-500" : "text-gray-400 border-gray-200"
                                }`}>
                                {step > s ? "✓" : s}
                            </div>
                            <span className={`text-sm tracking-wider font-medium hidden md:block ${step === s ? "text-losos-blue" : "text-gray-400"}`}>
                                {s === 1 && "Type"}
                                {s === 2 && "Details"}
                                {s === 3 && "Time"}
                                {s === 4 && "Review"}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white p-8 md:p-12 shadow-2xl min-h-[500px]">
                    {step === 1 && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold border-l-4 border-losos-blue pl-4">Select Meeting Preference</h2>
                            <MeetingTypeSelection
                                selectedType={formData.meetingType}
                                onSelect={(type) => updateFormData({ meetingType: type })}
                            />
                            <div className="flex justify-end mt-8">
                                <Button onClick={nextStep} disabled={!isStep1Valid}>Next Step</Button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold border-l-4 border-losos-blue pl-4">Project Information</h2>
                            <ProjectInfoForm
                                data={formData}
                                onChange={(data) => updateFormData(data)}
                            />
                            <div className="flex justify-between mt-8">
                                <Button variant="outline" onClick={prevStep}>Back</Button>
                                <Button onClick={nextStep} disabled={!isStep2Valid}>Next Step</Button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold border-l-4 border-losos-blue pl-4">Select Date & Time</h2>
                            <DateTimeSelection
                                date={formData.date}
                                timeSlot={formData.timeSlot}
                                onDateSelect={(d) => updateFormData({ date: d, timeSlot: null })} // Reset time on date change
                                onTimeSelect={(t) => updateFormData({ timeSlot: t })}
                            />
                            <div className="flex justify-between mt-8">
                                <Button variant="outline" onClick={prevStep}>Back</Button>
                                <Button onClick={nextStep} disabled={!isStep3Valid}>Next Step</Button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold border-l-4 border-losos-blue pl-4">Review & Confirm</h2>
                            <ReviewMeeting data={formData} />
                            <div className="flex justify-between mt-8">
                                <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>Back</Button>
                                <Button onClick={handleConfirm} disabled={isSubmitting} className="min-w-[200px]">
                                    {isSubmitting ? "Confirming..." : "Confirm Meeting"}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* PrimeReact Inline Calendar preview removed */}
        </div>
    );
}
