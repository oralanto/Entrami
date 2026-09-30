import { describe, expect, it } from 'vitest'
import { drawNext, emptyDeck, restoreDeck } from './deck'

describe('drawNext', () => {
  it('ne repioche jamais une question déjà vue', () => {
    let state = emptyDeck
    const drawn: number[] = []
    for (let i = 0; i < 20; i++) {
      state = drawNext(20, state)
      drawn.push(state.current!)
    }
    expect(new Set(drawn).size).toBe(20)
  })

  it('termine le paquet quand tout est passé', () => {
    const state = drawNext(2, drawNext(2, drawNext(2, emptyDeck)))
    expect(state.current).toBeNull()
    expect(state.seen).toHaveLength(2)
  })
})

describe('restoreDeck', () => {
  it('pioche une première question sans état stocké', () => {
    const state = restoreDeck(null, 5)
    expect(state.current).not.toBeNull()
    expect(state.seen).toEqual([state.current])
  })

  it('reprend la question courante après un rechargement', () => {
    expect(restoreDeck({ seen: [3, 1], current: 1 }, 5)).toEqual({ seen: [3, 1], current: 1 })
  })

  it('reste terminé quand tout a été vu', () => {
    expect(restoreDeck({ seen: [0, 1, 2], current: null }, 3)).toEqual({
      seen: [0, 1, 2],
      current: null,
    })
  })

  it('ignore les indices invalides', () => {
    const state = restoreDeck({ seen: [0, 99, -1, 'x'], current: 99 }, 3)
    expect(state.seen.every((n) => n >= 0 && n < 3)).toBe(true)
  })
})
