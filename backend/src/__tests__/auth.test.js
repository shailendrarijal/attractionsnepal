import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../app.js'

// Note: ADMIN_EMAIL and ADMIN_PASSWORD_HASH are set in setup.js
// Hash is for "password123" — we test against that

describe('POST /api/auth/login', () => {
  it('returns 400 when body is missing', async () => {
    const res = await request(app).post('/api/auth/login').send({})
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error')
  })

  it('returns 400 when email is missing', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ password: 'password123' })
    expect(res.status).toBe(400)
  })

  it('returns 400 when password is missing', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@test.com' })
    expect(res.status).toBe(400)
  })

  it('returns 401 for wrong email', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wrong@test.com', password: 'password123' })
    expect(res.status).toBe(401)
    expect(res.body).toHaveProperty('error', 'Invalid credentials')
  })

  it('returns 401 for wrong password', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@test.com', password: 'wrongpassword' })
    expect(res.status).toBe(401)
    expect(res.body).toHaveProperty('error', 'Invalid credentials')
  })

  it('returns a JWT token for correct credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@test.com', password: 'password123' })
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('token')
    // JWT format: 3 base64 segments separated by dots
    expect(res.body.token.split('.')).toHaveLength(3)
  })
})

describe('Protected admin routes', () => {
  it('returns 401 without Authorization header', async () => {
    const res = await request(app).get('/api/admin/places')
    expect(res.status).toBe(401)
  })

  it('returns 401 with a malformed token', async () => {
    const res = await request(app)
      .get('/api/admin/places')
      .set('Authorization', 'Bearer not-a-valid-token')
    expect(res.status).toBe(401)
  })
})
