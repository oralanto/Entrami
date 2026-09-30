import { useTranslation } from 'react-i18next'
import { useKidenou } from './useKidenou'

export default function Kidenou() {
  const { t } = useTranslation('kidenou')
  const questions = t('questions', { returnObjects: true }) as string[]
  const { current, seenCount, finished, next, restart } = useKidenou(questions.length)

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>{t('play.progress', { current: Math.min(seenCount, questions.length), total: questions.length })}</span>
        <button
          type="button"
          onClick={restart}
          className="rounded-md px-2 py-1 font-medium text-violet-700 hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-900/40"
        >
          {t('play.restart')}
        </button>
      </div>

      <div
        key={current ?? 'finished'}
        className="flex flex-1 animate-pop-in flex-col items-center justify-center rounded-3xl bg-linear-to-br from-violet-600 to-fuchsia-600 p-8 text-center text-white shadow-xl shadow-violet-500/20 dark:shadow-violet-900/40"
      >
        {finished ? (
          <>
            <p className="text-5xl">🎉</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{t('play.finishedTitle')}</h2>
            <p className="mt-3 max-w-md text-violet-100">{t('play.finishedText')}</p>
          </>
        ) : (
          <p className="text-2xl leading-snug font-bold sm:text-4xl">{questions[current!]}</p>
        )}
      </div>

      <button
        type="button"
        onClick={finished ? restart : next}
        className="rounded-2xl bg-violet-600 px-6 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-violet-700 active:scale-[0.98] dark:bg-violet-500 dark:hover:bg-violet-400"
      >
        {finished ? t('play.restart') : t('play.next')}
      </button>
    </div>
  )
}
