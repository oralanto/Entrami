import type { ComponentType } from 'react'
import Kidenou from './kidenou/Kidenou'

export interface GameDefinition {
  /** Identifiant utilisé dans l'URL et comme namespace de traduction. */
  id: 'kidenou'
  emoji: string
  Play: ComponentType
}

export const games: GameDefinition[] = [{ id: 'kidenou', emoji: '🗳️', Play: Kidenou }]

export const getGame = (id: string | undefined) => games.find((g) => g.id === id)
