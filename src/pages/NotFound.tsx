import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-bold">{t('notFound.title')}</h1>
      <Link to="/" className="font-medium text-violet-700 hover:underline dark:text-violet-300">
        {t('notFound.back')}
      </Link>
    </div>
  )
}
