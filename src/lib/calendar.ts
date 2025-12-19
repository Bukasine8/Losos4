export function createGoogleCalendarUrl(meetingDetails: {
    date: Date;
    timeSlot: string;
    name: string;
    description: string;
    meetingType: "physical" | "online" | null;
}): string | null {
    if (!meetingDetails.date || !meetingDetails.timeSlot) {
        return null;
    }

    const [startTime] = meetingDetails.timeSlot.split(" - ");
    const [hours, minutes] = startTime.split(":").map(Number);

    const startDateTime = new Date(meetingDetails.date);
    startDateTime.setHours(hours, minutes, 0, 0);

    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d{3}/g, "");

    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: `Consultation with ${meetingDetails.name}`,
        dates: `${formatDate(startDateTime)}/${formatDate(endDateTime)}`,
        details: meetingDetails.description,
        location: meetingDetails.meetingType === "physical" ? "Our Office" : "Online",
    });

    return `https://www.google.com/calendar/render?${params.toString()}`;
}
