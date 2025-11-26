export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div className="container py-10">
            <h1 className="text-4xl font-bold mb-6">Project Detail: {params.slug}</h1>
            <p className="text-muted-foreground">Content coming soon...</p>
        </div>
    );
}
