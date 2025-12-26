import { Card } from "@/components/ui/std-card";
import { cn } from "@/lib/utils";
import { Building2, Video } from "lucide-react";

interface MeetingTypeSelectionProps {
    selectedType: "physical" | "online" | null;
    onSelect: (type: "physical" | "online") => void;
}

export function MeetingTypeSelection({ selectedType, onSelect }: MeetingTypeSelectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card
                className={cn(
                    "cursor-pointer border-2 transition-all duration-300 hover:-translate-y-1",
                    selectedType === "physical"
                        ? "border-losos-blue bg-losos-blue/5"
                        : "border-transparent hover:border-gray-200"
                )}
                onClick={() => onSelect("physical")}
            >
                <div className="flex flex-col items-center text-center p-6">
                    <Building2 className={cn("w-16 h-16 mb-6", selectedType === "physical" ? "text-losos-blue" : "text-gray-400")} />
                    <h3 className="text-xl font-bold mb-2">Physical Meeting</h3>
                    <p className="text-gray-600">
                        Losos4 Office, Abuja<br />
                        In-person technical review
                    </p>
                </div>
            </Card>

            <Card
                className={cn(
                    "cursor-pointer border-2 transition-all duration-300 hover:-translate-y-1",
                    selectedType === "online"
                        ? "border-losos-blue bg-losos-blue/5"
                        : "border-transparent hover:border-gray-200"
                )}
                onClick={() => onSelect("online")}
            >
                <div className="flex flex-col items-center text-center p-6">
                    <Video className={cn("w-16 h-16 mb-6", selectedType === "online" ? "text-losos-blue" : "text-gray-400")} />
                    <h3 className="text-xl font-bold mb-2">Online Meeting</h3>
                    <p className="text-gray-600">
                        Google Meet / Zoom<br />
                        Remote consultation
                    </p>
                </div>
            </Card>
        </div>
    );
}
