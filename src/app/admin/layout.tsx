export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-muted/30 border-r p-6 hidden md:block">
                <div className="font-bold text-lg mb-6">Admin Dashboard</div>
                <nav className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">Overview</div>
                    <div className="text-sm font-medium text-muted-foreground">Projects</div>
                    <div className="text-sm font-medium text-muted-foreground">Services</div>
                    <div className="text-sm font-medium text-muted-foreground">Enquiries</div>
                </nav>
            </aside>
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
