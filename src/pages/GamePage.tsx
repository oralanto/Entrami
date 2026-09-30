import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getGame } from '../games/registry'
import NotFound from './NotFound'

const backLink =
  'text-sm font-medium text-violet-700 hover:underline dark:text-violet-300'

export function GameIntro() {
  const { gameId } = useParams()
  const game = getGame(gameId)
  const { t } = useTranslation(game?.id ?? 'kidenou')
  const { t: tc } = useTranslation()

  if (!game) return <NotFound />
  const rules = t('rules', { returnObjects: true }) as string[]

  return (
    <div className="flex flex-col gap-6 py-4">
      <Link to="/" className={backLink}>
        ← {tc('game.back')}
      </Link>

      <div className="text-center">
        <p className="text-5xl">{game.emoji}</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">{t('name')}</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-400">{t('description')}</p>
      </div>

      <Link
        to={`/jeux/${game.id}/jouer`}
        className="rounded-2xl bg-violet-600 px-6 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-violet-700 active:scale-[0.98] dark:bg-violet-500 dark:hover:bg-violet-400"
      >
        {tc('game.play')}
      </Link>

      <section className="rounded-2xl border border-violet-200 bg-white p-5 dark:border-violet-900 dark:bg-slate-900">
        <h2 className="text-lg font-bold">{tc('game.rulesTitle')}</h2>
        <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 marker:font-bold marker:text-violet-600 dark:marker:text-violet-400">
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export function GamePlay() {
  const { gameId } = useParams()
  const game = getGame(gameId)
  const { t } = useTranslation(game?.id ?? 'kidenou')

  if (!game) return <NotFound />

  return (
    <div className="flex flex-1 flex-col gap-4 py-2">
      <Link to={`/jeux/${game.id}`} className={backLink}>
        ← {t('name')} · {t('play.rulesLink')}
      </Link>
      <game.Play />
    </div>
  )
}
