import Link from "next/link";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`flex items-center gap-2 font-bold text-xl ${className}`}>
            {/* Placeholder for actual logo */}
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
                L4
            </div>
            <span className="hidden sm:inline-block text-foreground">Losos4</span>
        </Link>
    );
}
