import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from "@/components/ui/Button"
import { deletePostAction } from './actions'
import { Plus, Trash2, Edit, FileText } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function BlogAdminPage() {
    const supabase = await createClient()
    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
                <Button asChild>
                    <Link href="/admin/blog/new">
                        <Plus className="w-4 h-4 mr-2" />
                        New Post
                    </Link>
                </Button>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 font-medium text-gray-500">Title</th>
                            <th className="px-6 py-3 font-medium text-gray-500">Slug</th>
                            <th className="px-6 py-3 font-medium text-gray-500">Date</th>
                            <th className="px-6 py-3 font-medium text-gray-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {posts?.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                    <FileText className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                                    No posts found. Create your first one!
                                </td>
                            </tr>
                        ) : (
                            posts?.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{post.title}</td>
                                    <td className="px-6 py-4 text-gray-500">{post.slug}</td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {new Date(post.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end items-center gap-2">
                                            <form action={deletePostAction.bind(null, post.id)}>
                                                <Button size="icon" variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
