import Link from "next/link";

export function TermsContentSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container max-w-4xl">
                <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground text-lg mb-8">
                        Last Updated: November 26, 2023
                    </p>

                    {/* Introduction */}
                    <h2 className="text-2xl font-bold mb-4 mt-12">1. Introduction / Scope</h2>
                    <p className="text-base leading-relaxed mb-6">
                        These Terms and Conditions ("Terms") govern your use of the services provided by Losos4 Engineering Consultancy ("Losos4", "we", "us", or "our"). By engaging our services, submitting an enquiry, or accessing our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                    </p>

                    {/* Services Disclaimer */}
                    <h2 className="text-2xl font-bold mb-4 mt-12">2. Services Disclaimer</h2>
                    <p className="text-base leading-relaxed mb-4">
                        Losos4 provides professional engineering consultancy services including but not limited to mechanical design, electrical design, fire safety engineering, MEP integration, and project management. All services are provided in accordance with applicable Nigerian engineering standards and regulations.
                    </p>
                    <p className="text-base leading-relaxed mb-6">
                        While we strive to deliver the highest quality of service, we do not guarantee specific outcomes or results. Engineering projects are subject to various external factors including site conditions, regulatory changes, and client-provided information. We reserve the right to modify service scope based on project requirements and feasibility assessments.
                    </p>

                    {/* User Responsibilities */}
                    <h2 className="text-2xl font-bold mb-4 mt-12">3. User Responsibilities</h2>
                    <p className="text-base leading-relaxed mb-4">
                        Clients engaging our services are responsible for:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Providing accurate and complete project information</li>
                        <li>Ensuring timely access to project sites and necessary documentation</li>
                        <li>Obtaining all required permits and approvals from relevant authorities</li>
                        <li>Making timely payments as per agreed terms</li>
                        <li>Communicating any changes to project scope or requirements promptly</li>
                        <li>Complying with all applicable laws and regulations</li>
                    </ul>

                    {/* Intellectual Property */}
                    <h2 className="text-2xl font-bold mb-4 mt-12">4. Intellectual Property</h2>
                    <p className="text-base leading-relaxed mb-4">
                        All designs, drawings, specifications, reports, and other deliverables created by Losos4 remain our intellectual property until full payment is received. Upon full payment, clients are granted a non-exclusive, non-transferable license to use the deliverables for the specific project for which they were commissioned.
                    </p>
                    <p className="text-base leading-relaxed mb-6">
                        Clients may not reproduce, modify, or distribute our work for other projects without prior written consent. Any unauthorized use of our intellectual property may result in legal action.
                    </p>

                    {/* Privacy & Data Use */}
                    <h2 className="text-2xl font-bold mb-4 mt-12">5. Privacy & Data Use</h2>
                    <p className="text-base leading-relaxed mb-6">
                        We are committed to protecting your privacy. Any personal or project-related information you provide will be handled in accordance with our{" "}
                        <Link href="/privacy" className="text-primary hover:underline font-medium">
                            Privacy Policy
                        </Link>
                        . We collect and use data solely for the purpose of delivering our services and improving client experience. We do not sell or share your information with third parties except as required by law or with your explicit consent.
                    </p>

                    {/* Limitation of Liability */}
                    <h2 className="text-2xl font-bold mb-4 mt-12">6. Limitation of Liability</h2>
                    <p className="text-base leading-relaxed mb-4">
                        To the fullest extent permitted by law, Losos4 shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our services. Our total liability for any claim shall not exceed the total fees paid by the client for the specific service giving rise to the claim.
                    </p>
                    <p className="text-base leading-relaxed mb-6">
                        We are not responsible for delays or failures in performance resulting from causes beyond our reasonable control, including but not limited to acts of God, government actions, natural disasters, or client-caused delays.
                    </p>

                    {/* Governing Law */}
                    <h2 className="text-2xl font-bold mb-4 mt-12">7. Governing Law</h2>
                    <p className="text-base leading-relaxed mb-6">
                        These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Nigeria. Both parties agree to attempt to resolve disputes through good-faith negotiation before pursuing legal action.
                    </p>

                    {/* Amendments / Updates */}
                    <h2 className="text-2xl font-bold mb-4 mt-12">8. Amendments / Updates</h2>
                    <p className="text-base leading-relaxed mb-6">
                        We reserve the right to update or modify these Terms at any time without prior notice. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically to stay informed of any updates.
                    </p>

                    <div className="mt-12 p-6 bg-muted/30 rounded-lg border">
                        <p className="text-sm text-muted-foreground">
                            <strong>Contact Information:</strong> If you have any questions about these Terms & Conditions, please contact us at{" "}
                            <a href="mailto:legal@losos4.com" className="text-primary hover:underline">
                                legal@losos4.com
                            </a>{" "}
                            or call{" "}
                            <a href="tel:+2341234567890" className="text-primary hover:underline">
                                +234 123 456 7890
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
