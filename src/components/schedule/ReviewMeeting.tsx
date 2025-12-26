import { Card } from "@/components/ui/std-card";

interface ReviewMeetingProps {
    data: any;
}

export function ReviewMeeting({ data }: ReviewMeetingProps) {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-t-4 border-losos-blue shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Meeting Type</h3>
                        <p className="text-xl font-bold capitalize">{data.meetingType} Meeting</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Date & Time</h3>
                        <p className="text-xl font-bold">
                            {data.date?.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            <br />
                            {data.timeSlot}
                        </p>
                    </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Project Details</h3>
                    <p className="text-lg font-bold mb-1">{data.projectType} Project</p>
                    <p className="text-gray-600 italic">"{data.description}"</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Contact</h3>
                        <p className="text-gray-800">{data.name}</p>
                        <p className="text-gray-600">{data.email}</p>
                        <p className="text-gray-600">{data.phone}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Organization</h3>
                        <p className="text-gray-800">{data.company}</p>
                        <p className="text-gray-600">{data.timeline} Timeline</p>
                    </div>
                </div>
            </Card>

            <p className="text-center text-sm text-gray-500 mt-6">
                By confirming, you agree to our meeting terms. We will send a confirmation email shortly.
            </p>
        </div>
    );
}
