import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/std-card";
import { Users, Calendar, FolderKanban, TrendingUp } from "lucide-react"

export default function AdminDashboardPage() {
    // TODO: Fetch real data from Supabase
    const stats = [
        { label: "Total Meetings", value: "12", icon: Calendar, trend: "+2 this week" },
        { label: "Active Clients", value: "24", icon: Users, trend: "+4 new" },
        { label: "Ongoing Projects", value: "8", icon: FolderKanban, trend: "3 due soon" },
        { label: "Total Inquiries", value: "156", icon: TrendingUp, trend: "+12%" },
    ]

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            <p className="text-xs text-green-600 mt-2 font-medium">{stat.trend}</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                            <stat.icon className="w-5 h-5" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 min-h-[300px]">
                    <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
                    <div className="text-gray-400 text-sm italic py-8 text-center">No recent activity</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 min-h-[300px]">
                    <h3 className="text-lg font-bold mb-4">Upcoming Meetings</h3>
                    <div className="text-gray-400 text-sm italic py-8 text-center">No upcoming meetings</div>
                </div>
            </div>
        </div>
    )
}
