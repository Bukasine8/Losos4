'use server'

import { createClient } from "@/lib/supabase/server";
import { getCalendarService } from "@/lib/google";

export async function checkAvailability(dateStr: string) {
    const supabase = await createClient();

    // For now, we just check the first admin found who has a connection
    // In a real app, you might want to check specific consultants or all admins
    const { data: integrations } = await supabase
        .from('admin_integrations')
        .select('*')
        .limit(1);

    if (!integrations || integrations.length === 0) {
        return { busySlots: [] }; // No integration, assumed available
    }

    const integration = integrations[0];
    const calendar = await getCalendarService(integration.user_id);

    if (!calendar) return { busySlots: [] };

    // Format query time range (start of day to end of day in UTC roughly)
    // Client sends 'YYYY-MM-DD'
    const start = new Date(dateStr);
    start.setHours(0, 0, 0, 0);
    const end = new Date(dateStr);
    end.setHours(23, 59, 59, 999);

    try {
        const response = await calendar.events.list({
            calendarId: 'primary',
            timeMin: start.toISOString(),
            timeMax: end.toISOString(),
            singleEvents: true,
            orderBy: 'startTime',
        });

        const events = response.data.items || [];
        const busySlots: string[] = [];

        // Map events to our slots (simplistic mapping for 1-hour slots)
        // Our slots are fixed: 09:00 AM, etc.
        // We check if any event overlaps with our predefined slots.

        const ourSlots = [
            "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
            "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
        ];

        ourSlots.forEach(slot => {
            const slotHour = parseInt(slot.split(':')[0]);
            const isPM = slot.includes('PM') && slotHour !== 12;
            const hour24 = isPM ? slotHour + 12 : (slotHour === 12 && slot.includes('AM') ? 0 : slotHour);

            const slotStart = new Date(dateStr);
            slotStart.setHours(hour24, 0, 0, 0);
            const slotEnd = new Date(slotStart);
            slotEnd.setHours(hour24 + 1, 0, 0, 0);

            const isBusy = events.some(event => {
                if (!event.start?.dateTime || !event.end?.dateTime) return false; // All-day events might be handled differently

                const evtStart = new Date(event.start.dateTime);
                const evtEnd = new Date(event.end.dateTime);

                // Overlap check
                return (evtStart < slotEnd && evtEnd > slotStart);
            });

            if (isBusy) {
                busySlots.push(slot);
            }
        });

        return { busySlots };

    } catch (error) {
        console.error('Calendar API Error:', error);
        return { busySlots: [] }; // Fail open if API fails
    }
}
