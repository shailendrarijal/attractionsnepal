// Test environment variables — set before any module imports
process.env.NODE_ENV          = 'test'
process.env.JWT_SECRET        = 'test-jwt-secret-for-vitest'
process.env.ADMIN_EMAIL       = 'admin@test.com'
// bcrypt hash for "password123" — generated with bcryptjs cost 10
process.env.ADMIN_PASSWORD_HASH = '$2a$10$jph9lfZxFH6NBEVD0M5hY.jqWjuJfH0VTAsD8uibOo8mczIFJewOC'
process.env.SUPABASE_URL      = 'https://test.supabase.co'
process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-role-key'
