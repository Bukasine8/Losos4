import { CertificationsHeroSection } from "@/components/certifications/CertificationsHeroSection";
import { CertificationsGridSection } from "@/components/certifications/CertificationsGridSection";
import { LicenseDetailsSection } from "@/components/certifications/LicenseDetailsSection";
import { CertificationsCTASection } from "@/components/certifications/CertificationsCTASection";

export default function CertificationsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <CertificationsHeroSection />
            <CertificationsGridSection />
            <LicenseDetailsSection />
            <CertificationsCTASection />
        </div>
    );
}
