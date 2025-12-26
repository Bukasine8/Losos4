import { createClient } from "@/lib/supabase/server"
import { UserCircle2 } from "lucide-react"

export async function CommentList({ postId }: { postId: string }) {
    const supabase = await createClient()
    const { data: comments } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .eq('is_approved', true) // Only show approved/visible comments
        .order('created_at', { ascending: false })

    if (!comments || comments.length === 0) {
        return (
            <div className="text-gray-500 italic mb-8">
                No comments yet. Be the first to share your thoughts!
            </div>
        )
    }

    return (
        <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold border-b border-gray-100 pb-2">Comments ({comments.length})</h3>
            {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                    <div className="flex-shrink-0">
                        <UserCircle2 className="w-10 h-10 text-gray-300" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-gray-900">{comment.name}</span>
                            <span className="text-xs text-gray-500">
                                {new Date(comment.created_at).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {comment.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
