import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Users, Calendar, FolderKanban, Settings, LogOut, MessageSquare, FileText, MessageSquareQuote } from 'lucide-react'

// Basic Admin Sidebar Component (Inline for now)
function AdminSidebar() {
    const navItems = [
        { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/admin/meetings', icon: Calendar, label: 'Meetings' },
        { href: '/admin/clients', icon: Users, label: 'Clients' },
        { href: '/admin/projects', icon: FolderKanban, label: 'Projects' },
        { href: '/admin/inquiries', icon: MessageSquare, label: 'Inquiries' },
        { href: '/admin/blog', icon: FileText, label: 'Blog' },
        { href: '/admin/testimonials', icon: MessageSquareQuote, label: 'Testimonials' },
        { href: '/admin/settings', icon: Settings, label: 'Settings' },
    ]

    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col fixed left-0 top-0 h-full overflow-y-auto z-10">
            <div className="p-6 border-b border-slate-800">
                <h1 className="text-xl font-bold tracking-wider">LOSOS ADMIN</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-md transition-colors"
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t border-slate-800">
                <form action={async () => {
                    'use server'
                    const supabase = await createClient()
                    await supabase.auth.signOut()
                    redirect('/admin/login')
                }}>
                    <button type="submit" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-slate-800 hover:text-red-300 w-full rounded-md transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span>Sign Out</span>
                    </button>
                </form>
            </div>
        </aside>
    )
}

export default async function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/admin/login')
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
                    <h2 className="text-gray-500 text-sm font-medium">Welcome back, {user.email}</h2>
                    {/* Add user profile dropdown or notifications here later */}
                </header>
                {children}
            </main>
        </div>
    )
}
