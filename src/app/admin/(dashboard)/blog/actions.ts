'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPostAction(prevState: any, formData: FormData) {
    const supabase = await createClient()

    const title = formData.get('title') as string
    // Simple slug generator: title -> lower-case-hyphenated
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

    const data = {
        title,
        slug,
        excerpt: formData.get('excerpt') as string,
        content: formData.get('content') as string,
        cover_image: formData.get('cover_image') as string,
        is_published: true, // Auto-publish for simplicity for now
    }

    const { error } = await supabase.from('posts').insert(data)

    if (error) {
        if (error.code === '23505') { // Unique violation
            return { error: 'A post with this title already exists.' }
        }
        return { error: error.message }
    }

    revalidatePath('/admin/blog')
    revalidatePath('/blog')
    redirect('/admin/blog')
}

export async function deletePostAction(id: string) {
    const supabase = await createClient()

    const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath('/admin/blog')
    revalidatePath('/blog')
}
