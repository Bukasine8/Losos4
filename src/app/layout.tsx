import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AIChatbot } from "@/components/ui/AIChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Losos4 Engineering Consultancy",
    description: "Professional mechanical and electrical engineering consultancy services.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <ScrollProgress />
                <AIChatbot />
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
