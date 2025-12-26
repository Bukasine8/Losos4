import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Eye, Plus } from 'lucide-react'
import { Button } from "@/components/ui/Button"

export default async function ClientsPage() {
    const supabase = await createClient()
    const { data: clients, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        return <div className="text-red-500">Error loading clients: {error.message}</div>
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
                <Link href="/admin/clients/new">
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Client
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Name</th>
                                <th className="px-6 py-4 font-semibold">Email</th>
                                <th className="px-6 py-4 font-semibold">Phone</th>
                                <th className="px-6 py-4 font-semibold">Company</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {clients?.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-400 italic">
                                        No clients found.
                                    </td>
                                </tr>
                            ) : (
                                clients?.map((client) => (
                                    <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">{client.name}</td>
                                        <td className="px-6 py-4 text-blue-600">{client.email}</td>
                                        <td className="px-6 py-4">{client.phone || '-'}</td>
                                        <td className="px-6 py-4">{client.company || '-'}</td>
                                        <td className="px-6 py-4 text-right">
                                            <Link
                                                href={`/admin/clients/${client.id}`}
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
