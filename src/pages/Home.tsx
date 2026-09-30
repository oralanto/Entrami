import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { games } from '../games/registry'

function GameCard({ id, emoji }: { id: string; emoji: string }) {
  const { t } = useTranslation(id)

  return (
    <Link
      to={`/jeux/${id}`}
      className="group flex items-center gap-4 rounded-2xl border border-violet-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400 hover:shadow-md dark:border-violet-900 dark:bg-slate-900 dark:hover:border-violet-600"
    >
      <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-violet-100 text-3xl dark:bg-violet-900/50">
        {emoji}
      </span>
      <span className="flex-1">
        <span className="block text-lg font-bold">{t('name')}</span>
        <span className="block text-sm text-slate-600 dark:text-slate-400">{t('tagline')}</span>
      </span>
      <span aria-hidden className="text-2xl text-violet-500 transition group-hover:translate-x-1">→</span>
    </Link>
  )
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-10 py-6 sm:py-12">
      <section className="text-center">
        <h1 className="bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl">
          {t('app.name')}
        </h1>
        <p className="mt-4 text-xl font-semibold sm:text-2xl">{t('app.tagline')}</p>
        <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-400">{t('app.description')}</p>
      </section>

      <section aria-labelledby="games-title" className="flex flex-col gap-3">
        <h2 id="games-title" className="text-sm font-semibold tracking-wide text-violet-700 uppercase dark:text-violet-300">
          {t('home.gamesTitle')}
        </h2>
        {games.map((g) => (
          <GameCard key={g.id} id={g.id} emoji={g.emoji} />
        ))}
      </section>
    </div>
  )
}
