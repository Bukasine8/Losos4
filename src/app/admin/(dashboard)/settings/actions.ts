'use server'

import { getGoogleAuth } from "@/lib/google";
import { redirect } from "next/navigation";

export async function connectGoogleCalendarAction() {
    const auth = getGoogleAuth();

    // Generate auth URL
    const url = auth.generateAuthUrl({
        access_type: 'offline', // Important to get refresh_token
        scope: [
            'https://www.googleapis.com/auth/calendar.readonly',
            'https://www.googleapis.com/auth/calendar.events.readonly'
        ],
        prompt: 'consent' // Force consent screen to ensure we get refresh_token
    });

    redirect(url);
}
