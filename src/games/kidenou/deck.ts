export interface DeckState {
  /** Indices de toutes les questions déjà affichées, y compris la courante. */
  seen: number[]
  /** Indice de la question affichée, ou null si le paquet est terminé. */
  current: number | null
}

export const emptyDeck: DeckState = { seen: [], current: null }

export function drawNext(total: number, state: DeckState, random = Math.random): DeckState {
  const seen = new Set(state.seen)
  const remaining: number[] = []
  for (let i = 0; i < total; i++) if (!seen.has(i)) remaining.push(i)

  if (remaining.length === 0) return { seen: state.seen, current: null }

  const next = remaining[Math.floor(random() * remaining.length)]
  return { seen: [...state.seen, next], current: next }
}

/** Nettoie un état stocké (données corrompues, paquet modifié) puis pioche si besoin. */
export function restoreDeck(raw: unknown, total: number): DeckState {
  const candidate = raw as Partial<DeckState> | null
  const seen = Array.isArray(candidate?.seen)
    ? [...new Set(candidate.seen.filter((n) => Number.isInteger(n) && n >= 0 && n < total))]
    : []
  const current =
    typeof candidate?.current === 'number' && seen.includes(candidate.current)
      ? candidate.current
      : null

  const state: DeckState = { seen, current }
  const isFinished = current === null && seen.length >= total
  return current === null && !isFinished ? drawNext(total, state) : state
}
