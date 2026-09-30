import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'

export default function Layout() {
  const { t } = useTranslation()
  const { t: tl } = useTranslation('legal')

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pb-6 sm:px-6">
      <header className="flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-extrabold tracking-tight text-violet-700 dark:text-violet-300">
          {t('app.name')}
        </Link>
        <ThemeToggle />
      </header>
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <footer className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>{tl('footer.adults')}</p>
        <nav className="flex gap-4">
          <Link to="/mentions-legales" className="hover:underline">{tl('footer.mentions')}</Link>
          <Link to="/confidentialite" className="hover:underline">{tl('footer.privacy')}</Link>
        </nav>
      </footer>
    </div>
  )
}
