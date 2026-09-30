import { useCallback, useEffect, useState } from 'react'
import { drawNext, emptyDeck, restoreDeck, type DeckState } from './deck'

const STORAGE_KEY = 'entrami:kidenou:deck:v1'

function load(total: number): DeckState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return restoreDeck(raw ? JSON.parse(raw) : null, total)
  } catch {
    return restoreDeck(null, total)
  }
}

export function useKidenou(total: number) {
  const [deck, setDeck] = useState(() => load(total))

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(deck))
    } catch {
      // Stockage indisponible (navigation privée) : le jeu fonctionne sans persistance.
    }
  }, [deck])

  const next = useCallback(() => setDeck((d) => drawNext(total, d)), [total])
  const restart = useCallback(() => setDeck(drawNext(total, emptyDeck)), [total])

  return {
    current: deck.current,
    seenCount: deck.seen.length,
    finished: deck.current === null,
    next,
    restart,
  }
}
