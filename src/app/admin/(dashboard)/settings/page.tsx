import { createClient } from "@/lib/supabase/server";
import { connectGoogleCalendarAction } from "./actions";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/std-card";
import { CalendarCheck, AlertCircle } from "lucide-react";

export default async function SettingsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Check if connected
    const { data: integration } = await supabase
        .from('admin_integrations')
        .select('*')
        .eq('user_id', user?.id)
        .single();

    const isConnected = !!integration?.access_token;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CalendarCheck className="w-6 h-6 text-losos-blue" />
                        Google Calendar Integration
                    </CardTitle>
                    <CardDescription>
                        Connect your Google Calendar to automatically block busy slots in the public schedule.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {isConnected ? (
                        <div className="flex items-center gap-4 text-green-600 bg-green-50 p-4 rounded-md border border-green-200">
                            <CalendarCheck className="w-5 h-5" />
                            <span className="font-medium">Calendar Connected</span>
                            {/* Todo: Add Disconnect button */}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-amber-600 bg-amber-50 p-4 rounded-md border border-amber-200">
                                <AlertCircle className="w-5 h-5" />
                                <span>Not connected. Clients may book slots during your busy times.</span>
                            </div>

                            <form action={connectGoogleCalendarAction}>
                                <Button type="submit" variant="primary">
                                    Connect Google Calendar
                                </Button>
                            </form>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
