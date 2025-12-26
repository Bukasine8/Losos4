// Date & Time selection UI used in the scheduling flow
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { checkAvailability } from "@/app/(public)/schedule/actions";

// Props from parent (schedule/page):
// - date: currently selected calendar date
// - timeSlot: currently selected time string
// - onDateSelect: callback when user picks a date
// - onTimeSelect: callback when user picks a time slot
interface DateTimeSelectionProps {
    date: Date | undefined;
    timeSlot: string | null;
    onDateSelect: (date: Date | undefined) => void;
    onTimeSelect: (time: string) => void;
}

// Available meeting times for physical meetings (9 AM to 5 PM)
const TIME_SLOTS = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export function DateTimeSelection({ date, timeSlot, onDateSelect, onTimeSelect }: DateTimeSelectionProps) {
    const [busySlots, setBusySlots] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    // Normalize today's date to midnight so "today" remains selectable
    const todayMidnight = React.useMemo(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }, []);

    // Check availability when date changes
    React.useEffect(() => {
        if (!date) {
            setBusySlots([]);
            return;
        }

        const fetchAvailability = async () => {
            setIsLoading(true);
            try {
                // Adjust for timezone offset to ensure server gets correct YYYY-MM-DD
                const offset = date.getTimezoneOffset();
                const d = new Date(date.getTime() - (offset * 60 * 1000));
                const dateStr = d.toISOString().split('T')[0];

                const result = await checkAvailability(dateStr);
                setBusySlots(result.busySlots || []);
            } catch (err) {
                console.error("Failed to check availability", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAvailability();
    }, [date]);

    return (
        // Two-column layout: calendar on the left, time grid on the right (stacks on mobile)
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Calendar column */}
            <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold mb-4 w-full text-center md:text-left">Select Date</h3>
                <div className="border border-gray-200 p-4">
                    <Calendar
                        // Single selection mode
                        mode="single"
                        // Controlled selection
                        selected={date}
                        // When a date is selected, notify parent
                        onSelect={onDateSelect}
                        // Wrapper styling tweaks
                        className="rounded-none border-none shadow-none"
                        disabled={(date) => {
                            // Disable dates before today at midnight
                            if (date < todayMidnight) return true;
                            // Only allow Monday (1), Wednesday (3), and Thursday (4) for physical meetings
                            const day = date.getDay();
                            return day !== 1 && day !== 3 && day !== 4;
                        }}
                    />
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center max-w-xs">
                    Physical meetings available Monday, Wednesday, and Thursday only. For other days or times, please contact us for online meetings.
                </p>
            </div>

            {/* Time slots column */}
            <div>
                <h3 className="text-lg font-bold mb-4">Select Time</h3>
                {/* Guard: require a date before showing times */}
                {!date ? (
                    <p className="text-gray-400 italic">Please select a date first.</p>
                ) : (
                    // Grid of selectable time slots
                    <div className="relative">
                        {isLoading && (
                            <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center">
                                <div className="w-6 h-6 border-2 border-losos-blue border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}
                        <div className="grid grid-cols-2 gap-4">
                            {TIME_SLOTS.map((slot) => {
                                const isBusy = busySlots.includes(slot);
                                return (
                                    <button
                                        key={slot}
                                        onClick={() => !isBusy && onTimeSelect(slot)}
                                        disabled={isBusy}
                                        className={cn(
                                            // Base style
                                            "py-3 px-4 border text-sm font-bold transition-all duration-300 rounded-none relative overflow-hidden",
                                            // State styles
                                            isBusy
                                                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed decoration-slice"
                                                : timeSlot === slot
                                                    ? "bg-losos-blue text-white border-losos-blue"
                                                    : "bg-transparent text-gray-700 border-gray-300 hover:border-losos-blue hover:text-losos-blue"
                                        )}
                                    >
                                        {slot}
                                        {isBusy && <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest bg-gray-100/50 font-normal">Busy</span>}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
