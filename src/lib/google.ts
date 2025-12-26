import { google } from 'googleapis';
import { createClient } from '@/lib/supabase/server';

export const getGoogleAuth = () => {
    return new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/google/callback`
    );
};

export const getCalendarService = async (userId: string) => {
    const supabase = await createClient();

    // Get tokens from DB
    const { data, error } = await supabase
        .from('admin_integrations')
        .select('*')
        .eq('user_id', userId)
        .single();

    if (error || !data) return null;

    const auth = getGoogleAuth();
    auth.setCredentials({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expiry_date: data.expiry_date,
    });

    // Refresh if needed (googleapis handles this automatically if refresh_token is set)

    return google.calendar({ version: 'v3', auth });
};
