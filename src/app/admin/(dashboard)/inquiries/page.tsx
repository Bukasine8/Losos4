import { createClient } from '@/lib/supabase/server'
import { Badge } from "@/components/ui/badge"
import { updateInquiryStatus } from './actions'
import { Button } from "@/components/ui/Button"

function getStatusStyle(status: string) {
    switch (status) {
        case 'new': return "bg-blue-100 text-blue-800 border-blue-200"
        case 'in_progress': return "bg-yellow-100 text-yellow-800 border-yellow-200"
        case 'resolved': return "bg-green-100 text-green-800 border-green-200"
        default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

export default async function InquiriesPage() {
    const supabase = await createClient()
    const { data: inquiries, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        return <div className="text-red-500">Error loading inquiries: {error.message}</div>
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Contact Inquiries</h1>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Date</th>
                                <th className="px-6 py-4 font-semibold">From</th>
                                <th className="px-6 py-4 font-semibold">Subject</th>
                                <th className="px-6 py-4 font-semibold">Message Preview</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {inquiries?.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-gray-400 italic">
                                        No inquiries found.
                                    </td>
                                </tr>
                            ) : (
                                inquiries?.map((inquiry) => (
                                    <tr key={inquiry.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(inquiry.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{inquiry.name}</div>
                                            <div className="text-xs text-gray-500">{inquiry.email}</div>
                                        </td>
                                        <td className="px-6 py-4 font-medium">{inquiry.subject || 'No Subject'}</td>
                                        <td className="px-6 py-4 max-w-xs truncate text-gray-500">
                                            {inquiry.message}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusStyle(inquiry.status)} capitalize`}>
                                                {inquiry.status.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                {inquiry.status !== 'resolved' && (
                                                    <form action={updateInquiryStatus.bind(null, inquiry.id, 'resolved')}>
                                                        <Button size="sm" variant="outline" className="h-6 text-xs px-2 text-green-600 border-green-200 bg-green-50 hover:bg-green-100">
                                                            Resolve
                                                        </Button>
                                                    </form>
                                                )}
                                                {inquiry.status === 'new' && (
                                                    <form action={updateInquiryStatus.bind(null, inquiry.id, 'in_progress')}>
                                                        <Button size="sm" variant="outline" className="h-6 text-xs px-2 text-blue-600 border-blue-200 bg-blue-50 hover:bg-blue-100">
                                                            Mark Active
                                                        </Button>
                                                    </form>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
