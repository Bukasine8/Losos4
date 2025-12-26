'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createClientAction(prevState: any, formData: FormData) {
    const supabase = await createClient()

    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        company: formData.get('company') as string,
        notes: formData.get('notes') as string,
    }

    const { error } = await supabase.from('clients').insert(data)

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/admin/clients')
    redirect('/admin/clients')
}
