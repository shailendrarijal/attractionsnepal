/**
 * AdSlot — a styled placeholder for a single advertisement unit.
 *
 * Drop a real ad tag (AdSense, affiliate banner, local business image)
 * inside this component later by replacing the placeholder div below.
 *
 * Props:
 *   width   — max pixel width  (default 300)
 *   height  — min pixel height (default 250)
 *   label   — small text shown above the slot (default "Advertisement")
 *   className — extra Tailwind classes for the outer wrapper
 */
export default function AdSlot({ width = 300, height = 250, label = 'Advertisement', className = '' }) {
  return (
    <div className={`w-full ${className}`}>
      {/* Label */}
      <p className="text-center text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1.5 select-none">
        {label}
      </p>

      {/*
        ── SWAP THIS DIV FOR YOUR REAL AD TAG ──────────────────────────
        e.g. <ins className="adsbygoogle" ... />  for AdSense
             <img src="..." />                    for a local business banner
             <a href="..."><img src="..." /></a>  for an affiliate banner
        ────────────────────────────────────────────────────────────────
      */}
      <div
        className="mx-auto rounded-xl border border-dashed border-gray-200 bg-gray-50
                   flex flex-col items-center justify-center gap-2 text-center px-4"
        style={{ maxWidth: width, minHeight: height }}
      >
        <span className="text-3xl opacity-20 select-none" aria-hidden>📣</span>
        <p className="text-xs font-semibold text-gray-300">Your ad here</p>
        <p className="text-[10px] text-gray-200 tabular-nums">{width} × {height} px</p>
      </div>
    </div>
  )
}
