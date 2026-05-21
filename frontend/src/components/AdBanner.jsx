/**
 * AdBanner — full-width horizontal ad unit for in-content placement.
 * Swap the inner div for a real AdSense <ins> tag when ready.
 *
 * Sizes:
 *   "leaderboard" — 728×90  (desktop mid-content)
 *   "mobile"      — 320×100 (mobile in-content)
 *   "rectangle"   — 336×280 (large rectangle, between sections)
 */
const SIZES = {
  leaderboard: { w: 728, h: 90 },
  mobile:      { w: 320, h: 100 },
  rectangle:   { w: 336, h: 280 },
}

export default function AdBanner({ size = 'leaderboard', className = '' }) {
  const { w, h } = SIZES[size] ?? SIZES.leaderboard

  return (
    <div className={`w-full flex flex-col items-center my-8 ${className}`}>
      <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1.5 select-none">
        Advertisement
      </p>

      {/*
        ── SWAP THIS FOR YOUR REAL ADSENSE TAG ─────────────────────────
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        ────────────────────────────────────────────────────────────────
      */}
      <div
        className="rounded-xl border border-dashed border-gray-200 bg-gray-50
                   flex flex-col items-center justify-center gap-2 text-center px-4 w-full"
        style={{ maxWidth: w, minHeight: h }}
      >
        <span className="text-2xl opacity-20 select-none" aria-hidden>📣</span>
        <p className="text-xs font-semibold text-gray-300">Advertisement</p>
        <p className="text-[10px] text-gray-200 tabular-nums">{w} × {h}</p>
      </div>
    </div>
  )
}
