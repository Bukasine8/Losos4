import { notFound } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase-browser";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featured_image_url: string | null;
    author_id: string;
    category: string;
    tags: string[];
    published_at: string;
    created_at: string;
    profiles: {
        name: string;
        avatar_url: string | null;
    };
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabaseBrowser
        .from("blog_posts")
        .select(`
            *,
            profiles (
                name,
                avatar_url
            )
        `)
        .eq("slug", slug)
        .eq("status", "published")
        .single();

    if (error || !data) return null;
    return data as BlogPost;
}

async function getRelatedPosts(category: string, currentSlug: string): Promise<BlogPost[]> {
    const { data } = await supabaseBrowser
        .from("blog_posts")
        .select(`
            *,
            profiles (
                name,
                avatar_url
            )
        `)
        .eq("category", category)
        .eq("status", "published")
        .neq("slug", currentSlug)
        .limit(3);

    return (data as BlogPost[]) || [];
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getBlogPost(params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = await getRelatedPosts(post.category, post.slug);

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container max-w-4xl">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </Link>

                {/* Featured Image */}
                {post.featured_image_url && (
                    <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
                        <img
                            src={post.featured_image_url}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Post Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary capitalize">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {format(new Date(post.published_at), "MMMM d, yyyy")}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                        {post.title}
                    </h1>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                            {post.profiles.avatar_url ? (
                                <img
                                    src={post.profiles.avatar_url}
                                    alt={post.profiles.name}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <User className="h-6 w-6 text-muted-foreground" />
                            )}
                        </div>
                        <div>
                            <p className="font-medium">{post.profiles.name}</p>
                            <p className="text-sm text-muted-foreground">Author</p>
                        </div>
                    </div>
                </div>

                {/* Post Content */}
                <GlassCard className="p-8 mb-12">
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </GlassCard>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-sm font-semibold mb-3">Tags:</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-muted text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group"
                                >
                                    <GlassCard className="p-4 h-full hover:border-primary/50 transition-colors">
                                        {relatedPost.featured_image_url && (
                                            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                                                <img
                                                    src={relatedPost.featured_image_url}
                                                    alt={relatedPost.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </GlassCard>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
