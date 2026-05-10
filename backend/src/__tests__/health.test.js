import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../app.js'

describe('GET /health', () => {
  it('returns 200 with status ok', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('ok')
  })

  it('returns the current NODE_ENV', async () => {
    const res = await request(app).get('/health')
    expect(res.body).toHaveProperty('env', 'test')
  })
})

describe('Unknown routes', () => {
  it('returns 404 for an unknown path', async () => {
    const res = await request(app).get('/api/does-not-exist')
    expect(res.status).toBe(404)
    expect(res.body).toHaveProperty('error', 'Not found')
  })
})
