"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MeetingTypeSelector } from "@/components/booking/MeetingTypeSelector";
import { CalendarSelector } from "@/components/booking/CalendarSelector";
import { ClientInfoForm } from "@/components/booking/ClientInfoForm";
import { BookingConfirmation } from "@/components/booking/BookingConfirmation";

type BookingStep = "type" | "datetime" | "info" | "confirmation";

import { Suspense } from "react";

function BookMeetingContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState<BookingStep>("type");
    const [meetingType, setMeetingType] = useState<"physical" | "online" | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [bookingData, setBookingData] = useState<any>(null);

    const handleTypeSelect = (type: "physical" | "online") => {
        setMeetingType(type);
        setCurrentStep("datetime");
    };

    const handleDateTimeSelect = (date: Date, time: string) => {
        setSelectedDate(date);
        setSelectedTime(time);
        setCurrentStep("info");
    };

    const handleFormSubmit = (data: any) => {
        setBookingData(data);
        setCurrentStep("confirmation");
    };

    const handleBack = () => {
        if (currentStep === "datetime") setCurrentStep("type");
        if (currentStep === "info") setCurrentStep("datetime");
    };

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container max-w-4xl">
                {/* Progress Indicator */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        {["Type", "Date & Time", "Your Info", "Confirm"].map((label, idx) => (
                            <div key={label} className="flex-1 text-center">
                                <div
                                    className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-bold ${idx + 1 <= getStepNumber(currentStep)
                                        ? "bg-primary text-white"
                                        : "bg-muted text-muted-foreground"
                                        }`}
                                >
                                    {idx + 1}
                                </div>
                                <p className="text-xs">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Steps */}
                {currentStep === "type" && <MeetingTypeSelector onSelect={handleTypeSelect} />}

                {currentStep === "datetime" && meetingType && (
                    <CalendarSelector
                        meetingType={meetingType}
                        onSelect={handleDateTimeSelect}
                        onBack={handleBack}
                    />
                )}

                {currentStep === "info" && meetingType && selectedDate && selectedTime && (
                    <ClientInfoForm
                        meetingType={meetingType}
                        date={selectedDate}
                        time={selectedTime}
                        onSubmit={handleFormSubmit}
                        onBack={handleBack}
                    />
                )}

                {currentStep === "confirmation" && bookingData && (
                    <BookingConfirmation data={bookingData} />
                )}
            </div>
        </div>
    );
}

function getStepNumber(step: BookingStep): number {
    const steps: Record<BookingStep, number> = {
        type: 1,
        datetime: 2,
        info: 3,
        confirmation: 4,
    };
    return steps[step];
}

export default function BookMeetingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen pt-24 pb-12 text-center">Loading...</div>}>
            <BookMeetingContent />
        </Suspense>
    );
}
