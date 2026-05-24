import { useState } from 'react'

function extractVideoId(url) {
  if (!url) return null
  // youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/)
  if (shortMatch) return shortMatch[1]
  // youtube.com/embed/ID
  const embedMatch = url.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/)
  if (embedMatch) return embedMatch[1]
  // youtube.com/watch?v=ID
  const watchMatch = url.match(/[?&]v=([A-Za-z0-9_-]{11})/)
  if (watchMatch) return watchMatch[1]
  return null
}

export default function YouTubeLiteEmbed({ youtubeUrl, title = 'Watch video' }) {
  const [playing, setPlaying] = useState(false)

  const videoId = extractVideoId(youtubeUrl)
  if (!videoId) return null

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`

  return (
    <div>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 cursor-pointer">
        {playing ? (
          <iframe
            src={embedSrc}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="absolute inset-0"
            onClick={() => setPlaying(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
            aria-label={`Play ${title}`}
          >
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay for darkening */}
            <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-600">
        🎬 {title}
      </p>
    </div>
  )
}
