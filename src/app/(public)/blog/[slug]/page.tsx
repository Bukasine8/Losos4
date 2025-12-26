import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { ArrowLeft, Calendar } from 'lucide-react'
import { ShareButtons } from "@/components/blog/ShareButtons"
import { CommentForm } from "@/components/blog/CommentForm"
import { CommentList } from "@/components/blog/CommentList"

// Revalidate every hour
export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const supabase = await createClient()
    const { data: post } = await supabase.from('posts').select('title, excerpt').eq('slug', slug).single()

    if (!post) return { title: 'Post Not Found' }

    return {
        title: `${post.title} | Losos4 Blog`,
        description: post.excerpt
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const supabase = await createClient()
    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single()

    if (!post) {
        notFound()
    }

    return (
        <main className="pt-24 min-h-screen">
            {/* Header */}
            <div className="bg-gray-900 text-white pt-20 pb-12">
                <div className="container max-w-4xl mx-auto px-6">
                    <Button asChild variant="ghost" className="text-gray-400 hover:text-white pl-0 mb-8">
                        <Link href="/blog">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Articles
                        </Link>
                    </Button>
                    <div className="flex items-center text-sm text-losos-blue font-bold mb-4 space-x-2">
                        <span className="uppercase tracking-widest">Blog</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.created_at).toLocaleDateString()}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        {post.title}
                    </h1>
                    <p className="text-xl text-gray-300 md:leading-relaxed">
                        {post.excerpt}
                    </p>
                </div>
            </div>

            {/* Content */}
            <article className="container max-w-4xl mx-auto px-6 py-12">
                {post.cover_image && (
                    <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-12"
                    />
                )}

                <div className="prose prose-lg prose-blue max-w-none mb-12">
                    {/* 
                      Note: In a real app we'd use a Markdown renderer like react-markdown. 
                      For now we just render simplistic paragraphs.
                    */}
                    {post.content.split('\n').map((paragraph: string, i: number) => (
                        paragraph.trim() ? <p key={i}>{paragraph}</p> : <br key={i} />
                    ))}
                </div>

                {/* Social Share */}
                <ShareButtons title={post.title} slug={post.slug} />

                {/* Comments Section */}
                <div className="mt-16">
                    <CommentList postId={post.id} />
                    <CommentForm postId={post.id} />
                </div>
            </article>

            {/* CTA */}
            <Section theme="light" className="border-t border-gray-100 mt-12 bg-gray-50">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Need personalized advice?</h3>
                    <p className="text-gray-600 mb-8">
                        Our team is ready to discuss how these insights apply to your specific project.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </Section>
        </main>
    )
}
