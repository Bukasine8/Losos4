'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addComment(postId: string, formData: FormData) {
    const supabase = await createClient()
    const name = formData.get('name') as string
    const content = formData.get('content') as string

    if (!name || !content) {
        return { error: 'Name and content are required' }
    }

    const { error } = await supabase.from('comments').insert({
        post_id: postId,
        name,
        content,
    })

    if (error) {
        console.error('Error adding comment:', error)
        return { error: 'Failed to add comment' }
    }

    revalidatePath('/blog/[slug]', 'page')
    return { success: true }
}
