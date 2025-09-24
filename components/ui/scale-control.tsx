"use client"
// hi
import { useEffect, useState } from "react"
import { Minus, Plus } from "lucide-react"

const MIN = 0.75
const MAX = 1.3
const STEP = 0.05
const DEFAULT = 1
const STORAGE_KEY = "ui-scale"

function clamp(value: number) {
  return Math.min(MAX, Math.max(MIN, value))
}

export default function ScaleControl() {
  const [scale, setScale] = useState(DEFAULT)

  // Initialize from storage and apply to :root
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      const parsed = saved ? parseFloat(saved) : DEFAULT
      const initial = clamp(isNaN(parsed) ? DEFAULT : parsed)
      applyScale(initial)
    } catch {
      applyScale(DEFAULT)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const applyScale = (next: number) => {
    const s = clamp(parseFloat(next.toFixed(2)))
    setScale(s)
    // Apply to CSS variable consumed in globals.css
    document.documentElement.style.setProperty("--ui-scale", String(s))
    try {
      localStorage.setItem(STORAGE_KEY, String(s))
    } catch {}
  }

  const increment = () => applyScale(scale + STEP)
  const decrement = () => applyScale(scale - STEP)
  const reset = () => applyScale(1)

  const percent = Math.round(scale * 100)

  return (
    <div className="fixed right-3 bottom-3 md:right-4 md:bottom-4 z-[60] select-none">
      <div className="bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full flex items-center gap-1 px-2 py-1">
        <button
          onClick={decrement}
          aria-label="Decrease UI size"
          className="p-1 rounded-full hover:bg-gray-100 text-gray-700 disabled:opacity-40"
          disabled={scale <= MIN + 0.001}
          title="Smaller"
        >
          <Minus className="h-4 w-4" />
        </button>
        <button
          onClick={reset}
          aria-label="Reset UI size"
          className="px-2 text-xs font-medium text-gray-700 hover:text-gray-900"
          title="Click to reset"
        >
          {percent}%
        </button>
        <button
          onClick={increment}
          aria-label="Increase UI size"
          className="p-1 rounded-full hover:bg-gray-100 text-gray-700 disabled:opacity-40"
          disabled={scale >= MAX - 0.001}
          title="Bigger"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}