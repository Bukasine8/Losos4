'use client'

import { createPostAction } from '../actions'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { useActionState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const initialState = {
    error: '',
}

export default function NewPostPage() {
    const [state, formAction] = useActionState(createPostAction, initialState)

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-losos-blue">
                    <Link href="/admin/blog">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Posts
                    </Link>
                </Button>
                <h1 className="text-3xl font-bold tracking-tight mt-2">Write New Post</h1>
            </div>

            <form action={formAction} className="space-y-6 bg-white p-8 rounded-lg border border-gray-200 shadow-sm">

                {state?.error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-200">
                        {state.error}
                    </div>
                )}

                <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium leading-none">Title</label>
                    <Input id="title" name="title" required placeholder="e.g. The Future of Sustainable Engineering" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="image" className="text-sm font-medium leading-none">Cover Image URL</label>
                    <Input id="image" name="cover_image" placeholder="https://example.com/image.jpg" />
                    <p className="text-[10px] text-gray-500">Paste a link to an image hosted online.</p>
                </div>

                <div className="space-y-2">
                    <label htmlFor="excerpt" className="text-sm font-medium leading-none">Excerpt</label>
                    <textarea
                        id="excerpt"
                        name="excerpt"
                        rows={3}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="A short summary of the post..."
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="content" className="text-sm font-medium leading-none">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        rows={12}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Write your article here..."
                        required
                    />
                </div>

                <div className="pt-4 flex justify-end">
                    <Button type="submit" size="lg">
                        Publish Post
                    </Button>
                </div>
            </form>
        </div>
    )
}
