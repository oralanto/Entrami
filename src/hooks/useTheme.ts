import { useCallback, useState } from 'react'

const STORAGE_KEY = 'entrami:theme'

export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
    } catch {
      // Préférence non persistée.
    }
    setDark(next)
  }, [])

  return { dark, toggle }
}
