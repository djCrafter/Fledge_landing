import { useTranslation } from 'react-i18next';

const LANGS = ['en', 'fr'];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2);

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LANGS.map((lng) => (
        <button
          key={lng}
          type="button"
          className={current === lng ? 'active' : ''}
          aria-pressed={current === lng}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
