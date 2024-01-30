import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gqslyondgncsrrryejpi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxc2x5b25kZ25jc3JycnllanBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNDE2OTcsImV4cCI6MjAxNTgxNzY5N30.a3cfhpF7v-D4eW_C4LW_NMw6F9js3UyiwI4JU4kUIu4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)