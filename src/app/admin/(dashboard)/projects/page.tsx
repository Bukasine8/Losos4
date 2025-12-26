import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { FolderKanban, Plus } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"

function getStatusStyle(status: string) {
    switch (status) {
        case 'active': return "bg-green-100 text-green-800 border-green-200"
        case 'completed': return "bg-blue-100 text-blue-800 border-blue-200"
        case 'archived': return "bg-gray-100 text-gray-800 border-gray-200"
        case 'on_hold': return "bg-yellow-100 text-yellow-800 border-yellow-200"
        default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

export default async function ProjectsPage() {
    const supabase = await createClient()

    // Fetch projects with client name (using a join or just raw select if relation exists)
    // Supabase can do: .select('*, clients(name)')
    const { data: projects, error } = await supabase
        .from('projects')
        .select(`
            *,
            clients (
                name
            )
        `)
        .order('created_at', { ascending: false })

    if (error) {
        return <div className="text-red-500">Error loading projects: {error.message}</div>
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
                <Link href="/admin/projects/new">
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        New Project
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Project Name</th>
                                <th className="px-6 py-4 font-semibold">Client</th>
                                <th className="px-6 py-4 font-semibold">Type</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold">Timeline</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {projects?.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-gray-400 italic">
                                        No projects found.
                                    </td>
                                </tr>
                            ) : (
                                projects?.map((project) => (
                                    <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">{project.name}</td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {/* @ts-ignore - Supabase type for joined query */}
                                            {project.clients?.name || 'Unknown'}
                                        </td>
                                        <td className="px-6 py-4">{project.type || '-'}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusStyle(project.status)} capitalize`}>
                                                {project.status.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-xs">
                                            {project.start_date ? new Date(project.start_date).toLocaleDateString() : 'TBD'}
                                            {' - '}
                                            {project.end_date ? new Date(project.end_date).toLocaleDateString() : 'TBD'}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                <FolderKanban className="w-4 h-4" />
                                            </Button>
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
