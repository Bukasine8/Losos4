import { createClient } from '@/lib/supabase/server'
import ProjectForm from './project-form'

// Fetch clients for the dropdown
async function getClients() {
    const supabase = await createClient()
    const { data } = await supabase.from('clients').select('id, name').order('name')
    return data || []
}

export default async function NewProjectPage() {
    const clients = await getClients()
    return <ProjectForm clients={clients} />
}
