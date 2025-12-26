
import { createClient } from '@/lib/supabase/server'
import { Star, Quote } from 'lucide-react'

// Revalidate every hour to keep things semi-fresh/random
export const revalidate = 3600

export async function TestimonialsCarousel() {
    const supabase = await createClient()
    const { data: testimonials } = await supabase
        .from('testimonials')
        .select('*')
        .limit(3) // Just show 3 for now in a grid/list
        .order('created_at', { ascending: false })

    if (!testimonials || testimonials.length === 0) return null

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative">
                    <Quote className="w-10 h-10 text-losos-blue/10 absolute top-6 right-6" />

                    <div className="flex text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'text-gray-200'}`} />
                        ))}
                    </div>

                    <p className="text-gray-600 mb-6 italic flex-grow">
                        "{t.content}"
                    </p>

                    <div className="mt-auto">
                        <div className="font-bold text-gray-900">{t.client_name}</div>
                        {t.role && t.company && (
                            <div className="text-sm text-gray-400">
                                {t.role}, {t.company}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
