import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CategoryBadge, { categoryLabel } from '../components/CategoryBadge'

describe('CategoryBadge component', () => {
  it('renders the human-readable label for TEMPLE', () => {
    render(<CategoryBadge category="TEMPLE" />)
    expect(screen.getByText(/Temple/i)).toBeTruthy()
  })

  it('renders the icon for TREK_ROUTE', () => {
    render(<CategoryBadge category="TREK_ROUTE" />)
    expect(screen.getByText(/Trek/i)).toBeTruthy()
  })

  it('renders the icon for NATIONAL_PARK', () => {
    render(<CategoryBadge category="NATIONAL_PARK" />)
    expect(screen.getByText(/National Park/i)).toBeTruthy()
  })

  it('falls back to the raw category name for unknown categories', () => {
    render(<CategoryBadge category="UNKNOWN_TYPE" />)
    expect(screen.getByText(/UNKNOWN_TYPE/i)).toBeTruthy()
  })

  it('applies lg size classes when size="lg"', () => {
    const { container } = render(<CategoryBadge category="TEMPLE" size="lg" />)
    expect(container.firstChild).toHaveClass('text-sm')
  })
})

describe('categoryLabel helper', () => {
  it('returns label for known categories', () => {
    expect(categoryLabel('TEMPLE')).toBe('Temple')
    expect(categoryLabel('MONASTERY')).toBe('Monastery')
    expect(categoryLabel('LAKE')).toBe('Lake')
    expect(categoryLabel('TREK_ROUTE')).toBe('Trek')
  })

  it('returns raw value for unknown categories', () => {
    expect(categoryLabel('MADE_UP')).toBe('MADE_UP')
  })
})
