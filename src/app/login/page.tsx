export default function LoginPage() {
    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-lg border">
                <h1 className="text-2xl font-bold text-center">Admin Login</h1>
                <p className="text-center text-muted-foreground">Sign in to access the dashboard</p>
                {/* Auth form will go here */}
            </div>
        </div>
    );
}
