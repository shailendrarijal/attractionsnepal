import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.js'],
    globals: true,
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Raise the chunk size warning threshold — we're splitting intentionally
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core — always needed, own chunk
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react'
          }
          // Router — needed once React loads
          if (id.includes('node_modules/react-router-dom/') || id.includes('node_modules/react-router/')) {
            return 'router'
          }
          // Data fetching
          if (id.includes('@tanstack/react-query')) {
            return 'query'
          }
          // Google Maps — only loads when a map is rendered (lazy components)
          if (id.includes('@vis.gl/react-google-maps')) {
            return 'maps'
          }
          // Markdown rendering — only loads on place/blog pages (lazy)
          if (
            id.includes('react-markdown') ||
            id.includes('rehype-raw') ||
            id.includes('remark-gfm') ||
            id.includes('remark-parse') ||
            id.includes('rehype') ||
            id.includes('unified') ||
            id.includes('vfile') ||
            id.includes('micromark') ||
            id.includes('mdast') ||
            id.includes('hast')
          ) {
            return 'markdown'
          }
          // Helmet (SEO) — shared across pages but small enough to stay in index
        },
      },
    },
  },
})
