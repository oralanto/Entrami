import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { site } from '../legal/site'

interface Section {
  title: string
  paragraphs: string[]
  items?: string[]
  after?: string[]
}

export default function LegalPage({ page }: { page: 'mentions' | 'privacy' }) {
  const { t } = useTranslation('legal')
  const { t: tc } = useTranslation()
  const sections = t(`${page}.sections`, { ...site, returnObjects: true }) as Section[]

  return (
    <article className="flex flex-col gap-6 py-4">
      <Link to="/" className="text-sm font-medium text-violet-700 hover:underline dark:text-violet-300">
        ← {tc('game.back')}
      </Link>
      <header>
        <h1 className="text-3xl font-black tracking-tight">{t(`${page}.title`)}</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {t('updated', { date: site.updatedAt })}
        </p>
      </header>
      {sections.map((s) => (
        <section key={s.title} className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-violet-700 dark:text-violet-300">{s.title}</h2>
          {s.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {s.items && (
            <ul className="list-disc pl-5 marker:text-violet-600">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          )}
          {s.after?.map((p) => <p key={p}>{p}</p>)}
        </section>
      ))}
    </article>
  )
}
