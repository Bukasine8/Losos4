'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateMeetingStatus(id: string, status: 'confirmed' | 'cancelled' | 'completed' | 'pending') {
    const supabase = await createClient()
    await supabase.from('meetings').update({ status }).eq('id', id)
    revalidatePath(`/admin/meetings/${id}`)
    revalidatePath('/admin/meetings')
}
