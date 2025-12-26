-- Add foreign key relationship if it doesn't exist
ALTER TABLE projects
ADD COLUMN IF NOT EXISTS client_id UUID REFERENCES clients(id) ON DELETE SET NULL;

-- If column exists but no FK constraint:
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.table_constraints 
        WHERE constraint_name = 'projects_client_id_fkey'
    ) THEN
        ALTER TABLE projects
        ADD CONSTRAINT projects_client_id_fkey
        FOREIGN KEY (client_id)
        REFERENCES clients(id)
        ON DELETE SET NULL;
    END IF;
END $$;
