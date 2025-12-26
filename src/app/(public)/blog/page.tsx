import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Calendar, ArrowRight } from 'lucide-react'

// Revalidate every 60 seconds (ISR)
export const revalidate = 60

export const metadata = {
    title: 'Blog | Losos4 Consultants',
    description: 'Insights and news from our engineering team.',
}

export default async function BlogPage() {
    const supabase = await createClient()
    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })

    return (
        <main className="pt-24 min-h-screen">
            <Section theme="dark" className="py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h1>
                    <p className="text-xl text-gray-300">
                        Trends, case studies, and updates from the world of engineering.
                    </p>
                </div>
            </Section>

            <Section theme="light">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts?.length === 0 ? (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            No articles published yet. Check back soon!
                        </div>
                    ) : (
                        posts?.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden rounded-lg">
                                {post.cover_image && (
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={post.cover_image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                                        <Calendar className="w-3 h-3" />
                                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-losos-blue transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-losos-blue font-bold text-sm mt-auto">
                                        Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </Section>
        </main>
    )
}
