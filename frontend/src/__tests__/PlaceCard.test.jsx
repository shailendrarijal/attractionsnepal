import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PlaceCard from '../components/PlaceCard'

const BASE_PLACE = {
  id: 1,
  slug: 'pashupatinath-temple',
  name: 'Pashupatinath Temple',
  category: 'TEMPLE',
  summary: 'Sacred Hindu temple on the Bagmati river.',
  district: 'Kathmandu',
  province: 'Bagmati',
  heroImage: null,
  featured: false,
  bestSeason: null,
  trekDays: null,
}

function renderCard(props = {}) {
  return render(
    <MemoryRouter>
      <PlaceCard place={{ ...BASE_PLACE, ...props }} />
    </MemoryRouter>
  )
}

describe('PlaceCard', () => {
  it('renders the place name', () => {
    renderCard()
    expect(screen.getByText('Pashupatinath Temple')).toBeTruthy()
  })

  it('renders district and province', () => {
    renderCard()
    expect(screen.getByText(/Kathmandu.*Bagmati/)).toBeTruthy()
  })

  it('renders the summary', () => {
    renderCard()
    expect(screen.getByText(/Sacred Hindu temple/)).toBeTruthy()
  })

  it('links to the correct place slug', () => {
    renderCard()
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toBe('/places/pashupatinath-temple')
  })

  it('shows Featured badge when featured=true', () => {
    renderCard({ featured: true })
    expect(screen.getByText('Featured')).toBeTruthy()
  })

  it('does not show Featured badge when featured=false', () => {
    renderCard({ featured: false })
    expect(screen.queryByText('Featured')).toBeNull()
  })

  it('shows bestSeason when provided', () => {
    renderCard({ bestSeason: 'Oct–Apr' })
    expect(screen.getByText('Oct–Apr')).toBeTruthy()
  })

  it('shows trekDays when provided', () => {
    renderCard({ trekDays: 14 })
    expect(screen.getByText(/14 days/)).toBeTruthy()
  })

  it('uses placeholder image when heroImage is null', () => {
    renderCard()
    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toContain('unsplash')
  })

  it('uses heroImage when provided', () => {
    renderCard({ heroImage: 'https://example.com/img.jpg' })
    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toBe('https://example.com/img.jpg')
  })
})
