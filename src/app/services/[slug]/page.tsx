export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div className="container py-10">
            <h1 className="text-4xl font-bold mb-6">Service Detail: {params.slug}</h1>
            <p className="text-muted-foreground">Content coming soon...</p>
        </div>
    );
}
