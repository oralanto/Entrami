import { useTranslation } from 'react-i18next'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { t } = useTranslation()
  const { dark, toggle } = useTheme()
  const label = dark ? t('theme.toLight') : t('theme.toDark')

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-10 place-items-center rounded-full text-xl transition hover:bg-violet-100 dark:hover:bg-violet-900/40"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
