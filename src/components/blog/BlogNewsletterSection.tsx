"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function BlogNewsletterSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container">
                <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-12 border shadow-sm text-center">
                    <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                        <Mail className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Get Engineering Insights Monthly</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Subscribe to our newsletter to receive the latest articles, case studies, and industry updates directly in your inbox. No spam, just value.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="h-12 focus-visible:ring-accent"
                            required
                        />
                        <Button type="submit" size="lg" className="h-12 bg-primary hover:bg-primary/90">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
