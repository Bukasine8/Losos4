import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, MapPin, Mail, Phone, Building } from 'lucide-react'
import { updateMeetingStatus } from './actions'

export default async function MeetingDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabase = await createClient()

    const { data: meeting, error } = await supabase
        .from('meetings')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !meeting) {
        notFound()
    }

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <Link
                    href="/admin/meetings"
                    className="flex items-center text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Meetings
                </Link>
                <div className="flex gap-2">
                    {/* Status Actions */}
                    <form action={updateMeetingStatus.bind(null, id, 'confirmed')}>
                        <Button variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">
                            Confirm
                        </Button>
                    </form>
                    <form action={updateMeetingStatus.bind(null, id, 'cancelled')}>
                        <Button variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200">
                            Cancel
                        </Button>
                    </form>
                    <form action={updateMeetingStatus.bind(null, id, 'completed')}>
                        <Button variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                            Mark Completed
                        </Button>
                    </form>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex justify-between items-start mb-4">
                        <h1 className="text-2xl font-bold text-gray-900">{meeting.contact_name}</h1>
                        <Badge variant="outline" className="capitalize text-sm px-3 py-1">
                            {meeting.status}
                        </Badge>
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{new Date(meeting.date).toDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{meeting.time_slot}</span>
                        </div>
                        <div className="flex items-center gap-2 capitalize">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{meeting.meeting_type} Meeting</span>
                        </div>
                    </div>
                </div>

                <div className="p-8 grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">Contact Details</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <a href={`mailto:${meeting.contact_email}`} className="text-blue-600 hover:underline">
                                    {meeting.contact_email}
                                </a>
                            </div>
                            {meeting.contact_phone && (
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <a href={`tel:${meeting.contact_phone}`} className="text-gray-700 hover:text-gray-900">
                                        {meeting.contact_phone}
                                    </a>
                                </div>
                            )}
                            {meeting.contact_company && (
                                <div className="flex items-center gap-3">
                                    <Building className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-700">{meeting.contact_company}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">Project Information</h2>
                        <div className="space-y-4">
                            <div>
                                <span className="text-sm text-gray-500 block mb-1">Project Type</span>
                                <span className="font-medium text-gray-900">{meeting.project_type_interest}</span>
                            </div>
                            <div>
                                <span className="text-sm text-gray-500 block mb-1">Description</span>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                    {meeting.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-gray-50/50 border-t border-gray-100 flex justify-end text-sm text-gray-500">
                    Created on {new Date(meeting.created_at).toLocaleString()}
                </div>
            </div>
        </div>
    )
}
