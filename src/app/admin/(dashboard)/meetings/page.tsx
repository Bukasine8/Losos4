
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/std-card";
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { Eye } from 'lucide-react'

// Helper function for status styles
function getStatusStyle(status: string) {
    switch (status) {
        case 'confirmed': return "bg-green-100 text-green-800 border-green-200"
        case 'pending': return "bg-yellow-100 text-yellow-800 border-yellow-200"
        case 'cancelled': return "bg-red-100 text-red-800 border-red-200"
        case 'completed': return "bg-blue-100 text-blue-800 border-blue-200"
        default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

export default async function MeetingsPage() {
    const supabase = await createClient()
    const { data: meetings, error } = await supabase
        .from('meetings')
        .select('*')
        .order('date', { ascending: false })

    if (error) {
        return <div className="text-red-500">Error loading meetings: {error.message}</div>
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Meetings</h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Date & Time</th>
                                <th className="px-6 py-4 font-semibold">Client</th>
                                <th className="px-6 py-4 font-semibold">Type</th>
                                <th className="px-6 py-4 font-semibold">Project</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {meetings?.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-gray-400 italic">
                                        No meetings found.
                                    </td>
                                </tr>
                            ) : (
                                meetings?.map((meeting) => (
                                    <tr key={meeting.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">
                                                {new Date(meeting.date).toLocaleDateString()}
                                            </div>
                                            <div className="text-xs text-gray-500">{meeting.time_slot}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{meeting.contact_name}</div>
                                            <div className="text-xs text-gray-500">{meeting.contact_email}</div>
                                        </td>
                                        <td className="px-6 py-4 capitalize">{meeting.meeting_type}</td>
                                        <td className="px-6 py-4">{meeting.project_type_interest || '-'}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px - 2 py - 1 rounded - full text - xs font - medium border ${getStatusStyle(meeting.status)} capitalize`}>
                                                {meeting.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link
                                                href={`/ admin / meetings / ${meeting.id} `}
                                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                                            >
                                                <Eye className="w-4 h-4 mr-1" />
                                                View
                                            </Link>
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

