'use client'

import { createProjectAction } from '../actions'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useActionState } from 'react'

interface ProjectFormProps {
    clients: { id: string, name: string }[]
}

const initialState = {
    error: '',
}

export default function ProjectForm({ clients }: ProjectFormProps) {
    const [state, formAction] = useActionState(createProjectAction, initialState)

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/projects"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 text-gray-500" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Create New Project</h1>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <form action={formAction} className="space-y-6">
                    {state?.error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
                            {state.error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="name">Project Name <span className="text-red-500">*</span></Label>
                        <Input id="name" name="name" required placeholder="Website Redesign" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="client_id">Client <span className="text-red-500">*</span></Label>
                        <select
                            id="client_id"
                            name="client_id"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="">Select a client...</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>{client.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="type">Project Type</Label>
                        <select
                            id="type"
                            name="type"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="web_development">Web Development</option>
                            <option value="consulting">Consulting</option>
                            <option value="marketing">Marketing</option>
                            <option value="design">Design</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="start_date">Start Date</Label>
                            <Input id="start_date" name="start_date" type="date" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="end_date">Estimated End Date</Label>
                            <Input id="end_date" name="end_date" type="date" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <textarea
                            id="description"
                            name="description"
                            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Project details and scope..."
                        />
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                        <Link href="/admin/projects">
                            <Button variant="outline" type="button">Cancel</Button>
                        </Link>
                        <Button type="submit">Create Project</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
