import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  "https://supabase.com/dashboard/project/aotenksnfkqknntodiby/storage/files/buckets/pdfs",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvdGVua3NuZmtxa25udG9kaWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NjcwOTYsImV4cCI6MjA4MTA0MzA5Nn0.CYnpCRL5Xua1fc-BTYKtMvC8h4WWJNLQd2rJzVcZL3U"
);
