import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

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
    title: {
        template: '%s | Losos4 Consultants Ltd',
        default: 'Losos4 Consultants Ltd | Engineering Consulting Firm Abuja',
    },
    description: "Leading Engineering Consulting Firm in Abuja, Nigeria. Specializing in Mechanical, Electrical, Fire Engineering, and Quantity Surveying. Precision Engineering for Critical Infrastructure.",
    keywords: ["Engineering consulting firm Abuja", "MEP engineering services Nigeria", "Fire safety consultants Abuja", "Mechanical engineering design", "Electrical power distribution", "Quantity surveying Abuja", "Losos4"],
    icons: {
        icon: "/images/Logo.gif",
    },
    openGraph: {
        type: 'website',
        locale: 'en_NG',
        url: 'https://losos4.com',
        siteName: 'Losos4 Consultants Ltd',
        images: [
            {
                url: '/images/hero-1.jpg', // Using a hero image as fallback OG
                width: 1200,
                height: 630,
                alt: 'Losos4 Consultants Projects',
            },
        ],
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
                {children}
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
                <JsonLd />
            </body>
        </html>
    );
}
