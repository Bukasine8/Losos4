import { createClient } from '@/lib/supabase/server'
import { Button } from "@/components/ui/Button"
import { deleteTestimonialAction } from './actions'
import { Trash2, Star, MessageSquareQuote } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function TestimonialsAdminPage() {
    const supabase = await createClient()
    const { data: testimonials } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
                {/* Manual add button could go here, but user asked for dummy data/google import specifically */}
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 font-medium text-gray-500">Client</th>
                            <th className="px-6 py-3 font-medium text-gray-500">Rating</th>
                            <th className="px-6 py-3 font-medium text-gray-500">Review</th>
                            <th className="px-6 py-3 font-medium text-gray-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {testimonials?.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                    <MessageSquareQuote className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                                    No testimonials found.
                                </td>
                            </tr>
                        ) : (
                            testimonials?.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">{t.client_name}</div>
                                        <div className="text-xs text-gray-400">{t.role}, {t.company}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'text-gray-200'}`} />
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 max-w-md truncate">
                                        {t.content}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <form action={deleteTestimonialAction.bind(null, t.id)}>
                                            <Button size="icon" variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </form>
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
