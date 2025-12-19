import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { ClientProviders } from "@/components/ClientProviders";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Losos4 Consultants",
    description: "Engineering You Can Trust. Results You Can Measure.",
    icons: {
        icon: "/images/Logo.gif",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${manrope.variable} antialiased overflow-x-hidden flex flex-col min-h-screen`}
            >
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <ClientProviders />
                <BottomNav />
            </body>
        </html>
    );
}
