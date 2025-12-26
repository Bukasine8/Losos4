'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function deleteTestimonialAction(id: string) {
    const supabase = await createClient()

    const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath('/admin/testimonials')
    revalidatePath('/') // Revalidate public page where they are shown
}
