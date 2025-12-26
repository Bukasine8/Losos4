'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProjectAction(prevState: any, formData: FormData) {
    const supabase = await createClient()

    const data = {
        name: formData.get('name') as string,
        client_id: formData.get('client_id') as string,
        type: formData.get('type') as string,
        description: formData.get('description') as string,
        start_date: formData.get('start_date') as string || null,
        end_date: formData.get('end_date') as string || null,
        status: 'active', // Default status
    }

    const { error } = await supabase.from('projects').insert(data)

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/admin/projects')
    redirect('/admin/projects')
}
