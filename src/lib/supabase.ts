import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ezlxqxvwjkdyrxtutrxj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6bHhxeHZ3amtkeXJ4dHV0cnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MTA5NDYsImV4cCI6MjA1NTQ4Njk0Nn0.xxo-nr-IO-Qq-TfeW44rxCIi3DaBGPHLZoGoVieyNEQ'

export const supabase = createClient(supabaseUrl, supabaseKey)