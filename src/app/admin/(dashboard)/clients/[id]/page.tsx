import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, Building, Calendar, FolderKanban } from 'lucide-react'

export default async function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabase = await createClient()

    // Fetch client details
    const { data: client, error: clientError } = await supabase
        .from('clients')
        .select('*')
        .eq('id', id)
        .single()

    if (clientError || !client) {
        notFound()
    }

    // Fetch client's meetings (assuming we link by email for now as a fallback, or strictly ID if enforced)
    // Logic: meetings where client_id = id OR contact_email = client.email
    const { data: meetings } = await supabase
        .from('meetings')
        .select('*')
        .or(`client_id.eq.${id},contact_email.eq.${client.email}`)
        .order('date', { ascending: false })

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
                <Link
                    href="/admin/clients"
                    className="flex items-center text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Clients
                </Link>
                <div className="flex gap-2">
                    <Button variant="outline">Edit Profile</Button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Sidebar: Client Info */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex flex-col items-center text-center mb-6">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-4">
                                {client.name.charAt(0).toUpperCase()}
                            </div>
                            <h1 className="text-xl font-bold text-gray-900">{client.name}</h1>
                            <p className="text-sm text-gray-500">Client since {new Date(client.created_at).getFullYear()}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600 truncate">{client.email}</span>
                            </div>
                            {client.phone && (
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-600">{client.phone}</span>
                                </div>
                            )}
                            {client.company && (
                                <div className="flex items-center gap-3 text-sm">
                                    <Building className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-600">{client.company}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <FolderKanban className="w-4 h-4" />
                            Active Projects
                        </h3>
                        <p className="text-sm text-gray-500 italic text-center py-4">No active projects linked.</p>
                        <Button variant="outline" className="w-full text-xs" disabled>Create Project</Button>
                    </div>
                </div>

                {/* Main Content: History */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="font-bold text-gray-900 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-gray-500" />
                                Meeting History
                            </h2>
                            <Badge variant="secondary">{meetings?.length || 0} Records</Badge>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {meetings?.length === 0 ? (
                                <div className="p-8 text-center text-gray-400 italic">No meeting history found.</div>
                            ) : (
                                meetings?.map((meeting) => (
                                    <Link
                                        key={meeting.id}
                                        href={`/admin/meetings/${meeting.id}`}
                                        className="block p-4 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-medium text-gray-900">{meeting.title || "Consultation Meeting"}</span>
                                            <Badge variant="outline" className={`capitalize text-xs ${meeting.status === 'confirmed' ? 'bg-green-50 text-green-700 border-green-200' :
                                                    meeting.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''
                                                }`}>
                                                {meeting.status}
                                            </Badge>
                                        </div>
                                        <div className="flex gap-4 text-sm text-gray-500">
                                            <span>{new Date(meeting.date).toLocaleDateString()}</span>
                                            <span>{meeting.time_slot}</span>
                                            <span className="capitalize">{meeting.meeting_type}</span>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
