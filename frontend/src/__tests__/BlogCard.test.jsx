import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import BlogCard from '../components/BlogCard'

const BASE_BLOG = {
  id: 1,
  slug: 'everest-base-camp-trek-complete-guide',
  title: 'Everest Base Camp Trek — Complete Guide',
  excerpt: 'Everything you need to know about the EBC trek.',
  heroImage: null,
  publishedAt: '2024-06-01T00:00:00Z',
  tags: [],
}

function renderCard(props = {}) {
  return render(
    <MemoryRouter>
      <BlogCard blog={{ ...BASE_BLOG, ...props }} />
    </MemoryRouter>
  )
}

describe('BlogCard', () => {
  it('renders the blog title', () => {
    renderCard()
    expect(screen.getByText('Everest Base Camp Trek — Complete Guide')).toBeTruthy()
  })

  it('renders the excerpt', () => {
    renderCard()
    expect(screen.getByText(/Everything you need to know/)).toBeTruthy()
  })

  it('links to the correct blog slug', () => {
    renderCard()
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toBe('/blog/everest-base-camp-trek-complete-guide')
  })

  it('renders the formatted published date', () => {
    renderCard()
    // Date is locale-dependent but should include the year
    expect(screen.getByText(/2024/)).toBeTruthy()
  })

  it('does not render date when publishedAt is null', () => {
    renderCard({ publishedAt: null })
    expect(screen.queryByText(/2024/)).toBeNull()
  })

  it('renders up to 3 tags', () => {
    renderCard({
      tags: [
        { tag: { name: 'Trekking', slug: 'trekking' } },
        { tag: { name: 'Everest', slug: 'everest' } },
        { tag: { name: 'Guide', slug: 'guide' } },
        { tag: { name: 'Extra', slug: 'extra' } }, // 4th should be hidden
      ],
    })
    expect(screen.getByText('Trekking')).toBeTruthy()
    expect(screen.getByText('Everest')).toBeTruthy()
    expect(screen.getByText('Guide')).toBeTruthy()
    expect(screen.queryByText('Extra')).toBeNull()
  })

  it('renders no tag chips when tags is empty', () => {
    renderCard({ tags: [] })
    // No badge elements for tags (nothing to query)
    expect(screen.queryByText('Trekking')).toBeNull()
  })

  it('uses placeholder image when heroImage is null', () => {
    renderCard()
    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toContain('unsplash')
  })

  it('uses heroImage when provided', () => {
    renderCard({ heroImage: 'https://example.com/blog.jpg' })
    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toBe('https://example.com/blog.jpg')
  })
})
