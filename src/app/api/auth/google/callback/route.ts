import { getGoogleAuth } from "@/lib/google";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error) {
        return redirect("/admin/settings?error=Google+Auth+Failed");
    }

    if (!code) {
        return redirect("/admin/settings?error=No+Code");
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/admin/login");
    }

    try {
        const auth = getGoogleAuth();
        const { tokens } = await auth.getToken(code);

        // Save tokens to DB
        const { error: dbError } = await supabase
            .from('admin_integrations')
            .upsert({
                user_id: user.id,
                access_token: tokens.access_token,
                refresh_token: tokens.refresh_token,
                expiry_date: tokens.expiry_date,
                updated_at: new Date().toISOString()
            });

        if (dbError) {
            console.error('DB Error:', dbError);
            return redirect("/admin/settings?error=Database+Error");
        }

        return redirect("/admin/settings?success=Connected");

    } catch (err) {
        console.error('Auth Error:', err);
        return redirect("/admin/settings?error=Token+Exchange+Failed");
    }
}
