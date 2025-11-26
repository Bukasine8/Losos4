export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    email: string
                    full_name: string | null
                    role: 'admin' | 'editor' | 'viewer'
                    avatar_url: string | null
                    created_at: string
                }
                Insert: {
                    id: string
                    email: string
                    full_name?: string | null
                    role?: 'admin' | 'editor' | 'viewer'
                    avatar_url?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    email?: string
                    full_name?: string | null
                    role?: 'admin' | 'editor' | 'viewer'
                    avatar_url?: string | null
                    created_at?: string
                }
            }
            services: {
                Row: {
                    id: string
                    title: string
                    slug: string
                    short_description: string | null
                    full_description: string | null
                    icon_name: string | null
                    image_url: string | null
                    category: 'mechanical' | 'electrical' | 'fire-safety' | 'project-management' | 'consulting' | null
                    display_order: number
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    slug: string
                    short_description?: string | null
                    full_description?: string | null
                    icon_name?: string | null
                    image_url?: string | null
                    category?: 'mechanical' | 'electrical' | 'fire-safety' | 'project-management' | 'consulting' | null
                    display_order?: number
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    slug?: string
                    short_description?: string | null
                    full_description?: string | null
                    icon_name?: string | null
                    image_url?: string | null
                    category?: 'mechanical' | 'electrical' | 'fire-safety' | 'project-management' | 'consulting' | null
                    display_order?: number
                    created_at?: string
                    updated_at?: string
                }
            }
            projects: {
                Row: {
                    id: string
                    title: string
                    slug: string
                    client_name: string | null
                    location: string | null
                    completion_date: string | null
                    service_category: string | null
                    summary: string | null
                    description: string | null
                    featured_image_url: string | null
                    gallery_images: string[] | null
                    is_featured: boolean
                    client_consent: boolean
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    slug: string
                    client_name?: string | null
                    location?: string | null
                    completion_date?: string | null
                    service_category?: string | null
                    summary?: string | null
                    description?: string | null
                    featured_image_url?: string | null
                    gallery_images?: string[] | null
                    is_featured?: boolean
                    client_consent?: boolean
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    slug?: string
                    client_name?: string | null
                    location?: string | null
                    completion_date?: string | null
                    service_category?: string | null
                    summary?: string | null
                    description?: string | null
                    featured_image_url?: string | null
                    gallery_images?: string[] | null
                    is_featured?: boolean
                    client_consent?: boolean
                    created_at?: string
                    updated_at?: string
                }
            }
            enquiries: {
                Row: {
                    id: string
                    name: string
                    email: string
                    phone: string | null
                    company: string | null
                    service_interest: string | null
                    message: string | null
                    status: 'new' | 'contacted' | 'closed'
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    email: string
                    phone?: string | null
                    company?: string | null
                    service_interest?: string | null
                    message?: string | null
                    status?: 'new' | 'contacted' | 'closed'
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    email?: string
                    phone?: string | null
                    company?: string | null
                    service_interest?: string | null
                    message?: string | null
                    status?: 'new' | 'contacted' | 'closed'
                    created_at?: string
                }
            }
        }
    }
}
