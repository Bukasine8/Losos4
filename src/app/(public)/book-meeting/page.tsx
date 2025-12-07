"use client";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BookingLanding } from "@/components/booking/BookingLanding";
import { MeetingTypeSelector } from "@/components/booking/MeetingTypeSelector";
import { PersonalInfoForm, PersonalInfoData } from "@/components/booking/PersonalInfoForm";
import { MeetingDetailsForm, MeetingDetailsData } from "@/components/booking/MeetingDetailsForm";
import { ReviewConfirmation } from "@/components/booking/ReviewConfirmation";
import { BookingSuccess } from "@/components/booking/BookingSuccess";
import { GoogleCalendarModal } from "@/components/booking/GoogleCalendarModal";
import { Toast } from "@/components/ui/Toast";
import { supabaseBrowser } from "@/lib/supabase-browser";

type BookingStep = "landing" | "type" | "personal" | "details" | "review" | "success";

function BookMeetingContent() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState<BookingStep>("landing");
    const [meetingType, setMeetingType] = useState<"physical" | "online" | null>(null);
    const [personalInfo, setPersonalInfo] = useState<PersonalInfoData | null>(null);
    const [meetingDetails, setMeetingDetails] = useState<MeetingDetailsData | null>(null);
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const handleBeginBooking = () => {
        setCurrentStep("type");
    };

    const handleTypeSelect = (type: "physical" | "online") => {
        setMeetingType(type);
        setCurrentStep("personal");
    };

    const handlePersonalInfoNext = (data: PersonalInfoData) => {
        setPersonalInfo(data);
        setCurrentStep("details");
    };

    const handleMeetingDetailsNext = (data: MeetingDetailsData) => {
        setMeetingDetails(data);
        setCurrentStep("review");
    };

    const handleConfirmBooking = async () => {
        if (!meetingType || !personalInfo || !meetingDetails) return;

        try {
            // Save to Supabase consultation_requests table
            const { data, error } = await supabaseBrowser.from("consultation_requests").insert({
                full_name: personalInfo.fullName,
                email: personalInfo.email,
                phone: personalInfo.phone,
                company_name: personalInfo.companyName || null,
                project_type: meetingType,
                budget_range: null,
                description: `${meetingType === "physical" ? "Physical Meeting" : "Online Meeting"}\n\nDate: ${meetingDetails.date}\nTime: ${meetingDetails.time}\n${meetingType === "physical" ? `Location: ${meetingDetails.location}\nAddress: ${meetingDetails.address || "N/A"}` : `Platform: ${meetingDetails.platform}`}\n\nProject Description:\n${meetingDetails.description}`,
                file_url: null,
                status: "pending",
            }).select();

            if (error) {
                console.error("Supabase error:", error);
                throw error;
            }

            console.log("Booking saved successfully:", data);
            setCurrentStep("success");
            // Show calendar modal after a short delay
            setTimeout(() => setShowCalendarModal(true), 1500);
        } catch (error: any) {
            console.error("Error saving booking:", error);
            setToastMessage(error?.message || "Failed to save booking. Please try again.");
            setShowToast(true);
        }
    };

    const handleAddToCalendar = () => {
        setShowCalendarModal(false);
        setToastMessage("Booking Confirmed — Check your email for details.");
        setShowToast(true);
    };

    const handleEditStep = (step: "personal" | "details") => {
        setCurrentStep(step);
    };

    const handleBack = () => {
        const stepOrder: BookingStep[] = ["landing", "type", "personal", "details", "review", "success"];
        const currentIndex = stepOrder.indexOf(currentStep);
        if (currentIndex > 0) {
            setCurrentStep(stepOrder[currentIndex - 1]);
        }
    };

    const getStepNumber = (step: BookingStep): number => {
        const steps: Record<BookingStep, number> = {
            landing: 0,
            type: 1,
            personal: 2,
            details: 3,
            review: 4,
            success: 5,
        };
        return steps[step];
    };

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container max-w-4xl">
                {/* Progress Indicator (hide on landing and success) */}
                {currentStep !== "landing" && currentStep !== "success" && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <div className="flex items-center justify-between mb-2">
                            {["Type", "Personal Info", "Details", "Review"].map((label, idx) => {
                                const stepNum = idx + 1;
                                const currentStepNum = getStepNumber(currentStep);
                                const isActive = stepNum <= currentStepNum;
                                const isCompleted = stepNum < currentStepNum;

                                return (
                                    <div key={label} className="flex-1 text-center relative">
                                        {/* Connector Line */}
                                        {idx > 0 && (
                                            <div className="absolute top-4 right-1/2 w-full h-0.5 -z-10">
                                                <div
                                                    className={`h-full transition-all duration-500 ${isCompleted ? "bg-primary" : "bg-muted"
                                                        }`}
                                                />
                                            </div>
                                        )}

                                        {/* Step Circle */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                scale: isActive ? 1 : 0.9,
                                                backgroundColor: isActive ? "hsl(var(--primary))" : "hsl(var(--muted))",
                                            }}
                                            className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-bold relative z-10"
                                        >
                                            <span className={isActive ? "text-primary-foreground" : "text-muted-foreground"}>
                                                {stepNum}
                                            </span>
                                        </motion.div>

                                        <p className="text-xs">{label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {/* Steps */}
                <AnimatePresence mode="wait">
                    {currentStep === "landing" && (
                        <motion.div key="landing" exit={{ opacity: 0, x: -20 }}>
                            <BookingLanding onBegin={handleBeginBooking} />
                        </motion.div>
                    )}

                    {currentStep === "type" && (
                        <motion.div key="type" exit={{ opacity: 0, x: -20 }}>
                            <MeetingTypeSelector onSelect={handleTypeSelect} selected={meetingType} />
                        </motion.div>
                    )}

                    {currentStep === "personal" && (
                        <motion.div key="personal" exit={{ opacity: 0, x: -20 }}>
                            <PersonalInfoForm
                                onNext={handlePersonalInfoNext}
                                onBack={handleBack}
                                initialData={personalInfo || undefined}
                            />
                        </motion.div>
                    )}

                    {currentStep === "details" && meetingType && (
                        <motion.div key="details" exit={{ opacity: 0, x: -20 }}>
                            <MeetingDetailsForm
                                meetingType={meetingType}
                                onNext={handleMeetingDetailsNext}
                                onBack={handleBack}
                                initialData={meetingDetails || undefined}
                            />
                        </motion.div>
                    )}

                    {currentStep === "review" && meetingType && personalInfo && meetingDetails && (
                        <motion.div key="review" exit={{ opacity: 0, x: -20 }}>
                            <ReviewConfirmation
                                meetingType={meetingType}
                                personalInfo={personalInfo}
                                meetingDetails={meetingDetails}
                                onConfirm={handleConfirmBooking}
                                onEdit={handleEditStep}
                                onBack={handleBack}
                            />
                        </motion.div>
                    )}

                    {currentStep === "success" && meetingType && meetingDetails && (
                        <motion.div key="success" exit={{ opacity: 0 }}>
                            <BookingSuccess
                                meetingType={meetingType}
                                date={meetingDetails.date}
                                time={meetingDetails.time}
                                onAddToCalendar={() => setShowCalendarModal(true)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Google Calendar Modal */}
            {meetingType && personalInfo && meetingDetails && (
                <GoogleCalendarModal
                    isOpen={showCalendarModal}
                    onClose={() => setShowCalendarModal(false)}
                    onAddToCalendar={handleAddToCalendar}
                    meetingTitle={`Consultation with ${personalInfo.fullName}`}
                    date={meetingDetails.date}
                    time={meetingDetails.time}
                    description={meetingDetails.description}
                    location={
                        meetingType === "physical"
                            ? meetingDetails.address || meetingDetails.location
                            : meetingDetails.platform
                    }
                />
            )}

            {/* Toast Notification */}
            <Toast
                message={toastMessage}
                type="success"
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </div>
    );
}

export default function BookMeetingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen pt-24 pb-12 text-center">Loading...</div>}>
            <BookMeetingContent />
        </Suspense>
    );
}
