'use client'

import { addComment } from "@/app/(public)/blog/[slug]/actions"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { useFormStatus } from "react-dom"

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Posting..." : "Post Comment"}
        </Button>
    )
}

export function CommentForm({ postId }: { postId: string }) {
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    async function clientAction(formData: FormData) {
        setError(null)
        setSuccess(false)
        const result = await addComment(postId, formData)
        if (result?.error) {
            setError(result.error)
        } else {
            setSuccess(true)
            // Optional: Reset form via ref if needed, but simple re-render might not clear inputs without controlled state or ref.
            // For simplicity in this iteration, we just show success message.
            // Ideally we'd reset the form here.
            const form = document.querySelector('form') as HTMLFormElement
            form?.reset()
        }
    }

    return (
        <form action={clientAction} className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-12">
            <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
            {error && <div className="bg-red-50 text-red-600 p-3 mb-4 rounded text-sm">{error}</div>}
            {success && <div className="bg-green-50 text-green-600 p-3 mb-4 rounded text-sm">Comment posted successfully!</div>}

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-losos-blue"
                    placeholder="Your Name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                <textarea
                    name="content"
                    id="content"
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-losos-blue"
                    placeholder="Share your thoughts..."
                />
            </div>
            <SubmitButton />
        </form>
    )
}
