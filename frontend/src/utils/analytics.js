/**
 * Thin wrapper around GA4 gtag so the rest of the app never calls
 * window.gtag directly (easy to swap or disable in tests).
 */

const GA_ID = 'G-GJ7T4LMRJP'

function gtag(...args) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

/** Call on every route change (SPA navigation). */
export function trackPageView(path) {
  gtag('config', GA_ID, { page_path: path })
}

/**
 * Generic event helper.
 * @param {string} eventName  – GA4 event name (snake_case)
 * @param {object} params     – any GA4 event parameters
 */
export function trackEvent(eventName, params = {}) {
  gtag('event', eventName, params)
}

// ── Pre-built event helpers ────────────────────────────────────────────────

export const Analytics = {
  /** Fired when a story article is fully loaded. */
  storyView: (slug, title, category) =>
    trackEvent('story_view', { story_slug: slug, story_title: title, story_category: category }),

  /** Fired when a place detail page is fully loaded. */
  placeView: (slug, name) =>
    trackEvent('place_view', { place_slug: slug, place_name: name }),

  /** Fired when the newsletter form is submitted (before response). */
  newsletterSubmit: () =>
    trackEvent('newsletter_submit'),

  /** Fired when the newsletter subscription succeeds. */
  newsletterSuccess: () =>
    trackEvent('newsletter_signup', { method: 'footer_form' }),

  /** Fired when any PDF download link is clicked. */
  pdfDownload: (pdfName) =>
    trackEvent('file_download', { file_name: pdfName, file_type: 'pdf' }),

  /** Fired when a user clicks a "related place" chip inside a story. */
  relatedPlaceClick: (placeSLug, fromStorySlug) =>
    trackEvent('related_place_click', { place_slug: placeSLug, from_story: fromStorySlug }),

  /** Fired when a search query is submitted. */
  search: (query) =>
    trackEvent('search', { search_term: query }),

  /** Fired when an in-text place link is clicked. */
  inTextPlaceLink: (placeSlug, storySlug) =>
    trackEvent('in_text_place_link_click', { place_slug: placeSlug, story_slug: storySlug }),
}
